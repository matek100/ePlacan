import { useEffect, useState } from "preact/hooks"
import ArrowUp from "../assets/ArrowUp"

export default function SelectRadio(
    { name, describe, selection, onClickFunction }: {
        name: string,
        describe?: string,
        selection: string[],
        onClickFunction?: (report: any) => void
    }
) {

    const [selected, setSelected] = useState("");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (onClickFunction) {
            onClickFunction(selected);
        }
    }, [selected]);

    const disableTillClicked = () => {
        const el = document.getElementById(name + "Id");
        if (el && open) {
            el.style.display = "none";
            setOpen(false);
        }
        else if (el && !open) {
            el.style.display = "block";
            setOpen(true);
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
                        disabled={open ? false : true}
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