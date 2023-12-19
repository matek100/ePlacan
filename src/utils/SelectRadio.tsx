import { useEffect, useState } from "preact/hooks"
import ArrowUp from "../assets/ArrowUp"

export default function SelectRadio(
    { name, describe, selection, onClickOpen, onClickOpenFunc, onClickFunc }: {
        name: "school" | "schoolTier",
        describe?: string,
        selection: string[],
        onClickOpen: {
            school: boolean;
            schoolTier: boolean;
        },
        onClickOpenFunc: (newState: {
            school: boolean;
            schoolTier: boolean;
        }) => void,
        onClickFunc?: (report: any) => void
    }
) {

    const [selected, setSelected] = useState("");

    useEffect(() => {
        if (onClickFunc) {
            onClickFunc(selected);
        }
    }, [selected]);

    const disableTillClicked = () => {
        const el1 = document.getElementById("schoolTier" + "Id");
        const el2 = document.getElementById("school" + "Id");
        if (el1 && el2 && onClickOpen[name]) {
            el1.style.display = "none";
            el2.style.display = "none";
            onClickOpenFunc({
                schoolTier: false,
                school: false,
            });
        }
        else if (el1 && el2 && !onClickOpen[name]) {
            if (name === "schoolTier") {
                el1.style.display = "block";
                el2.style.display = "none";
            } else if (name === "school") {
                el1.style.display = "none";
                el2.style.display = "block";
            }
            onClickOpenFunc({
                schoolTier: name === "schoolTier",
                school: name === "school",
            });
        }
    }

    return (<>

        <div class={"select-box"}>

            <button
                id={name + "Selected"}
                class={"selector flex actMouse"}
                type={"button"}
                onClick={() => disableTillClicked()}>
                {selected ? selected : describe}
                <ArrowUp id={name + "Arrow"} group="formArrow" up={!open} />
            </button>

            <div
                id={name + "Id"}
                class={"selection"}
                style={{ display: "none" }}>

                {/*TA ELEMENT UNIČI DEFAULT SELECT BUG*/}
                <input
                    disabled={true}
                    name={name}
                    type={"radio"}
                    style={{ display: "none" }}>
                </input>

                {/*DEJANSKI SPUSTNI MENI*/}
                <label class={"option block"}>
                    <input
                        disabled={onClickOpen ? false : true}
                        name={name}
                        type={"radio"}
                        value={""}
                        onClick={() => {
                            setSelected("")
                            disableTillClicked();
                        }}>
                    </input>
                    <span>
                        {describe}
                    </span>
                </label>
                {selection.map((option) => {
                    return (
                        <label
                            class={"option block actMouse"}
                            tabIndex={0}
                            onKeyUp={(e) => {
                                if (e.code === "Enter") {
                                    setSelected(option)
                                    disableTillClicked()
                                }
                            }}>
                            <input
                                checked={selected === option ? true : false}
                                name={name}
                                type={"radio"}
                                value={option}
                                onClick={() => {
                                    setSelected(option)
                                    disableTillClicked();
                                }}>
                            </input>
                            <span>
                                {option}
                            </span>
                        </label>
                    )
                })}
            </div>

        </div>
    </>)
}