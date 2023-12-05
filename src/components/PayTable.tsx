import { Data } from "../type"

export default function PayTable(
    { data, formOpen, setFilterOpen }: {
        data: Data[],
        formOpen: boolean,
        setFilterOpen(newState: boolean): void
    }
) {
    return !formOpen ? (<>
        <table id="results">
            <caption>Seznam deljenih plačnih razmerij</caption>
            <thead id="table-head">
                <tr>
                    <th onClick={() => setFilterOpen(true)}>Plačilo</th>
                    <th onClick={() => setFilterOpen(true)}>Ure</th>
                    <th onClick={() => setFilterOpen(true)}>Izobrazba</th>
                    <th onClick={() => setFilterOpen(true)}>Leta</th>
                    <th onClick={() => setFilterOpen(true)}>Plača</th>
                </tr>
            </thead>
            <tbody>
                {data.map(
                    (info) => {
                        return (
                            <tr>
                                <td>{info.job}</td>
                                <td>{info.hours}</td>
                                <td>{info.school}</td>
                                <td>{info.years}</td>
                                <td>{info.pay}</td>
                            </tr>
                        )
                    })}
            </tbody>
        </table>

        <button id="up-btn">
            To the top
        </button>
    </>) : <></>
}