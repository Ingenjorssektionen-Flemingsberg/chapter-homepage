import { Box, Container, Divider, Typography } from "@mui/material";
import SquareButton from "../components/buttons/SquareButton";
import NavSidebar from "../components/layout/NavSidebar";
import { navItems } from "../config/navConfig";

export default function Styrelsemoten() {
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
          Styrelsemöten
        </Typography>
        <Typography variant="body1" mb={3}>
          Här kan du se när sektionsstyrelsen möts, samt vad varje möte har
          handlat om, vilka ämnen som diskuteras och även eventuella beslut som
          fattas under dessa sammankomster.
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
