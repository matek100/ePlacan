import SelectRadio from "../utils/SelectRadio"
import "./form.css";

export default function Form(
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

    return !open ? (
        <button
            id="shareInfoBtn"
            onClick={() => setOpen(true)}>
            Želim deliti svoje stanje!
        </button>
    ) :
        (<>
            <form id="form" class={"colFlex"}>

                <label class={"formInput colFlex"}>
                    <span>Naziv poklica</span>
                    <input
                        name="job-input"
                        type={"text"}
                        class={"formInputField "}
                        required>
                    </input>
                </label>

                <label class={"formInput colFlex"}>
                    <span>Povprečje ur na teden</span>
                    <input
                        name="time-input"
                        type={"number"}
                        class={"formInputField "}
                        required>
                    </input>
                </label>

                <label class={"formInput colFlex"}>
                    <span>Mesečni prihodek</span>
                    <input
                        name="pay-input"
                        type={"number"}
                        class={"formInputField "}
                        required>
                    </input>
                </label>

                <label class={"formInput colFlex"}>
                    <span>Leta izkušenj</span>
                    <input
                        name="years-input"
                        type={"number"}
                        class={"formInputField "}
                        required>
                    </input>
                </label>

                <label class={"formInput colFlex"}>
                    <span>Dosežena izobrazba</span>
                    <SelectRadio
                        name="schoolTier"
                        describe="Stopnja izobrazbe"
                        selection={schoolTier}
                    />
                </label>

                <label class={"formInput colFlex"}>
                    <span>Šola</span>
                    <SelectRadio
                        name="school"
                        describe="Tip šole"
                        selection={schoolTier}
                    />
                </label>

            </form>

            <div
                id="formBtnBox"
                class={"colFlex"}>
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
        )
}