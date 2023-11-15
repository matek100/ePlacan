import "./onas.css";

export default function ONas(
    { path }: { path: string }
) {
    return (<>
        <p>ePlačan je namenjen spodbujanju deljenja informacij o prejetem plačilu za opravljeno delo, še posebno med mladimi. Informirani smo sposobnejši oceniti tako stanje ostalih kot če smo za svoje delo ustrezno plačani. Boljša informiranost spodbuja konkurenco in je v korist tako delavcev kot delodajalcev. Delavcev, ker je lažje vedeti da je sosedova trava bolj zelena če jo lahko pogledaš, delodajalcev, ker vedenje o boljem izplačilu spodbudi delavce k iskanju boljših pogojev, s tem pa delodajalcev, ki se za svoje delavce potrudijo bolj kot ostali. Spodbujamo delavcev in delodajalcev, spodbujamo konkurenco, spodbujamo dobre delovne prakse.</p>
        <p>Piratska stranka Slovenije se pripravlja na zbiranje podpisov za zakonodajni predlog, da mora delodajalec na oglas za delo poleg delovnih ur in kaj delo vključuje objaviti tudi minimalno pričakovano izplačilo. Predlog koristi vsem. Koristi javnosti, saj je sposobnejša oceniti stanje na trgu delovne sile. Koristi delavcem, saj se lahko v naprej izognejo slabše plačanim delovnim mestom oz. ker je plača poglavitni element delovnega razmerja, so delovne pogodbe sposobni primerjati nemudoma. Prav tako koristi delodajalcem, saj ne rabijo pregledovati presežka poslanih prošenj za delovno mesto, ki bodo umaknjene kakor hitro je delavec sposoben vprašati o višini pričakovanega plačila.</p>
        <form>
            <input type={"email"}></input>
            <button type={"submit"} class={"inBlock"}>Oddaj email in bodi obveščen o zbiranju podpisov</button>
        </form>
    </>)
}