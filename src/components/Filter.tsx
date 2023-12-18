import { useState } from "preact/hooks";
import ArrowUp from "../assets/ArrowUp";
import usePlacanStore from "../usePlacanStore";
import useFilter from "../utils/useFilter";
import "./filter.css";

export default function Filter() {

    const {
        filter,
        backup,
        removedData,
        setFilter,
        setShownData
    } = usePlacanStore();

    const {
        activeSchoolTiers,
        changeSchoolTierStatus,
        schoolTierFilter,
        sortForward,
        sortBackward,
        querryFilter,
        rangeFilter,
        remoteDataType,
    } = useFilter();

    const [keepArrData, setKeepArrData] = useState(true);

    const tierBtn = (btnNum: number) => {
        return <button
            class={"schoolTierBtn"}
            style={{
                backgroundColor: activeSchoolTiers[btnNum - 1].status ? "" : "rgba(26, 26, 26, 0.8)"
            }}
            onClick={() => {
                changeSchoolTierStatus(btnNum);
                schoolTierFilter();
            }}>
            {btnNum}
        </button>
    }

    return filter ? (
        <div id="filterPosition" class={"colFlex"}>
            <div id="filterBox" class={"colFlex"}>

                <button
                    id="filterExitBtn"
                    class={"noResizeBtn"}
                    onClick={() => setFilter(null)}>
                    Zapri filter
                </button>

                <div class={"filterOrientation flex"}>
                    <button
                        class={"downBtn flex"}
                        onClick={() => setShownData(sortForward(filter, backup))}>
                        <ArrowUp id={"nazivGor"} />
                    </button>
                    <button
                        class={"upBtn flex"}
                        onClick={() => setShownData(sortBackward(filter, backup))}>
                        <ArrowUp id={"nazivGor"} up={true} />
                    </button>
                </div>

                {filter === "job" ?
                    <span class={"colFlex"}>
                        <input
                            id="jobFilterInput"
                            class={"filterInput"}
                            type="text"
                            placeholder="Naziv dela"
                            autocomplete={"off"}
                            maxLength={20}>
                        </input>
                        <button
                            class={"filterSubmitBtn noResizeBtn"}
                            onClick={() => querryFilter("job", "jobFilterInput", keepArrData)}>
                            Potrdi
                        </button>
                    </span> :
                    <></>}

                {filter === "hours" ?
                    <span class={"colFlex"}>
                        <span class={"flex rangeBox"}>
                            <input
                                id="hoursFilterInputMin"
                                type="text"
                                placeholder="Min ur"
                                autocomplete={"off"}
                                maxLength={20}>
                            </input>
                            <input
                                id="hoursFilterInputMax"
                                type="text"
                                placeholder="Max ur"
                                autocomplete={"off"}
                                maxLength={20}>
                            </input>
                        </span>
                        <button
                            class={"filterSubmitBtn noResizeBtn"}
                            onClick={() => rangeFilter("hours", "hoursFilterInputMin", "hoursFilterInputMax", keepArrData)}>
                            Potrdi
                        </button>
                    </span> :
                    <></>}

                {filter === "school" ?
                    <>
                        <div class={"filterSchoolTierBtns flex"}>
                            {tierBtn(1)}
                            {tierBtn(2)}
                            {tierBtn(3)}
                        </div>
                        <div class={"filterSchoolTierBtns flex"}>
                            {tierBtn(4)}
                            {tierBtn(5)}
                            {tierBtn(6)}
                            {tierBtn(7)}
                        </div>
                        <span class={"colFlex"}>
                            <input
                                id="schoolFilterInput"
                                class={"filterInput"}
                                type="text"
                                placeholder="Naziv šole"
                                autocomplete={"off"}
                                maxLength={20}>
                            </input>
                            <button
                                class={"filterSubmitBtn noResizeBtn"}
                                onClick={() => querryFilter("school", "schoolFilterInput", keepArrData)}>
                                Potrdi
                            </button>
                        </span>
                    </> :
                    <></>}

                {filter === "years" ?
                    <span class={"colFlex"}>
                        <span class={"flex rangeBox"}>
                            <input
                                id="yearsFilterInputMin"
                                type="text"
                                placeholder="Min let"
                                autocomplete={"off"}
                                maxLength={20}>
                            </input>
                            <input
                                id="yearsFilterInputMax"
                                type="text"
                                placeholder="Max let"
                                autocomplete={"off"}
                                maxLength={20}>
                            </input>
                        </span>
                        <button
                            class={"filterSubmitBtn noResizeBtn"}
                            onClick={() => rangeFilter("years", "yearsFilterInputMin", "yearsFilterInputMax", keepArrData)}>
                            Potrdi
                        </button>
                    </span> :
                    <></>
                }

                {
                    filter === "pay" ?
                        <span class={"colFlex"}>
                            <span class={"flex rangeBox"}>
                                <input
                                    id="payFilterInputMin"
                                    type="text"
                                    placeholder="Min €"
                                    autocomplete={"off"}
                                    maxLength={20}>
                                </input>
                                <input
                                    id="payFilterInputMax"
                                    type="text"
                                    placeholder="Max €"
                                    autocomplete={"off"}
                                    maxLength={20}>
                                </input>
                            </span>
                            <button
                                class={"filterSubmitBtn noResizeBtn"}
                                onClick={() => rangeFilter("pay", "payFilterInputMin", "payFilterInputMax", keepArrData)}>
                                Potrdi
                            </button>
                        </span> :
                        <></>
                }

                <button
                    class={"dataBtn colFlex"}
                    onClick={() => setKeepArrData(!keepArrData)}>
                    {keepArrData ?
                        "Uporabi trenutni seznam" :
                        "Uporabi celotni seznam"}
                </button>

                <button
                    class={"dataBtn"}
                    onClick={() => remoteDataType("schoolTier")}>
                    {!removedData[filter] ?
                        `Izloči iz seznama${filter === "school" ? " stopnjo" : ""}` :
                        `Dodaj v seznam${filter === "school" ? " stopnjo" : ""}`}
                </button>

                {filter === "school" ?
                    <button
                        class={"dataBtn"}
                        onClick={() => remoteDataType(filter)}>
                        {!removedData[filter] ?
                            "Izloči iz seznama šolo" :
                            "Dodaj v seznam šolo"}
                    </button> :
                    <></>}

                <button
                    id="filterResetBtn"
                    class={"noResizeBtn"}
                    onClick={() => setShownData(sortBackward("id", backup))}>
                    Obnovi seznam
                </button>

            </div >
        </div >
    ) : <></>
}