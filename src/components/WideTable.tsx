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
                        Naziv dela
                    </th>
                    <th
                        class={"actMouse"}
                        onClick={() => setFilter("hours")}>
                        Ure na teden
                    </th>
                    <th
                        class={"actMouse"}
                        onClick={() => setFilter("school")}>
                        Izobrazba
                    </th>
                    <th
                        class={"actMouse"}
                        onClick={() => setFilter("years")}>
                        Leta izkušenj
                    </th>
                    <th
                        class={"actMouse"}
                        onClick={() => setFilter("pay")}>
                        Plača na mesec
                    </th>
                </tr>
            </thead>

            <tbody>
                {shownData.map(
                    (info) => {
                        return (
                            <tr>
                                <td>{!removedData["job"] ? info.job : ""}</td>
                                <td>{!removedData["hours"] ? info.hours + " ur" : ""}</td>
                                <td>
                                    {!removedData["schoolTier"] ? <span class={"block"}>
                                        {info.schoolTier + ". st"}
                                    </span> : <></>}
                                    {!removedData["school"] ? <span class={"block"}>
                                        {info.school}
                                    </span> : <></>}
                                </td>
                                <td>{!removedData["years"] ? `${info.years} let${info.years === 1 ?
                                    "o" :
                                    info.years === 2 ?
                                        "i" :
                                        info.years === 3 || info.years === 4 ?
                                            "a" :
                                            ""}` : ""}</td>
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