import { useState } from "preact/hooks"
import { Filters } from "../type";
import usePlacanStore from "../useStore";

export default function useFilter() {

    const {
        backup,
        setShownData
    } = usePlacanStore();

    const [filter, setFilter] = useState<Filters | null>(null);

    // FILTERS

    const sortForward = (type: Filters) => {
        return backup.sort(
            (aEl, bEl) => {

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

    const sortBackward = (type: Filters) => {
        return backup.sort(
            (aEl, bEl) => {

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
    const searchRegexStringFilter = (type: "job" | "school", regArr: string[]) => {
        const filtered = backup.filter(
            (el) => {
                const extract = el[type].toUpperCase();
                const matches: string[] = [];
                regArr.forEach((regex) => {
                    const result = extract.search(new RegExp(regex));
                    if (result > -1) {
                        matches.push(regex);
                    }
                })
                if (matches.length > 0) {
                    return el;
                }
            }
        );
        return filtered;
    }

    {/*IZDELAJ REGEXE, POIŠČI UJEMANJA, POSREDUJ REZULTATE*/ }
    const simpleFilter = (type: "job" | "school", querry: string) => {
        const regArr = searchRegexCreator(querry);
        const result = searchRegexStringFilter(type, regArr);
        if (result) { setShownData(result) }
    }

    return {
        filter,
        setFilter,
        sortForward,
        sortBackward,
        searchRegexCreator,
        simpleFilter
    }
}