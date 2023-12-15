import { Link } from "preact-router/match"
import "./onas.css";

export default function ONas() {

    return (<>

        <nav class={"nav colFlex"}>
            <h1 class={"defMouse"}>Piratski program</h1>
            <Link
                class={"navBtn"}
                href="/">
                ePlačan
            </Link>
        </nav>

        <section id="explainBox" class={"defMouse"}>
            <p>ePlačan je namenjen spodbujanju deljenja informacij o prejetem plačilu za opravljeno delo, še posebno med mladimi.</p>
            <p>Informirani smo sposobnejši oceniti stanje na trgu dela, recimo če smo za delo ustrezno plačani.</p>
            <p>Boljša informiranost spodbuja konkurenčno vedenje in je v korist tako delavcev kot delodajalcev.</p>
            <p>Delavcev, ker dobijo nujne informacije o oceni vrednosti svojega dela na trgu dela.</p>
            <p>Delodajalcev, ker s ponudbo nadstandardnih pogojev lažje prepričajo delavce v vrednost svoje ponudbe.</p>
            <p>Spodbujamo delavce in delodajalce, spodbujamo konkurenco, spodbujamo dobre delovne prakse.</p>
        </section>
        <section id="promoBox" class={"flex"}>
            <img class="logo" src="ePlacan_Logo.png" alt="ePlačan Logo" />
            <img class="logo" src="Pirati_znak.png" alt="Piratska stranka Logo" />
        </section>
    </>)
}