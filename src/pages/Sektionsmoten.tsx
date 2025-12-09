import { Box, Container, Divider, Typography } from "@mui/material";
import SquareButton from "../components/buttons/SquareButton";
import NavSidebar from "../components/layout/NavSidebar";
import { navItems } from "../config/navConfig";

export default function Sektionsmoten() {
  const item = navItems.find((x) => x.label === "Sektionen");

  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: "60vh",
        minWidth: "60vw",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "left",
        gap: 4,
        mt: 20,
      }}
    >
      {item && <NavSidebar item={item} />}

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h4" mb={3}>
          Sektionsmöten
        </Typography>
        <Typography variant="body1" mb={3}>
          I slutet på varje period håller sektionen i ett sektionsmöte (SM). Vad
          är nu det kanske ni undrar? Under ett sektionsmöte får
          sektionsmedlemmar chansen att höra vad som händer på sektionen från
          styrelsen och sektionen organ och nämnder. Det är under SM som
          medlemmarna får chans att säga vad dem tycker är viktigt av dem tycker
          sektionen ska arbeta mot för mål.
          <br /> <br />
          Det är under dessa möten som budgetar och verksamhetsplaner ska röstas
          igenom inför kommande verksamhetsår. Det är under SM som de olika
          posterna som till exempel Sektionsordförande, Qlubbmästare och
          Gudfadder väljs. Så vill du engagera dig i sektionen kom på ett SM och
          sök en post eller bara sitt med och lyssna. Nedanför hittar du
          protokoll från tidigare SM om du är nyfiken på vad som har hänt innan.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
          }}
        >
          <SquareButton
            text="möteshandlingar och protokoll"
            to="/styrdokument"
            fontSize="1.2em"
          />
        </Box>

        <Divider
          sx={{
            my: 7,
          }}
        />
      </Box>
    </Container>
  );
}
