import "./onas.css";

export default function ONas(
    { path }: { path: string }
) {
    return (<>
        <section id="explainBox" class={"defMouse"}>
            <p>ePlačan je namenjen spodbujanju deljenja informacij o prejetem plačilu za opravljeno delo, še posebno med mladimi.</p>
            <p>Informirani smo sposobnejši oceniti stanje na trgu dela, recimo če smo za delo ustrezno plačani.</p>
            <p>Boljša informiranost spodbuja konkurenčno vedenje in je posledično v korist tako delavcev kot delodajalcev.</p>
            <p>Delavcev, ker dobijo nujne informacije o oceni vrednosti svojega dela na trgu dela.</p>
            <p>Delodajalcev, ker s ponudbo nadstandardnih pogojev lažje prepričajo delavce o vrednost svoje ponudbe.</p>
            <p>Spodbujamo delavce in delodajalce, spodbujamo konkurenco, spodbujamo dobre delovne prakse.</p>
        </section>
        <section id="promoBox" class={"flex"}>
            <img class="logo" src="ePlacan_Logo.png" alt="ePlačan Logo" />
            <img class="logo" src="Pirati_znak.png" alt="Piratska stranka Logo" />
        </section>
    </>)
}