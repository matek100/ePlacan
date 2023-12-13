import SelectRadio from "../utils/SelectRadio"
import "./form.css";

export default function Form(
    { open, setOpen }: {
        open: boolean,
        setOpen(newState: boolean): void
    }
) {

    const schoolTier = [
        "- brez šole -",
        "1. bolonska",
        "2. bolonska",
        "3. bolonska",
        "4. bolonska",
        "5. bolonska"
    ]

    const schoolsByTier = [
        {
            tier: 0,
            schoolsArr: ["brez"]
        },
        {
            tier: 1,
            schoolsArr: ["osnovna šola"]
        },
        {
            tier: 2,
            schoolsArr: ["osnovna šola"]
        },
        {
            tier: 3,
            schoolsArr: ["osnovna šola"]
        },
        {
            tier: 4,
            schoolsArr: ["osnovna šola"]
        },
        {
            tier: 5,
            schoolsArr: ["osnovna šola"]
        }
    ]

    const submit = (e: Event) => {
        e.preventDefault();
        if (e.target) {
            const formatedData = {
                job: e.target.elements["job-input"].value,
                years: e.target.elements["years-input"].value,
                hours: e.target.elements["time-input"].value,
                pay: e.target.elements["pay-input"].value
            }
            console.log(formatedData);
        }
        {/*POBRATI MORAŠ ŠE "IP", SERVER NAJ DODA ŠE "ID"*/ }
    }

    return !open ? (
        <button
            id="shareInfoBtn"
            onClick={() => setOpen(true)}>
            Želim deliti svoje stanje!
        </button>
    ) :
        (<>
            <form
                id="form"
                class={"colFlex"}
                onSubmit={(e) => submit(e)}>

                <label class={"formInput colFlex"}>
                    <span>Naziv poklica</span>
                    <input
                        name="job-input"
                        type={"text"}
                        class={"formInputField "}
                        autocomplete={"off"}
                        required>
                    </input>
                </label>

                <label class={"formInput colFlex"}>
                    <span>Povprečje ur na teden</span>
                    <input
                        name="time-input"
                        type={"number"}
                        class={"formInputField "}
                        autocomplete={"off"}
                        required>
                    </input>
                </label>

                <label class={"formInput colFlex"}>
                    <span>Mesečni prihodek</span>
                    <input
                        name="pay-input"
                        type={"number"}
                        class={"formInputField "}
                        autocomplete={"off"}
                        required>
                    </input>
                </label>

                <label class={"formInput colFlex"}>
                    <span>Leta izkušenj</span>
                    <input
                        name="years-input"
                        type={"number"}
                        class={"formInputField "}
                        autocomplete={"off"}
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

                <div
                    id="formBtnBox"
                    class={"colFlex"}>
                    <button
                        onClick={() => setOpen(false)}>
                        Prekliči
                    </button>
                    <button
                        type={"reset"}>
                        Izprazni
                    </button>
                    <button
                        type={"submit"}>
                        Deli
                    </button>
                </div>
            </form>

            {/*DODAJ PRETVORNIKE, RECIMO PRETVORNIK BRUTO-NETO, EURO - DOLLAR*/}
        </>
        )
}