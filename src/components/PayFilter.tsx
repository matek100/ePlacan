export default function PayFilter(
    { filterOpen, setFilterOpen }: {
        filterOpen: boolean,
        setFilterOpen(newState: boolean): void
    }
) {

    return filterOpen ? (
        <div id="filterPosition">
            <div id="filterBox">
                <div
                    class={"exitBtn"}
                    onClick={() => setFilterOpen(false)}>
                </div>
                <button>Reset</button>
            </div>
        </div>
    ) : <></>
}