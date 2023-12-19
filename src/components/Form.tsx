import usePlacanStore from "../usePlacanStore";
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
        dropDowns,
        setDropDownsOpen
    } = usePlacanStore();

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
                onSubmit={(e) => submit(e, setOpen)}>

                <label class={"formInput colFlex"}>
                    <span class={"formInputTitle"}>
                        Naziv poklica
                    </span>
                    <input
                        name="job-input"
                        type={"text"}
                        class={"formInputField "}
                        placeholder={"Primer: Strojevodja"}
                        autocomplete={"off"}
                        required>
                    </input>
                </label>

                <label class={"formInput colFlex"}>
                    <span class={"formInputTitle"}>
                        Povprečje ur na teden
                    </span>
                    <input
                        name="time-input"
                        type={"number"}
                        class={"formInputField"}
                        placeholder={"8 ur x 5 = 40 ur"}
                        autocomplete={"off"}
                        required>
                    </input>
                </label>

                <label class={"formInput colFlex"}>
                    <span class={"formInputTitle"}>
                        Mesečni prihodek
                    </span>
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
                    <span class={"formInputTitle"}>
                        Leta izkušenj
                    </span>
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
                    <span class={"formInputTitle"}>
                        Dosežena izobrazba
                    </span>
                    <SelectRadio
                        name="schoolTier"
                        describe="Stopnja izobrazbe"
                        selection={schoolTier}
                        onClickOpen={dropDowns}
                        onClickOpenFunc={setDropDownsOpen}
                        onClickFunc={setEducationTier}
                    />
                </label>

                <label
                    class={"formInput colFlex"}
                    style={
                        educationTier &&
                            educationTier !== "1. Nedokončana OŠ" &&
                            educationTier !== "2. Osnovna šola" ?
                            { visibility: "visible" } :
                            { visibility: "hidden", position: "absolute" }
                    }>
                    <span class={"formInputTitle"}>
                        Izobraževalni program
                    </span>
                    <SelectRadio
                        name="school"
                        describe="Vrsta programa"
                        selection={getSchoolPrograms()}
                        onClickOpen={dropDowns}
                        onClickOpenFunc={setDropDownsOpen}
                    />
                </label>

                <div
                    id="formBtnBox"
                    class={"colFlex"}>
                    <div>
                        <button
                            class={"formBtn colFlex"}
                            type={"button"}
                            onClick={() => setOpen(false)}>
                            Prekliči
                        </button>
                        <button
                            class={"formBtn colFlex"}
                            type={"reset"}>
                            Izprazni
                        </button>
                        <button
                            class={"formBtn colFlex"}
                            type={"submit"}>
                            Deli
                        </button>
                    </div>
                    <div>
                        <a
                            class={"colFlex"}
                            href={"https://www.iban.si/currency-converter?from_currency=USD&to_currency=EUR&amount=1"}
                            target="_blank">
                            <button
                                type={"button"}
                                class={"linkToOutside"}>
                                Link do pretvornika valut na IBAN.si
                            </button>
                        </a>
                        <a
                            class={"colFlex"}
                            href={"https://data.si/izracun-place/"}
                            target="_blank">
                            <button
                                type={"button"}
                                class={"linkToOutside"}>
                                Link do informativnega izračuna plače na DATA.si
                            </button>
                        </a>
                    </div>
                </div>

            </form>

        </>
        )
}