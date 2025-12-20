import { Divider, Typography } from "@mui/material";
import rudan from "../../assets/sektionen/rudan.webp";
import InfoPageLayout from "../../components/layout/InfoPageLayout";
import NavLink from "../../components/util/NavLink";
import { LINKS } from "../../config/links";

export default function Rudan() {
  return (
    <InfoPageLayout
      navLabel="Sektionen"
      heroImage={rudan}
      heroTitle="rudan"
      heroHeight={{ xs: "40vh", md: "60vh" }}
    >
      <Typography variant="h4" mb={3}>
        Sektionslokalen Rudan
      </Typography>
      <Typography variant="body1" mb={3}>
        Sektionslokalen Rudan är hjärtat av studentlivet på KTH Flemingsberg,
        eller åtminstone den del av hjärtat där det finns soffor, spel och
        mikrovågsugnar. Du hittar Rudan på plan 4 i Technology and Health-huset
        på Hälsovägen 11C.
        <br />
        <br />
        På fredagskvällar förvandlas lokalen till pub när{" "}
        <NavLink link={LINKS.internal.qm}>FISQ</NavLink> öppnar baren och bjuder
        in till en värdig (och ibland ovärdig) avslutning på pluggveckan. Dagtid
        fungerar Rudan som studielokal, lunchhäng och allmänt andningshål,
        komplett med kök och ett helt gäng mikrovågsugnar för den som lever på
        matlådor.
        <br />
        <br />
        Rudan delas också med{" "}
        <NavLink link={LINKS.mit.root}>
          Sektionen för Medicinsk teknik (MiT)
        </NavLink>{" "}
        och{" "}
        <NavLink link={LINKS.rkh.root}>
          Röda Korsets Högskolas Studentkår (RKHSK)
        </NavLink>
        , vilket betyder att du rätt ofta stöter på både ingenjörer,
        medteknologer och sjuksköterskestudenter i samma soffa.{" "}
        <NavLink link={LINKS.internal.lokalnamnden}>Lokalansvarig</NavLink> ser
        till att Rudan faktiskt går att vistas i: skötsel, inköp och allmänt
        ordningskaos hanteras löpande.
      </Typography>

      <Divider
        sx={{
          my: 7,
        }}
      />

      <Typography variant="h4" mb={3}>
        Att göra i Rudan
      </Typography>
      <Typography variant="body1" mb={3}>
        När du tröttnat på föreläsningsslides och grupparbeten finns det gott om
        sätt att prokrastinera värdigt i Rudan. Här finns både biljardbord och
        pingisbord, och dessutom tillgång till bordsspel och tv-spel (Wii, PS3,
        PS4) som <NavLink link={LINKS.internal.spelgruppen}>SPRUPPEN</NavLink>{" "}
        köper in till sektionen.
        <br />
        <br />
        Det är platsen där någon “bara ska ta en paus” och plötsligt leder en
        turnering, där folk egentligen skulle plugga men istället fastnar i
        Mario Kart, och där kvällen ofta blir lite senare än planerat. Kort
        sagt: en utmärkt kombination av pluggstöd, vardagsrum och mildt
        organiserat kaos.
      </Typography>
    </InfoPageLayout>
  );
}
