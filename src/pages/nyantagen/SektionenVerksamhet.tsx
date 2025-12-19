import { Typography } from "@mui/material";
import InfoPageLayout from "../../components/layout/InfoPageLayout";
import NavLink from "../../components/util/NavLink";
import isf from "../../assets/nyantagen/isf.webp";
import { LINKS } from "../../config/links";

export default function SektionenVerksamhet() {
  return (
    <InfoPageLayout
      navLabel="Nyantagen"
      heroImage={isf}
      heroTitle="vad gör sektionen?"
      heroHeight={{ xs: "40vh", md: "60vh" }}
      heroPosition={{ xs: "center", md: "center 200%" }}
    >
      <Typography variant="h4" mb={3}>
        Vad gör sektionen?
      </Typography>
      <Typography variant="body1" mb={3}>
        Sektionens syfte är att skapa gemenskap, glädje och en plats där alla
        kan träffa nya människor. För många blir sektionen ett sätt att göra
        studietiden lite lättare och roligare, genom att umgås med både
        likasinnade och nya bekantskaper. Under åren på universitetet är det
        viktigt att ibland ta en paus från plugget, och det finns gott om
        möjligheter att göra just det genom sektionens verksamhet.
        <br />
        <br />
        Du kan engagera dig i våra organ och nämnder i den utsträckning som
        passar dig. Antingen genom att delta i aktiviteter och evenemang, eller
        genom att själv bli en del av ett team och vara med och planera och
        genomföra verksamheten.
        <br />
        <br />
        Varje år, i början av läsåret, anordnar vi en kväll där representanter
        från alla organ och nämnder finns på plats. Där har du möjlighet att
        ställa frågor, lära dig mer om vad de gör och anmäla dig.
        <br />
        <br />
        Våra organ
        <ul>
          <li>
            <NavLink link={LINKS.internal.qm}>Qlubbmästeriet</NavLink>: Ansvarar
            för sociala evenemang och festligheter inom sektionen.
          </li>
          <li>
            <NavLink link={LINKS.internal.mottagningsgruppen}>
              Mottagningsgruppen
            </NavLink>
            : Planerar och genomför mottagningen för nya studenter.
          </li>
          <li>
            <NavLink link={LINKS.internal.foretagsgruppen}>
              Företagsgruppen
            </NavLink>
            : Skapar kontakt mellan studenter och näringslivet genom
            företagsevent och arbetsmarknadsmässan FAM.
          </li>
        </ul>
        Våra nämnder
        <ul>
          <li>
            <NavLink link={LINKS.internal.studienamnden}>Studienämnden</NavLink>
            : För studenternas talan gentemot skolan och följer upp
            utbildningens kvalitet.
          </li>
          <li>
            <NavLink link={LINKS.internal.jml}>JML-nämnden</NavLink>: Arbetar
            med frågor som rör jämställdhet, mångfald och likabehandling.
          </li>
          <li>
            <NavLink link={LINKS.internal.valberedningen}>
              Valberedningen
            </NavLink>
            : Ansvarar för nominering av kandidater till förtroendeposter inom
            sektionen.
          </li>
          <li>
            <NavLink link={LINKS.internal.lokalnamnden}>Lokalnämnden</NavLink>:
            Ser till att sektionens kårlokal Rudan hålls i gott skick.
          </li>
          <li>
            <NavLink link={LINKS.internal.utbytesnamnden}>
              Utbytesnämnden
            </NavLink>
            : Stöttar och informerar kring utbytesstudier.
          </li>
          <li>
            <NavLink link={LINKS.internal.idrottsgruppen}>
              Idrottsgruppen
            </NavLink>
            : Anordnar olika idrotts- och träningsaktiviteter under året.
          </li>
          <li>
            <NavLink link={LINKS.internal.spelgruppen}>Spelgruppen</NavLink>:
            Samlar spelintresserade för spelkvällar och socialt umgänge.
          </li>
          <li>
            <NavLink link={LINKS.internal.idrottsgruppen}>Infogruppen</NavLink>:
            Ansvarar för sektionens informationsspridning och kommunikation.
          </li>
          <li>
            <NavLink link={LINKS.internal.slurpen}>Slurpen</NavLink>: Sköter
            sektionens mer lättsamma och humoristiska innehåll, främst via
            Instagram.
          </li>
        </ul>
        <br />
        Har du frågor om något organ eller någon nämnd kan du klicka dig vidare
        till deras respektive sida, där kontaktuppgifter till ansvariga finns,
        eller använda kontaktuppgifterna under{" "}
        <NavLink link={LINKS.internal.kontakt}>kontakt</NavLink>.
        <br />
        <br />
      </Typography>
    </InfoPageLayout>
  );
}
