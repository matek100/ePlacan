import { Data } from "../type"

export default function PayTable(
    { data }: { data: Data[] }
) {
    return (
        <table id="results">
            <caption>Seznam deljenih plačnih razmerij</caption>
            <thead id="table-head">
                <tr>
                    <th>Plačilo</th>
                    <th>Ure</th>
                    <th>Izobrazba</th>
                    <th>Leta</th>
                    <th>Plača</th>
                </tr>
            </thead>
            <tbody>
                {data.map(
                    (info, index) => {
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
    )
}