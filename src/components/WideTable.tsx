import usePlacanStore from "../usePlacanStore";
import "./table.css";

export default function WideTable() {

    const {
        shownData,
        setFilter,
    } = usePlacanStore();

    return (
        <table id="wideTable">
            <caption>Seznam deljenih plačnih razmerij</caption>
            <thead id="tableBox">
                <tr>
                    <th
                        class={"actMouse"}
                        onClick={() => setFilter("job")}>
                        Naziv
                    </th>
                    <th
                        class={"actMouse"}
                        onClick={() => setFilter("hours")}>
                        Ure
                    </th>
                    <th
                        class={"actMouse"}
                        onClick={() => setFilter("school")}>
                        Izobrazba
                    </th>
                    <th
                        class={"actMouse"}
                        onClick={() => setFilter("years")}>
                        Leta
                    </th>
                    <th
                        class={"actMouse"}
                        onClick={() => setFilter("pay")}>
                        Plača
                    </th>
                </tr>
            </thead>
            <tbody>
                {shownData.map(
                    (info) => {
                        return (
                            <tr>
                                <td>{info.job}</td>
                                <td>{info.hours}</td>
                                <td>
                                    <span class={"block"}>
                                        {info.schoolTier + ". bol"}
                                    </span>
                                    <span class={"block"}>
                                        {info.school}
                                    </span>
                                </td>
                                <td>{info.years}</td>
                                <td>{info.pay}</td>
                            </tr>
                        )
                    })}
            </tbody>
        </table>
    )
}