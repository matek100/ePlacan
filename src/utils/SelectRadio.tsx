import { useState } from "preact/hooks"
import ArrowUp from "../assets/ArrowUp"

export default function SelectRadio(
    { name, describe, selection }: {
        name: string,
        describe?: string,
        selection: string[]
    }
) {

    const [selected, setSelected] = useState("");
    const [open, setOpen] = useState(false);

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

            <div
                class={"selector flex"}
                onClick={() => disableTillClicked()}>
                <span>
                    {selected ? selected : describe}
                </span>
                <ArrowUp id={name + "Arrow"} group="formArrow" up={!open} />
            </div>

            <div
                id={name + "Id"}
                class={"selection"}
                style={{ display: "none" }}>

                {/*TA ELEMENT UZNIČI DEFAULT SELECT BUG*/}
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
                        onClick={() => setSelected("")}>
                    </input>
                    <span>
                        {describe}
                    </span>
                </label>
                {selection.map((option) => {
                    return (
                        <label class={"option block"}>
                            <input
                                checked={selected === option ? true : false}
                                name={name}
                                type={"radio"}
                                value={option}
                                onClick={() => setSelected(option)}>
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