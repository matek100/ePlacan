from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy import create_engine, Column, Integer, String, Float, DateTime, Enum as SQLEnum, text
from sqlalchemy.orm import sessionmaker, declarative_base
from datetime import datetime
import csv
import io
from fastapi.responses import StreamingResponse
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from fastapi.middleware.cors import CORSMiddleware
import os
import enum

# Load environment variables
DATABASE_URL = os.getenv("DATABASE_URL")

# Setup DB
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# Rate Limiting
limiter = Limiter(key_func=get_remote_address)
app = FastAPI()
app.state.limiter = limiter
app.add_exception_handler(429, _rate_limit_exceeded_handler)

#CORSM
app.add_middleware(
    CORSMiddleware,
    allow_origins=["e-placan.vercel.app"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define Enum for Education Level
class EducationLevel(enum.Enum):
    HIGH_SCHOOL = "High School"
    BACHELORS = "Bachelors"
    MASTERS = "Masters"
    DOCTORATE = "Doctorate"
    OTHER = "Other"

# Define Salary Model
class SalaryEntry(Base):
    __tablename__ = "salaries"
    id = Column(Integer, primary_key=True, index=True)
    job = Column(String, index=True)
    hours_per_week = Column(Float)
    experience_years = Column(Integer)
    education_level = Column(SQLEnum(EducationLevel))
    education_field = Column(String)
    monthly_salary = Column(Float)
    date_added = Column(DateTime, default=datetime.utcnow)

Base.metadata.create_all(bind=engine)

# Dependency to get DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# Validate input
def validate_entry(entry: SalaryEntry):
    if not entry.job or not entry.education_field:
        raise HTTPException(status_code=400, detail="Job and Education Field are required.")
    if entry.hours_per_week <= 0 or entry.monthly_salary <= 0:
        raise HTTPException(status_code=400, detail="Hours per week and salary must be positive numbers.")
    if entry.experience_years < 0:
        raise HTTPException(status_code=400, detail="Experience years cannot be negative.")
    if entry.education_level not in EducationLevel:
        raise HTTPException(status_code=400, detail="Invalid education level.")

# API to add a salary entry
@app.post("/add")
@limiter.limit("3/minute")  # Prevent spam (max 3 per minute per IP)
def add_salary(entry: SalaryEntry, db=Depends(get_db)):
    try:
        validate_entry(entry)
        db.add(entry)
        db.commit()
        return {"message": "Entry added successfully"}
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=400, detail=str(e))

# API to fetch last 50 salary entries
@app.get("/salaries/last50")
def get_last_50_salaries(db=Depends(get_db)):
    try:
        return db.query(SalaryEntry).order_by(SalaryEntry.date_added.desc()).limit(50).all()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# API to fetch all salary entries
@app.get("/salaries/all")
def get_all_salaries(db=Depends(get_db)):
    try:
        return db.query(SalaryEntry).all()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# API to fetch salary data based on SQL query received from frontend
@app.post("/salaries/query")
def get_salaries_by_query(sql_query: str, db=Depends(get_db)):
    try:
        result = db.execute(text(sql_query)).fetchall()
        return result
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

# Export as CSV
@app.get("/export")
def export_data(db=Depends(get_db)):
    try:
        entries = db.query(SalaryEntry).all()
        output = io.StringIO()
        writer = csv.writer(output)
        writer.writerow(["Job", "Hours/Week", "Experience", "Education Level", "Education Field", "Monthly Salary", "Date Added"])
        for entry in entries:
            writer.writerow([entry.job, entry.hours_per_week, entry.experience_years, entry.education_level.value, entry.education_field, entry.monthly_salary, entry.date_added])
        output.seek(0)
        return StreamingResponse(output, media_type="text/csv", headers={"Content-Disposition": "attachment; filename=salaries.csv"})
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
