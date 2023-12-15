import { useState } from "preact/hooks";
import usePlacanStore from "../usePlacanStore";
import useLocalStorage from "../utils/useLocalStorage";
import toast from "react-hot-toast";

export default function useForm() {

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
            list: ["brez"]
        },
        {
            tier: 1,
            list: ["osnovna šola"]
        },
        {
            tier: 2,
            list: ["gimnazija", "srednja šola"]
        },
        {
            tier: 3,
            list: ["višja šola", "fakulteta"]
        },
        {
            tier: 4,
            list: ["magisterski programi"]
        },
        {
            tier: 5,
            list: ["doktorski programi"]
        }
    ]

    const {
        formSubmitedTimes,
        updateFormSubmitedTimes
    } = usePlacanStore();

    const { storeData } = useLocalStorage();

    const [educationTier, setEducationTier] = useState("");

    const getSchoolPrograms = () => {
        switch (educationTier) {
            case "2. bolonska": return schoolsByTier[2].list;
            case "3. bolonska": return schoolsByTier[3].list;
            case "4. bolonska": return schoolsByTier[4].list;
            case "5. bolonska": return schoolsByTier[5].list;
            default: return [];
        }
    }

    const formalize = (arr: any, drop1: string, drop2: string) => {
        const schoolTierNumber = drop1[0] !== "-" ?
            Number(drop1[0]) :
            0;
        const schoolCorrected = schoolTierNumber === 0 ?
            "Brez" :
            schoolTierNumber === 1 ?
                "Osnovna šola" :
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

    const submit = (e: any) => {
        e.preventDefault();
        const htmlArr = e.target.elements;
        if (htmlArr) {
            const schoolTier = htmlArr.schoolTier.value ? htmlArr.schoolTier.value : "";
            let school = htmlArr.school.value ? htmlArr.school.value : "";
            school = schoolTier === "- brez šole -" ?
                "Brez" :
                schoolTier === "1. bolonska" ?
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
            }
        }
    }

    {/*FORMA NAJ SE NA KONCU USPEŠNEGA PROCESA ZAPRE, DA PREPREČIŠ SAMOZAKLEP*/ }

    const checkFormSubmitions = (
        func: (newState: boolean) => void
    ) => {
        formSubmitedTimes < 6 ?
            func(true) :
            toast("Na isti napravi je dovoljenih največ 5 uspešnih oddaj, zato je nova forma blokirana. Morda poskusite menjati napravo.")
    }

    return {
        schoolTier,
        schoolsByTier,
        educationTier,
        submit,
        formalize,
        setEducationTier,
        getSchoolPrograms,
        checkFormSubmitions,
    }
}