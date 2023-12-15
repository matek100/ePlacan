import SelectRadio from "../utils/SelectRadio"
import useForm from "../utils/useForm";
import "./form.css";

export default function Form(
    { open, setOpen }: {
        open: boolean,
        setOpen(newState: boolean): void
    }
) {

    const {
        schoolTier,
        educationTier,
        submit,
        setEducationTier,
        getSchoolPrograms,
        checkFormSubmitions,
    } = useForm();

    return !open ? (
        <button
            id="shareInfoBtn"
            onClick={() => checkFormSubmitions(setOpen)}>
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
                        placeholder={"Primer: Pomočnik čistilke"}
                        autocomplete={"off"}
                        required>
                    </input>
                </label>

                <label class={"formInput colFlex"}>
                    <span>Povprečje ur na teden</span>
                    <input
                        name="time-input"
                        type={"number"}
                        class={"formInputField"}
                        placeholder={"Navadni: 8 ur x 5 = 40 ur"}
                        autocomplete={"off"}
                        required>
                    </input>
                </label>

                <label class={"formInput colFlex"}>
                    <span>Mesečni prihodek</span>
                    <input
                        name="pay-input"
                        type={"number"}
                        class={"formInputField"}
                        placeholder={"Bruto €"}
                        autocomplete={"off"}
                        required>
                    </input>
                </label>

                <label class={"formInput colFlex"}>
                    <span>Leta izkušenj</span>
                    <input
                        name="years-input"
                        type={"number"}
                        class={"formInputField"}
                        placeholder={"Relevantno delo"}
                        autocomplete={"off"}
                        required>
                    </input>
                </label>

                <label
                    class={"formInput colFlex"}>
                    <span>Dosežena izobrazba</span>
                    <SelectRadio
                        name="schoolTier"
                        describe="Stopnja izobrazbe"
                        selection={schoolTier}
                        onClickFunction={setEducationTier}
                    />
                </label>

                <label
                    class={"formInput colFlex"}
                    style={
                        educationTier &&
                            educationTier !== "- brez šole -" &&
                            educationTier !== "1. bolonska" ?
                            { visibility: "visible" } :
                            { visibility: "hidden", position: "absolute" }
                    }>
                    <span>Izobraževalni program</span>
                    <SelectRadio
                        name="school"
                        describe="Vrsta programa"
                        selection={getSchoolPrograms()}
                    />
                </label>

                <div
                    id="formBtnBox"
                    class={"colFlex"}>
                    <button
                        type={"button"}
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

                <a
                    href={"https://www.nlb.si/menjalnica/"}
                    target="_blank">
                    <button
                        type={"button"}
                        class={"linkToOutside"}>
                        Link do pretvornika valut na NLB.si
                    </button>
                </a>
                <a href={"https://data.si/izracun-place/"}
                    target="_blank">
                    <button
                        type={"button"}
                        class={"linkToOutside"}>
                        Link do informativnega izračuna plače na DATA.si
                    </button>
                </a>
            </form>

        </>
        )
}