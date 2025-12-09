import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import SquareButton from "../components/buttons/SquareButton";
import NavSidebar from "../components/layout/NavSidebar";
import { navItems } from "../config/navConfig";

export default function Styrdokument() {
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
        mb: 10,
      }}
    >
      {item && <NavSidebar item={item} />}

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h4" mb={3}>
          Styrdokument
        </Typography>
        <Typography variant="body1" mb={3}>
          Styrande dokument är riktlinjer som hjälper organisationer att nå mål
          och skapa enhetlig styrning. De omfattar policies, riktlinjer,
          strategier och procedurer som styr beslutsfattande. Nedan finner ni
          styrdokument för Ingenjörssektionen Flemingsberg.
        </Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          sx={{
            gap: 2,
          }}
        >
          <SquareButton
            text="stadgar"
            to="https://drive.google.com/file/d/1dCNJUAjUpPN6JdgPEi1cr0jzOldno6Yv/view?usp=drive_link"
            fontSize="0.9em"
          />
          <SquareButton
            text="varumärken och logotyper"
            to="https://drive.google.com/file/d/1-FPaCAIfSOJH2OBfAiyh4ZLt6o20Dy8V/view?usp=sharing"
            fontSize="0.9em"
          />
          <SquareButton
            text="reglemente"
            to="https://drive.google.com/open?id=1tQb1PrAbHCoUohqXTYzpSwjNS0pfX-DW&usp=drive_copy"
            fontSize="0.9em"
          />
        </Stack>

        <Divider
          sx={{
            my: 7,
          }}
        />

        <Typography variant="h4" mb={3}>
          Sektionsmöten
        </Typography>
        <Typography variant="body1" mb={3}>
          Protokoll och möteshandlingar från Sektionsmöten (SM) finns här. Vi
          uppmanar alla att läsa dokumenten för att vara informerade om
          sektionens diskussioner och beslut.
        </Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          sx={{
            gap: 2,
          }}
        >
          {/* TODO: Inte statiskt sätta SM 2025 på denna knapp */}
          <SquareButton
            text="sm 2025"
            to="https://drive.google.com/drive/folders/1wH3vGqSDEsM4Yn9tagDljv5k_4G1fsaB?usp=sharing"
            fontSize="0.9em"
          />
          <SquareButton
            text="sm arkiv"
            to="https://drive.google.com/drive/folders/1l8p312qmFeGSdyALApIMq8zu9lzA-5ij?usp=sharing"
            fontSize="0.9em"
          />
          <SquareButton
            text="sm guide"
            to="https://drive.google.com/file/d/1TKy9drsz5bDNmcQ6FFEeMReiOyF9bJEr/view?usp=sharing"
            fontSize="0.9em"
          />
        </Stack>

        <Divider
          sx={{
            my: 7,
          }}
        />

        <Typography variant="h4" mb={3}>
          Styrelsemöten
        </Typography>
        <Typography variant="body1" mb={3}>
          Protokoll och möteshandlingar från Styrelsens möten kan du hitta här.
          Dessa dokument ger en översikt över de beslut och diskussioner som har
          ägt rum under dessa möten.
        </Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          sx={{
            gap: 2,
          }}
        >
          <SquareButton
            text="styrelsemöten 2025"
            to="https://drive.google.com/drive/folders/17Nk7sRkxYubnYrozTd-H54FuAnCVWYhm?usp=drive_link"
            fontSize="0.9em"
          />
          <SquareButton
            text="styrelsemöten arkiv"
            to="https://drive.google.com/drive/folders/1SpILAQLOzgPQUcjVNjmRCQK9MSLVnObL?usp=sharing"
            fontSize="0.9em"
          />
        </Stack>

        <Divider
          sx={{
            my: 7,
          }}
        />

        <Typography variant="h4" mb={3}>
          Mallar
        </Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          sx={{
            gap: 2,
          }}
        >
          <SquareButton
            text="motionsmall"
            to="https://docs.google.com/document/d/1BwPKzr5vW68r-h-gB_r4SCVGKqhw5zQ3FCeaBBfdldo/edit?usp=drive_link"
            fontSize="0.9em"
          />
        </Stack>

        <Divider
          sx={{
            my: 7,
          }}
        />
      </Box>
    </Container>
  );
}
