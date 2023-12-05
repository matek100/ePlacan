import { useState } from "preact/hooks"
import { Data } from "../type";
import PayForm from "../components/PayForm";
import PayFilter from "../components/PayFilter";
import PayTable from "../components/PayTable";
import "./eplacan.css";

export default function EPlacan(
    { path }: { path: string }
) {

    const fakeData: Data[] = [
        {
            ip: 1,
            job: "Scientist",
            school: "UNI Bio",
            years: 3,
            hours: 40,
            pay: 40000
        },
        {
            ip: 2,
            job: "Plummer",
            school: "Strojna",
            years: 1,
            hours: 40,
            pay: 30000
        },
        {
            ip: 3,
            job: "Jogurt tester",
            school: "gimnazija",
            years: 5,
            hours: 40,
            pay: 35000
        },
        {
            ip: 4,
            job: "Clown",
            school: "doktor ekonomije",
            years: 15,
            hours: 40,
            pay: 40000
        },
        {
            ip: 5,
            job: "Store Clerk",
            school: "Nanotech",
            years: 2,
            hours: 40,
            pay: 30000
        },
        {
            ip: 6,
            job: "Actor",
            school: "Oxfort",
            years: 5,
            hours: 40,
            pay: 70000
        },
    ]

    const [formOpen, setFormOpen] = useState(false);
    const [filterOpen, setFilterOpen] = useState(false);

    return (<>

        <PayForm
            open={formOpen}
            setOpen={setFormOpen}
        />

        <PayTable
            data={fakeData}
            formOpen={formOpen}
            setFilterOpen={setFilterOpen}
        />

        <PayFilter
            filterOpen={filterOpen}
            setFilterOpen={setFilterOpen}
        />

    </>)
}