import ArrowUp from "../assets/ArrowUp";
import usePlacanStore from "../useStore";
import useComponent from "../utils/useFilter";
import "./filter.css";

export default function Filter() {

    const { filter, setFilter } = usePlacanStore();

    const {
        sortForward,
        sortBackward,
        simpleFilter,
    } = useComponent();

    return filter ? (
        <div id="filterPosition">
            <div id="filterBox">

                <button
                    id="filterExitBtn"
                    class={"noResizeBtn"}
                    onClick={() => setFilter(null)}>
                    Zapri filter
                </button>

                {filter === "job" ?
                    <>
                        <div class={"filterOrientation"}>
                            <button
                                class={"downBtn"}
                                onClick={() => sortForward("job")}>
                                <ArrowUp id={"nazivGor"} />
                            </button>
                            <button
                                class={"upBtn"}
                                onClick={() => sortBackward("job")}>
                                <ArrowUp id={"nazivGor"} up={true} />
                            </button>
                        </div>
                        <span class={"colFlex"}>
                            <input
                                type="text"
                                placeholder="Naziv dela"
                                maxLength={20}>
                            </input>
                            <button
                                class={"filterSubmitBtn noResizeBtn"}
                                onClick={() => {
                                    const el: HTMLInputElement | null = document.getElementById("titleWordFilter");
                                    el ? simpleFilter("job", el.value) : {}
                                }}>
                                Potrdi
                            </button>
                        </span>
                    </> :
                    <></>}

                {filter === "hours" ?
                    <>
                        <div class={"filterOrientation"}>
                            <button
                                class={"downBtn"}
                                onClick={() => sortForward("job")}>
                                <ArrowUp id={"nazivGor"} />
                            </button>
                            <button
                                class={"upBtn"}
                                onClick={() => sortBackward("job")}>
                                <ArrowUp id={"nazivGor"} up={true} />
                            </button>
                        </div>
                        <span class={"colFlex"}>
                            <input
                                type="text"
                                placeholder="Razpon ur"
                                maxLength={20}>
                            </input>
                            <button
                                class={"filterSubmitBtn noResizeBtn"}
                                onClick={() => {
                                    const el: HTMLInputElement | null = document.getElementById("titleWordFilter");
                                    el ? simpleFilter("job", el.value) : {}
                                }}>
                                Potrdi
                            </button>
                        </span>
                    </> :
                    <></>}

                {filter === "school" ?
                    <>
                        <div class={"filterOrientation"}>
                            <button
                                class={"downBtn"}
                                onClick={() => sortForward("job")}>
                                <ArrowUp id={"nazivGor"} />
                            </button>
                            <button
                                class={"upBtn"}
                                onClick={() => sortBackward("job")}>
                                <ArrowUp id={"nazivGor"} up={true} />
                            </button>
                        </div>
                        <span class={"colFlex"}>
                            <input
                                type="text"
                                placeholder="Stopnja izobrazbe"
                                maxLength={20}>
                            </input>
                            <button
                                class={"filterSubmitBtn noResizeBtn"}
                                onClick={() => {
                                    const el: HTMLInputElement | null = document.getElementById("titleWordFilter");
                                    el ? simpleFilter("job", el.value) : {}
                                }}>
                                Potrdi
                            </button>
                        </span>
                    </> :
                    <></>}

                {filter === "years" ?
                    <>
                        <div class={"filterOrientation"}>
                            <button
                                class={"downBtn"}
                                onClick={() => sortForward("job")}>
                                <ArrowUp id={"nazivGor"} />
                            </button>
                            <button
                                class={"upBtn"}
                                onClick={() => sortBackward("job")}>
                                <ArrowUp id={"nazivGor"} up={true} />
                            </button>
                        </div>
                        <span class={"colFlex"}>
                            <input
                                type="text"
                                placeholder="Razpon let"
                                maxLength={20}>
                            </input>
                            <button
                                class={"filterSubmitBtn noResizeBtn"}
                                onClick={() => {
                                    const el: HTMLInputElement | null = document.getElementById("titleWordFilter");
                                    el ? simpleFilter("job", el.value) : {}
                                }}>
                                Potrdi
                            </button>
                        </span>
                    </> :
                    <></>}

                {filter === "pay" ?
                    <>
                        <div class={"filterOrientation"}>
                            <button
                                class={"downBtn"}
                                onClick={() => sortForward("job")}>
                                <ArrowUp id={"nazivGor"} />
                            </button>
                            <button
                                class={"upBtn"}
                                onClick={() => sortBackward("job")}>
                                <ArrowUp id={"nazivGor"} up={true} />
                            </button>
                        </div>
                        <span class={"colFlex"}>
                            <input
                                type="text"
                                placeholder="Razpon plače"
                                maxLength={20}>
                            </input>
                            <button
                                class={"filterSubmitBtn noResizeBtn"}
                                onClick={() => {
                                    const el: HTMLInputElement | null = document.getElementById("titleWordFilter");
                                    el ? simpleFilter("job", el.value) : {}
                                }}>
                                Potrdi
                            </button>
                        </span>
                    </> :
                    <></>}

                <button
                    id="filterResetBtn"
                    class={"noResizeBtn"}>
                    Obnovi seznam
                </button>

            </div>
        </div>
    ) : <></>
}