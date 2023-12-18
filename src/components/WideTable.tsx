import usePlacanStore from "../usePlacanStore";
import "./table.css";

export default function WideTable() {

    const {
        shownData,
        removedData,
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
                                <td>{!removedData["job"] ? info.job : ""}</td>
                                <td>{!removedData["hours"] ? info.hours : ""}</td>
                                <td>
                                    {!removedData["schoolTier"] ? <span class={"block"}>
                                        {info.schoolTier + ". bol"}
                                    </span> : <></>}
                                    {!removedData["school"] ? <span class={"block"}>
                                        {info.school}
                                    </span> : <></>}
                                </td>
                                <td>{!removedData["years"] ? info.years : ""}</td>
                                <td>{!removedData["pay"] ?
                                    info.pay
                                        .toString()
                                        .split("")
                                        .reverse()
                                        .map((number, index) => {
                                            return (
                                                index % 3 === 0 &&
                                                    index !== 0 ?
                                                    number + "." :
                                                    number
                                            )
                                        })
                                        .reverse()
                                        .join("")
                                    + " €" : ""}
                                </td>
                            </tr>
                        )
                    })}
            </tbody>

        </table>
    )
}