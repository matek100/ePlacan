import { useEffect } from "preact/hooks";
import { Data } from "../type"
import usePlacanStore from "../useStore";
import "./table.css";

export default function Table(
    { formOpen }: {
        formOpen: boolean,
    }
) {

    const fakeData: Data[] = [
        {
            ip: 1,
            job: "Scientist",
            school: "Biotehniška",
            schoolTier: 4,
            years: 3,
            hours: 40,
            pay: 40000
        },
        {
            ip: 2,
            job: "Plummer",
            school: "Strojna",
            schoolTier: 4,
            years: 1,
            hours: 40,
            pay: 30000
        },
        {
            ip: 3,
            job: "Jogurt tester",
            school: "Splošna gimnazija",
            schoolTier: 2,
            years: 5,
            hours: 20,
            pay: 35000
        },
        {
            ip: 4,
            job: "Clown",
            school: "Ekonomija",
            schoolTier: 3,
            years: 15,
            hours: 40,
            pay: 40000
        },
        {
            ip: 5,
            job: "Store Clerk",
            school: "Biotehniška",
            schoolTier: 5,
            years: 2,
            hours: 40,
            pay: 30000
        },
        {
            ip: 6,
            job: "Actor",
            school: "Tujina - Oxfort",
            schoolTier: 4,
            years: 5,
            hours: 60,
            pay: 70000
        },
    ]

    const {
        shownData,
        setShownData,
        setBackup,
        setFilter,
    } = usePlacanStore();

    useEffect(() => {
        setBackup(fakeData);
        setShownData(fakeData);
    }, []);

    return !formOpen ? (<>

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
                                    <td class={"infoCell"}>{info.job}</td>
                                </tr>

                                <tr class={"infoRow"}>
                                    <td
                                        class={"filterOpenBtn infoCell actMouse"}
                                        onClick={() => setFilter("hours")}>
                                        {/*TUKAJ BI NAJ VELJALA DVA FILTRA, NAREDI ZDRUŽEN FILTER*/}
                                        Ure / Leta
                                    </td>
                                    <td class={"infoCell"}>
                                        {info.hours} ur / {info.years} let{
                                            info.years === 1 ?
                                                "o" :
                                                info.years === 2 ?
                                                    "i" :
                                                    info.years === 3 || info.years === 4 ?
                                                        "a" :
                                                        ""
                                        }
                                    </td>
                                </tr>

                                <tr class={"infoRow"}>
                                    <td
                                        class={"filterOpenBtn infoCell actMouse"}
                                        onClick={() => setFilter("school")}>
                                        Izobrazba
                                    </td>
                                    <td class={"infoCell"}>
                                        <span class={"block"}>
                                            {info.schoolTier + ". bol"}
                                        </span>
                                        <span class={"block"}>
                                            {info.school}
                                        </span>
                                    </td>
                                </tr>

                                <tr class={"infoRow"}>
                                    <td
                                        class={" filterOpenBtn infoCell actMouse"}
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

        <button id="up-btn">
            To the top
        </button>
    </>) : <></>
}