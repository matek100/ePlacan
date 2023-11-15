import { useEffect } from "preact/hooks"

export default function PayForm() {

    useEffect(() => {
        createSelection();
    }, [])


    /* WORK IN PROGRESS, POSKUŠAM IZBOLJŠATI SELECTION, VENDAR JE POTREBNO VSE NA ROKE, KER CSS NE DELUJE */
    const createSelection = () => {
        const sel = document.getElementsByTagName("select")[0];
        const opts = sel.options;
        const optsl = opts.length;

        const newOpts = document.createElement("div");
        newOpts.setAttribute("class", "options");
        newOpts.innerHTML = sel.options[sel.selectedIndex].innerHTML;

        const newOpt = document.createElement("div");
        newOpt.setAttribute("class", "option");

        document.getElementById("select-box")?.append(newOpts);

        for (let i = 0; i < optsl; i++) {
            newOpts.append(newOpt);
        }
    }

    return (
        <form id="form colFlex">

            <label class={"form-input flex"}>
                <span>Naziv poklica :</span>
                <input name="job-input" type={"text"} class={"form-input-field"} required></input>
            </label>

            <label class={"form-input flex"}>
                <span>Povprečje ur na teden :</span>
                <input name="time-input" type={"number"} class={"form-input-field"} required></input>
            </label>

            <label class={"form-input flex"}>
                <span>Mesečni prihodek :</span>
                <input name="pay-input" type={"number"} class={"form-input-field"} required></input>
            </label>

            <label class={"form-input flex"}>
                <span>Dosežena izobrazba :</span>
                <div id="select-box">
                    <select name="school-input" class={"form-input-field"} required>
                        <option value="">-- Klikni in izberi --</option>
                        <option value="option-one">Option One</option>
                        <option value="option-two">Option Two</option>
                    </select>
                </div>
            </label>

        </form>
    )
}