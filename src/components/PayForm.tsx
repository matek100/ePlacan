import SelectRadio from "../utils/SelectRadio"

export default function PayForm(
    { open, setOpen }: {
        open: boolean,
        setOpen(newState: boolean): void
    }
) {

    const schoolTier = [
        "1. bolonska",
        "2. bolonska",
        "3. bolonska",
        "4. bolonska",
        "5. bolonska"
    ]

    return open ? (<>
        <form id="form" class={"colFlex"}>

            <label class={"form-input flex"}>
                <span>Naziv poklica :</span>
                <input
                    name="job-input"
                    type={"text"}
                    class={"form-input-field"}
                    required>
                </input>
            </label>

            <label class={"form-input flex"}>
                <span>Povprečje ur na teden :</span>
                <input
                    name="time-input"
                    type={"number"}
                    class={"form-input-field"}
                    required>
                </input>
            </label>

            <label class={"form-input flex"}>
                <span>Mesečni prihodek :</span>
                <input
                    name="pay-input"
                    type={"number"}
                    class={"form-input-field"}
                    required>
                </input>
            </label>

            <label class={"form-input flex"}>
                <span>Leta izkušenj :</span>
                <input
                    name="years-input"
                    type={"number"}
                    class={"form-input-field"}
                    required>
                </input>
            </label>

            <label class={"form-input flex"}>
                <span>Dosežena izobrazba :</span>
                <SelectRadio
                    name="schoolTier"
                    describe="Stopnja izobrazbe"
                    selection={schoolTier}
                />
            </label>

            <label class={"form-input flex"}>
                <span>Šola :</span>
                <SelectRadio
                    name="school"
                    describe="Tip šole"
                    selection={schoolTier}
                />
            </label>

        </form>

        <div id="formBtnBox">
            <button
                onClick={() => setOpen(false)}>
                Prekliči
            </button>
            <button
                onClick={() => setOpen(false)}>
                Izprazni
            </button>
            <button
                onClick={() => setOpen(false)}>
                Deli
            </button>
        </div>
    </>
    ) :
        <button
            onClick={() => setOpen(true)}>
            Želim deliti svoje stanje!
        </button>
}