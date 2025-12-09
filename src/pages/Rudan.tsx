import { Box, Container, Divider, Typography, Link } from "@mui/material";
import NavSidebar from "../components/layout/NavSidebar";
import { navItems } from "../config/navConfig";
import HeroBanner from "../components/HeroBanner";
import rudan from "../assets/rudan.webp";
import { Link as RouterLink } from "react-router-dom";

export default function Rudan() {
  const item = navItems.find((x) => x.label === "Sektionen");

  return (
    <Container
      disableGutters
      sx={{
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <HeroBanner image={rudan} title="Rudan" height="60vh" />

      <Box
        sx={{
          maxWidth: { xs: "90vw", md: "60vw" },
          display: "flex",
          flexDirection: "row",
          gap: 4,
          my: 15,
          alignItems: "flex-start",
          justifyContent: "left",
        }}
      >
        {item && <NavSidebar item={item} />}

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h4" mb={3}>
            Sektionslokalen Rudan
          </Typography>
          <Typography variant="body1" mb={3}>
            Sektionslokalen Rudan är hjärtat av studentlivet på KTH
            Flemingsberg, eller åtminstone den del av hjärtat där det finns
            soffor, spel och mikrovågsugnar. Du hittar Rudan på plan 4 i
            Technology and Health-huset på Hälsovägen 11C.
            <br />
            <br />
            På fredagskvällar förvandlas lokalen till pub när{" "}
            <Link component={RouterLink} to="/qm">
              FISQ
            </Link>{" "}
            öppnar baren och bjuder in till en värdig (och ibland ovärdig)
            avslutning på pluggveckan. Dagtid fungerar Rudan som studielokal,
            lunchhäng och allmänt andningshål, komplett med kök och ett helt
            gäng mikrovågsugnar för den som lever på matlådor.
            <br />
            <br />
            Rudan delas också med{" "}
            <Link
              component={RouterLink}
              to="https://mit-kth.se/"
              target="_blank"
            >
              Sektionen för Medicinsk teknik (MiT)
            </Link>{" "}
            och{" "}
            <Link
              component={RouterLink}
              to="https://www.rkh.se/"
              target="_blank"
            >
              Röda Korsets Högskolas Studentkår (RKHSK)
            </Link>
            , vilket betyder att du rätt ofta stöter på både ingenjörer,
            medteknologer och sjuksköterskestudenter i samma soffa.{" "}
            <Link component={RouterLink} to="/lokalansvarig">
              Lokalansvarig
            </Link>{" "}
            ser till att Rudan faktiskt går att vistas i: skötsel, inköp och
            allmänt ordningskaos hanteras löpande.
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
            När du tröttnat på föreläsningsslides och grupparbeten finns det
            gott om sätt att prokrastinera värdigt i Rudan. Här finns både
            biljardbord och pingisbord, och dessutom tillgång till bordsspel och
            tv-spel (Wii, PS3, PS4) som{" "}
            <Link component={RouterLink} to="/spruppen">
              SPRUPPEN
            </Link>{" "}
            köper in till sektionen.
            <br />
            <br />
            Det är platsen där någon “bara ska ta en paus” och plötsligt leder
            en turnering, där folk egentligen skulle plugga men istället fastnar
            i Mario Kart, och där kvällen ofta blir lite senare än planerat.
            Kort sagt: en utmärkt kombination av pluggstöd, vardagsrum och mildt
            organiserat kaos.
          </Typography>

          <Divider
            sx={{
              my: 7,
            }}
          />
        </Box>
      </Box>
    </Container>
  );
}
