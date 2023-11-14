import { useState } from "preact/hooks"
import PayTable from "../components/PayTable";
import { Data } from "../type";
import "./eplacan.css";
import PayForm from "../components/PayForm";

export default function EPlacan(
    { path }: { path: string }
) {

    const fakeData: Data[] = [
        {
            ip: 1,
            job: "Scientist",
            school: "UNI Bio",
            hours: 40,
            pay: 40000
        },
        {
            ip: 2,
            job: "Plummer",
            school: "Strojna",
            hours: 40,
            pay: 30000
        },
        {
            ip: 3,
            job: "Jogurt tester",
            school: "gimnazija",
            hours: 40,
            pay: 35000
        },
        {
            ip: 4,
            job: "Clown",
            school: "doktor ekonomije",
            hours: 40,
            pay: 40000
        },
        {
            ip: 5,
            job: "Store Clerk",
            school: "Nanotech",
            hours: 40,
            pay: 30000
        },
        {
            ip: 6,
            job: "Actor",
            school: "Oxfort",
            hours: 40,
            pay: 70000
        },
    ]

    const [formOpen, setFormOpen] = useState(false);
    const [filterOpen, setFilterOpen] = useState(false);

    return (<>
        {!formOpen ?
            <button
                onClick={() => setFormOpen(!formOpen)}>
                Želim deliti svoje stanje!
            </button> :
            <PayForm />}
        <button
            id="filters"
            onClick={() => setFilterOpen(!filterOpen)}>
            Filtriraj
        </button>
        <PayTable data={fakeData} />
    </>)
}