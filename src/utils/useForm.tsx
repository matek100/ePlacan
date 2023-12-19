import { useState } from "preact/hooks";
import usePlacanStore from "../usePlacanStore";
import useLocalStorage from "../utils/useLocalStorage";
import toast from "react-hot-toast";

export default function useForm() {

    const schoolTier = [
        "1. Nedokončana OŠ",
        "2. Osnovna šola",
        "3. Nižje-poklicno",
        "4. Srednje-poklicno",
        "5. Gimnazijsko / Strokovno",
        "6. Višješolski program",
        "7. Univerzitetno / Strokovno",
        "8.1 Magistrski program",
        "8.2 Doktorski program",
    ]

    const schoolsByTier = [
        {
            tier: 1,
            list: ["brez"]
        },
        {
            tier: 2,
            list: ["osnovna šola"]
        },
        {
            tier: 3,
            list: ["srednje poklicno"]
        },
        {
            tier: 4,
            list: ["gimnazija", "dsadasddssds", "dsadasdsaad"]
        },
        {
            tier: 5,
            list: ["višja šola"]
        },
        {
            tier: 6,
            list: ["fakulteta"]
        },
        {
            tier: 7,
            list: ["magisterski programi", "doktorski programi"]
        },
    ]

    const {
        formSubmitedTimes,
        updateFormSubmitedTimes
    } = usePlacanStore();

    const { storeData } = useLocalStorage();

    const [educationTier, setEducationTier] = useState("");

    const getSchoolPrograms = () => {
        switch (educationTier) {
            case "3. Nižje-poklicno": return schoolsByTier[2].list;
            case "4. Srednje-poklicno": return schoolsByTier[3].list;
            case "5. Gimnazijsko / Strokovno": return schoolsByTier[4].list;
            case "6. Višješolski program": return schoolsByTier[5].list;
            case "7. Univerzitetno / Strokovno": return schoolsByTier[6].list;
            case "8.1 Magistrski program": return schoolsByTier[7].list;
            case "8.2 Doktorski program": return schoolsByTier[8].list;
            default: return [];
        }
    }

    const formalize = (arr: any, drop1: string, drop2: string) => {
        const schoolTierNumber = Number(drop1[0]);
        const schoolCorrected = schoolTierNumber === 2 ?
            "Osnovna šola" :
            schoolTierNumber === 1 ?
                "Nedokončana OŠ" :
                drop2;

        const payRaw: number = arr["pay-input"].value;
        const payProcessed = payRaw.toString().split("");
        const payFinal = Number(payProcessed.filter(
            (e) => e !== "." && e !== ","
        ).join(""));

        const formatedData = {
            job: arr["job-input"].value,
            years: arr["years-input"].value,
            hours: arr["time-input"].value,
            pay: payFinal,
            school: schoolCorrected,
            schoolTier: schoolTierNumber
        }

        storeData("formJobDataCollected", formSubmitedTimes + 1);
        updateFormSubmitedTimes(formSubmitedTimes + 1);
        console.log(formatedData);
        {/*SERVER NAJ DODA ŠE "ID"*/ }
    }

    const submit = (e: any, closeFunc: (newState: boolean) => void) => {
        e.preventDefault();
        const htmlArr = e.target.elements;
        if (htmlArr) {
            const schoolTier = htmlArr.schoolTier.value ? htmlArr.schoolTier.value : "";
            let school = htmlArr.school.value ? htmlArr.school.value : "";
            school = schoolTier === "1. bolonska" ?
                "Osnovna šola" :
                school !== "" ?
                    school :
                    "";

            if (!schoolTier) {
                toast.error("Manjka DOSEŽENA IZOBRAZBA.");
            } else if (!school) {
                toast.error("Manjka IZOBRAŽEVALNI PROGRAM.");
            } else {
                formalize(htmlArr, schoolTier, school);
                closeFunc(false);
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            }
        }
    }

    const checkFormSubmitions = (
        formSubmitFunc: (newState: boolean) => void
    ) => {
        formSubmitedTimes < 6 ?
            formSubmitFunc(true) :
            toast("Na isti napravi je dovoljenih največ 5 uspešnih oddaj, zato je nova forma blokirana. Morda poskusite menjati napravo.")
    }

    return {
        schoolTier,
        educationTier,
        submit,
        setEducationTier,
        getSchoolPrograms,
        checkFormSubmitions,
    }
}