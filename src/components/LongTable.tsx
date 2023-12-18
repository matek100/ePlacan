import usePlacanStore from "../usePlacanStore";
import "./table.css";

export default function LongTable() {

    const {
        shownData,
        removedData,
        setFilter,
    } = usePlacanStore();

    return (
        <table id="longTable">

            <caption class={"defMouse"}>Seznam deljenih plačnih razmerij</caption>

            <thead id="tableBox" class={"defMouse"}>
                <tr>
                    <th>Info Tip</th>
                    <th>Info</th>
                </tr>
            </thead>

            <tbody>
                {shownData.map(
                    (info) => {
                        return (
                            <>
                                <tr class={"infoRow"}>
                                    <td
                                        class={"filterOpenBtn infoCell actMouse"}
                                        onClick={() => setFilter("job")}>
                                        Naziv
                                    </td>
                                    <td class={"infoCell"}>
                                        {!removedData["job"] ? info.job : ""}
                                    </td>
                                </tr>

                                <tr class={"infoRow"}>
                                    <td
                                        class={"infoCell actMouse"}>
                                        <span
                                            class={"filterOpenBtn"}
                                            onClick={() => setFilter("hours")}>
                                            Ure
                                        </span>
                                        {" | "}
                                        <span
                                            class={"filterOpenBtn"}
                                            onClick={() => setFilter("years")}>
                                            Leta
                                        </span>
                                    </td>
                                    <td class={"infoCell"}>
                                        {`${!removedData["hours"] ? info.hours + " ur" : ""}
                                        ${!removedData["hours"] && !removedData["years"] ? " | " : ""}
                                        ${!removedData["years"] ? `${info.years} let${info.years === 1 ?
                                                "o" :
                                                info.years === 2 ?
                                                    "i" :
                                                    info.years === 3 || info.years === 4 ?
                                                        "a" :
                                                        ""}`
                                                : ""}
                                        `}
                                    </td>
                                </tr>

                                <tr class={"infoRow"}>
                                    <td
                                        class={"filterOpenBtn infoCell actMouse"}
                                        onClick={() => setFilter("school")}>
                                        Izobrazba
                                    </td>
                                    <td class={"infoCell"}>
                                        {!removedData["schoolTier"] ?
                                            <span class={"block"}>
                                                {info.schoolTier + ". bol"}
                                            </span> :
                                            <></>}
                                        {!removedData["school"] ?
                                            <span class={"block"}>
                                                {info.school}
                                            </span> :
                                            <></>}
                                    </td>
                                </tr>

                                <tr class={"infoRow"}>
                                    <td
                                        class={"filterOpenBtn infoCell actMouse"}
                                        onClick={() => setFilter("pay")}>
                                        Plača
                                    </td>
                                    <td class={"infoCell"}>
                                        {
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
                                        } €
                                    </td>
                                </tr>

                                {/*TA VRSTICA TABELO UKANE, DA NAREDI LINIJO*/}
                                <tr class={"rowUndeline"}>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </>
                        )
                    })}
            </tbody>

        </table>
    )
}