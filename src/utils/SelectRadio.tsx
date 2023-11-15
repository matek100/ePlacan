import { useState } from "preact/hooks"
import ArrowUp from "../assets/ArrowUp"

export default function (
    { name, selection }: {
        name: string,
        selection: string[]
    }
) {

    const [open, setOpen] = useState(false);

    return (
        <div class={"select-box"}>

            <div
                class={"selector"}
                onClick={() => setOpen(!open)}>
                <ArrowUp up={!open} />
            </div>

            {open ?
                <div class={"selection"}>
                    {selection.map((option, index) => {
                        return (
                            <label class={"option block"}>
                                <input
                                    name={name}
                                    type={"radio"}
                                    value={option}>
                                </input>
                                <span>
                                    {option}
                                </span>
                            </label>
                        )
                    })}
                </div> :
                <></>
            }

        </div>
    )
}