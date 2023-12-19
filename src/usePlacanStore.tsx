import { create } from 'zustand';
import { Data, Filters } from './type';

type RemoveData = {
    id: boolean,
    job: boolean,
    hours: boolean,
    schoolTier: boolean,
    school: boolean,
    years: boolean,
    pay: boolean,
}

type State = {
    filter: Filters | null,
    shownData: Data[],
    backup: Data[],
    formSubmitedTimes: number,
    loc: string,
    removedData: RemoveData,
    dropDowns: {
        school: boolean,
        schoolTier: boolean
    },
}

type Action = {
    setFilter(newState: Filters | null): void,
    setBackup(newState: Data[]): void,
    setShownData(newState: Data[]): void,
    updateFormSubmitedTimes(newState: number): void,
    setLoc(newState: string): void,
    setRemovedData(newState: RemoveData): void,
    setDropDownsOpen(newState: {
        school: boolean,
        schoolTier: boolean
    }): void,
}

const usePlacanStore = create<State & Action>(set => ({

    filter: null,
    setFilter: (newState) => set(() => ({
        filter: newState
    })),

    shownData: [],
    setShownData: (newState) => set(() => ({
        shownData: newState
    })),

    backup: [],
    setBackup: (newState) => set(() => ({
        backup: newState
    })),

    formSubmitedTimes: 0,
    updateFormSubmitedTimes: (newState: number) => set(() => ({
        formSubmitedTimes: newState
    })),

    loc: "/",
    setLoc: (newState) => set(() => ({
        loc: newState
    })),

    removedData: {
        id: false,
        job: false,
        hours: false,
        schoolTier: false,
        school: false,
        years: false,
        pay: false,
    },
    setRemovedData: (newState) => set(() => ({
        removedData: newState
    })),

    dropDowns: {
        school: false,
        schoolTier: false
    },
    setDropDownsOpen: (newState) => set(() => ({
        dropDowns: newState
    })),
}))

export default usePlacanStore;