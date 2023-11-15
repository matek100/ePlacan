import SelectRadio from "../utils/SelectRadio"

export default function PayForm() {

    const schoolTier = [
        "1. bolonska",
        "2. bolonska",
        "3. bolonska",
        "4. bolonska",
        "5. bolonska"
    ]

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
                <SelectRadio name="school" selection={schoolTier} />
            </label>

        </form>
    )
}