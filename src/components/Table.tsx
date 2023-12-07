import { useEffect } from "preact/hooks";
import { Data } from "../type"
import usePlacanStore from "../usePlacanStore";
import useFilter from "../utils/useFilter";
import "./table.css";

export default function Table(
    { formOpen }: {
        formOpen: boolean,
    }
) {

    const fakeData: Data[] = [
        {
            id: 1,
            ip: 1000569,
            job: "Scientist",
            school: "Biotehniška",
            schoolTier: 4,
            years: 3,
            hours: 40,
            pay: 40000
        },
        {
            id: 2,
            ip: 1010569,
            job: "Plummer",
            school: "Strojna",
            schoolTier: 4,
            years: 1,
            hours: 40,
            pay: 30000
        },
        {
            id: 3,
            ip: 1030569,
            job: "Jogurt tester",
            school: "Splošna gimnazija",
            schoolTier: 2,
            years: 5,
            hours: 20,
            pay: 35000
        },
        {
            id: 4,
            ip: 1000669,
            job: "Clown",
            school: "Ekonomija",
            schoolTier: 3,
            years: 15,
            hours: 40,
            pay: 40000
        },
        {
            id: 5,
            ip: 2000569,
            job: "Store Clerk",
            school: "Biotehniška",
            schoolTier: 5,
            years: 2,
            hours: 40,
            pay: 30000
        },
        {
            id: 6,
            ip: 1000579,
            job: "Actor",
            school: "Tujina - Oxfort",
            schoolTier: 4,
            years: 5,
            hours: 60,
            pay: 70000
        },
    ]

    const {
        backup,
        shownData,
        setShownData,
        setBackup,
        setFilter,
    } = usePlacanStore();

    const { sortForward, sortBackward } = useFilter();

    useEffect(() => {
        setBackup(sortForward("id", fakeData));
        setShownData(sortBackward("id", fakeData));
        window.onscroll = function () { scrollFunction() };
    }, []);

    function scrollFunction() {
        const btn = document.getElementById("upBtn");
        if (btn) {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                btn.style.display = "block";
            } else {
                btn.style.display = "none";
            }
        }
    }

    const moveToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

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
                                        {info.hours} ur | {info.years} let{
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

        {shownData.length < 1 ?
            <button
                id="emptyTableBtn"
                onClick={() => setShownData(sortBackward("id", backup))}>
                Obnovi seznam
            </button> :
            <></>}

        <button
            id="upBtn"
            onClick={() => moveToTop()}>
            To the top
        </button>
    </>) : <></>
}