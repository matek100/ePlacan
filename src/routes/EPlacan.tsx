import { useState } from "preact/hooks"
import "./eplacan.css";

export default function EPlacan(
    { path }: { path: string }
) {

    type Data = {
        ip: number,
        job: string,
        school: string,
        hours: number,
        pay: number
    }

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
            <form id="form">
                <label class={"form-input"}>
                    <span>Naziv poklica:</span>
                    <input type={"text"}></input>
                </label>
                <label class={"form-input"}>
                    <span>Povprečje ur na teden:</span>
                    <input type={"number"}></input>
                </label>
                <label class={"form-input"}>
                    <span>Mesečni prihodek:</span>
                    <input type={"number"}></input>
                </label>
                <label class={"form-input"}>
                    <span>Dosežena izobrazba:</span>
                    <select>
                        <option></option>
                        <option>Option One</option>
                        <option>Option Two</option>
                    </select>
                </label>
            </form>}
        <button
            id="filters"
            onClick={() => setFilterOpen(!filterOpen)}>
            Filtriraj
        </button>
        <div id="results">
            <table>
                <thead>
                    <tr>
                        <td>Plačilo</td>
                        <td>Ure</td>
                        <td>Izobrazba</td>
                        <td>Plača</td>
                    </tr>
                </thead>
                <tbody>
                    {fakeData.map(
                        (info, index) => {
                            return (
                                <tr>
                                    <td>{info.job}</td>
                                    <td>{info.hours}</td>
                                    <td>{info.school}</td>
                                    <td>{info.pay}</td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </div>
    </>)
}