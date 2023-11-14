export default function PayForm() {
    return (
        <form id="form">
            <label class={"form-input"}>
                <span>Naziv poklica:</span>
                <input type={"text"}></input>
            </label>
            <label class={"form-input"}>
                <span>Povprečje ur na teden:</span>
                <input type={"number"}></input>
            </label>
            <label class={"form-input"}>
                <span>Mesečni prihodek:</span>
                <input type={"number"}></input>
            </label>
            <label class={"form-input"}>
                <span>Dosežena izobrazba:</span>
                <select>
                    <option></option>
                    <option>Option One</option>
                    <option>Option Two</option>
                </select>
            </label>
        </form>
    )
}