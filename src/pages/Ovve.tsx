import { Box, Container, Typography } from "@mui/material";
import SquareButton from "../components/buttons/SquareButton";
import NavSidebar from "../components/layout/NavSidebar";
import { navItems } from "../config/navConfig";
import HeroBanner from "../components/HeroBanner";
import ovve from "../assets/ovve.webp";

export default function Ovve() {
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
      <HeroBanner
        image={ovve}
        title="ovve"
        height={{ xs: "40vh", md: "60vh" }}
        position={{ xs: "center 50%", md: "center 70%" }}
      />

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
            Ovve
          </Typography>
          <Typography variant="body1" mb={3}>
            Det finns mycket en student kan skaffa sig under sin tid på KTH, men
            få saker bär samma tyngd som en ovve. Den är mer än ett plagg, den
            blir ett minne av sena kvällar, tidiga mornar och ögonblick som
            fastnar långt efter att studierna är slut. Ovven är en följeslagare
            genom studietiden: sliten på rätt ställen, full av märken och
            historier, och alltid redo för nästa tradition eller äventyr.
            <br /> <br />
            Den kostar <strong>600</strong> kronor, och finns i ett brett spann
            av storlekar så att alla ska kunna hitta en som sitter perfekt.
            <br />
          </Typography>
          <SquareButton
            text="köp ovve"
            to="mailto:ovve@isflemingsberg.se"
            fontSize="1.2em"
          />
          <Typography variant="body1" mb={3} mt={7}>
            Här hittar du också vår ovveguide där du kan läsa om traditionerna,
            reglerna och de små hemligheter som ovvekulturen involverar. Ta väl
            hand om den, den kommer vara med dig i vått och torrt.
          </Typography>
          {/* TODO: Fixa pdf, antingen via drive eller om man ska kunna lägga upp på webbsidan */}
          <SquareButton text="ovveguide (pdf)" to="" fontSize="1.2em" />
        </Box>
      </Box>
    </Container>
  );
}
