import { Typography } from "@mui/material";
import InfoPageLayout from "../../components/layout/InfoPageLayout";
import NavLink from "../../components/util/NavLink";
import mottagningen from "../../assets/nyantagen/mottagningen.webp";
import { LINKS } from "../../config/links";

export default function Mottagningen() {
  return (
    <InfoPageLayout
      navLabel="Nyantagen"
      heroImage={mottagningen}
      heroTitle="Mottagningen"
      heroHeight={{ xs: "40vh", md: "60vh" }}
      heroPosition={{ xs: "center", md: "center 100%" }}
    >
      <Typography variant="h4" mb={3}>
        Mottagningen
      </Typography>
      <Typography variant="body1" mb={3}>
        Mottagningen pågår vanligtvis under 3 veckor från den dagen
        inskrivningen är till första fredagen på det nya läsåret. Under dessa
        veckor sker många aktiviteter på Campus Flemingsberg, men även inne på
        huvudcampus Valhallavägen, andra sektioner som vi har samarbeten med och
        andra platser i Stockholmsområdet. Dessa aktiviteter är till för att du
        som nyantagen skall känna dig så välkommen som möjligt, men även lära
        känna nya vänner och troligtvis dina första nya vänner på
        universitetsnivå så att dina år här i Flemingsberg blir så roliga som
        möjligt.
        <br />
        <br />
        Mottagningen är till för att tillföra glädje, skratt, gemenskap och nya
        upplevelser. Detta betyder att mottagningen inte är till för att skämma
        ut dig eller skapa extra oro för dig utan till för att du skall känna
        dig välkommen till universitetet. Allt som sker under mottagningen är
        såklart frivilligt. Dock kommer vissa delar av mottagningen att vara
        prissatt (t ex så som sittningar).
        <br />
        <br />
        Under mottagningen får du testa på sittningar (Gasque), testa på
        sektionslivet, möta nuvarande personer som studerar på universitetet,
        träffa andra sektioner och mycket mycket mer. Självklart får du även
        träffa våra fantastiska faddrar som kommer guida dig igenom dessa 3
        underbara veckor.
        <br />
        <br />
        Det största evenemanget som sparas till sist är NØlleGasquen som är
        våran stora finsittning och som är hemlig fram tills dess vi befinner
        oss på den platsen den är. På denna sittning har klädkoden mörk kostym
        som gäller.
        <br />
        <br />
        Mottagningen kommer även bjuda på lunchföreläsningar från intressanta
        företag och andra organisationer som kommer berätta vad du har att se
        framemot i arbetslivet efter studierna är färdig.
        <br />
        <br />
        Om du har några frågor om mottagningen eller bara allmänt sväng förbi
        Organ och Nämnder uppe bland flikarna klicka in mottagningsgruppen så
        finner du de ansvariga där och mejl adressen! {":)"} Följ oss på våran{" "}
        <NavLink link={LINKS.social.mottagningInstagram}>instagram</NavLink>
        .
        <br />
        <br />
        <br />
        <br />
        MVH
        <br />
        <br />
        MoGen (Mottagningsgruppen)
      </Typography>
    </InfoPageLayout>
  );
}
