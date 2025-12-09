import { Box, Container, Divider, Typography, Link } from "@mui/material";
import NavSidebar from "../components/layout/NavSidebar";
import { navItems } from "../config/navConfig";
import HeroBanner from "../components/HeroBanner";
import sky from "../assets/sky.webp";
import { Link as RouterLink } from "react-router-dom";

export default function Sektionen() {
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
      <HeroBanner image={sky} title="Sektionen" height="50vh" />

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
            Sektionen
          </Typography>
          <Typography variant="body1" mb={3}>
            För att orka med tre år av studier behöver man då och då slappna av
            och tänka på annat. Till er hjälp finns sektionen som arbetar
            ideellt med just detta. Allt från idrottsevent och studiebevakning
            till spelkvällar och fredagspubar. Allt om vad sektionen har att
            erbjuda kan ni läsa under{" "}
            <Link component={RouterLink} to="/organ-och-nämnder">
              organ & nämnder
            </Link>
            .
          </Typography>

          <Divider
            sx={{
              my: 5,
            }}
          />

          {/* Förtroendevalda roller :) måste göris backend först*/}
        </Box>
      </Box>
    </Container>
  );
}
