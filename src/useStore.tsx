import { create } from 'zustand';

type State = {
    izobrazba: string,
}

type Action = {
    setIzobrazba(newState: string): void,
}

const usePlacanStore = create<State & Action>(set => ({

    izobrazba: "",
    setIzobrazba: (newState) => set(() => ({
        izobrazba: newState
    })),

}))

export default usePlacanStore;