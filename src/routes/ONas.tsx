import "./onas.css";

export default function ONas(
    { path }: { path: string }
) {
    return (<>
        <p>Namen</p>
        <p>Nagovor</p>
        <label>
            <input type={"email"}></input>
        </label>
        <button type={"submit"}>Oddaj email in bodi obveščen o zbiranju podpisov</button>
    </>)
}