import { Box, Container, Typography } from "@mui/material";
import SquareButton from "../components/buttons/SquareButton";
import NavSidebar from "../components/layout/NavSidebar";
import { navItems } from "../config/navConfig";

export default function Sangbok() {
  const item = navItems.find((x) => x.label === "Sektionen");

  return (
    <Container
      sx={{
        maxWidth: "90vw",
        minHeight: "60vh",
        minWidth: "60vw",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "left",
        gap: 4,
        mt: 20,
        mb: 10,
      }}
    >
      {item && <NavSidebar item={item} />}

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h4" mb={3}>
          IsF Sångbok
        </Typography>
        <Typography variant="body1" mb={3}>
          IsF:s sångbok är den perfekta kompisen när rösten börjar ta ton men
          hjärnan inte riktigt minns andra versen. Här hittar du allt du behöver
          för att överleva en sittning med stil: klassiker, märkligheter,
          skrålsäkra favoriter och låtar du inte ens visste att du kunde.
          <br />
          <br />
          Den är lagom liten för att rymmas i en ovveficka, men tillräckligt
          fullmatad för att rädda dig när någon plötsligt utbrister: “Hörde jag
          vikingen!” Kort sagt: en trofast guide genom både vackra toner och
          fullständigt kaos.
          <br />
          <br />
          Vill du köpa ditt eget exemplar? Skicka ett mejl eller kom förbi Kexet{" "}
          {"<3"}
        </Typography>
        <SquareButton
          text="styrelsen@isflemingsberg.se"
          to="mailto:styrelsen@isflemingsberg.se"
          fontSize="1.2em"
        />
      </Box>
    </Container>
  );
}
