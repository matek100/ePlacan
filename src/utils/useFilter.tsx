import { useState } from "preact/hooks"
import { Data, Filters } from "../type";
import usePlacanStore from "../usePlacanStore";

export default function useFilter() {

    const {
        backup,
        shownData,
        removedData,
        setShownData,
        setRemovedData,
    } = usePlacanStore();

    const [filter, setFilter] = useState<Filters | null>(null);
    const [activeSchoolTiers, setActiveSchoolTiers] = useState([
        { bol: 1, status: true },
        { bol: 2, status: true },
        { bol: 3, status: true },
        { bol: 4, status: true },
        { bol: 5, status: true },
        { bol: 6, status: true },
        { bol: 7, status: true }
    ]);


    // FILTERS

    const sortForward = (type: Filters, data: Data[]) => {
        return data.sort(
            (aEl: Data, bEl: Data) => {

                const a = aEl[type];
                const b = bEl[type];

                if (a < b) {
                    return -1;
                }
                if (a > b) {
                    return 1;
                }
                return 0;
            })
    }

    const sortBackward = (type: Filters, data: Data[]) => {
        return data.sort(
            (aEl: Data, bEl: Data) => {

                const a = aEl[type];
                const b = bEl[type];

                if (a < b) {
                    return 1;
                }
                if (a > b) {
                    return -1;
                }
                return 0;
            })
    }

    {/*IZDELA MNOŽICO REGEXOV ZA ISKANJE Z DO ENO NAPAKO*/ }
    const searchRegexCreator = (querry: string) => {
        const regArr: string[] = [];
        for (let i = 0; i < querry.length; i++) {
            const part1 = querry.slice(0, i);
            const part2 = querry.slice(i + 1, querry.length);
            const newRegex = part1 + "." + part2;
            regArr.unshift(newRegex.toUpperCase());
        }
        return regArr;
    }

    {/*UPORABI POSREDOVANE REGEXE IN Z NJIMI PREIŠČE STRING*/ }
    const searchRegexStringFilter = (
        type: "job" | "school", regArr: string[], keepData?: boolean
    ) => {
        const arr = keepData ? shownData : backup;
        const filtered = arr.filter(
            (data) => {
                const extract = data[type].toUpperCase();
                const matches: string[] = [];
                regArr.forEach((regex) => {
                    const result = extract.search(new RegExp(regex));
                    if (result > -1) {
                        matches.push(regex);
                    }
                })
                if (matches.length > 0) {
                    return data;
                }
            }
        );
        return filtered;
    }

    {/*IZDELAJ REGEXE, POIŠČI UJEMANJA, POSREDUJ REZULTATE*/ }
    const querryFilter = (
        type: "job" | "school", inputId: string, keepData?: boolean
    ) => {
        const el: any = document.getElementById(inputId);
        if (el) {
            const regArr = searchRegexCreator(el.value);
            const result = searchRegexStringFilter(type, regArr, keepData);
            setShownData(result);
        }
    }

    {/*POIŠČI VREDNOSTI MED DVEMA VREDNOSTIMA*/ }
    const rangeFilter = (
        type: "hours" | "years" | "pay", inputId1: string, inputId2: string, keepData?: boolean
    ) => {
        const el1: any = document.getElementById(inputId1);
        const el2: any = document.getElementById(inputId2);
        if (el1 && el2) {
            let value1: number = el1.value;
            let value2: number = el2.value;
            if (value2 < value1) {
                [value2, value1] = [value1, value2]
                el1.value = value1;
                el2.value = value2
            }
            const arr = keepData ? shownData : backup;
            const result = arr.filter((data) => Number(data[type]) >= value1 && Number(data[type]) <= value2);
            setShownData(result);
        }
    }

    {/*POSODOBI STATUS AKTIVNIH BOLONSKIH STOPENJ*/ }
    const changeSchoolTierStatus = (tier: number) => {
        let newArr = [...activeSchoolTiers];
        newArr[tier - 1].status = !newArr[tier - 1].status;
        setActiveSchoolTiers(newArr);
    }

    {/*FILTRIRAJ GLEDE NA AKTIVNE BOLONSKE STOPNJE*/ }
    const schoolTierFilter = () => {
        const filtered = backup.filter((data) =>
            activeSchoolTiers[data.schoolTier - 1].status
        );
        setShownData(filtered);
    }

    {/*IZLOČI TIP INFORMACIJE*/ }
    const remoteDataType = (
        type: "id" | "job" | "hours" | "schoolTier" | "school" | "years" | "pay"
    ) => {
        const data = { ...removedData };
        data[type] = !data[type];
        setRemovedData(data);
    }

    return {
        filter,
        activeSchoolTiers,
        setFilter,
        sortForward,
        sortBackward,
        querryFilter,
        rangeFilter,
        changeSchoolTierStatus,
        schoolTierFilter,
        remoteDataType,
    }
}