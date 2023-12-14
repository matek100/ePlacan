import { create } from 'zustand';
import { Data, Filters } from './type';

type State = {
    filter: Filters | null,
    shownData: Data[],
    backup: Data[],
    formSubmitedTimes: number
}

type Action = {
    setFilter(newState: Filters | null): void,
    setBackup(newState: Data[]): void,
    setShownData(newState: Data[]): void,
    updateFormSubmitedTimes(newState: number): void
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

}))

export default usePlacanStore;