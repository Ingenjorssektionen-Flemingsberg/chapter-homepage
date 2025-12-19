import { Divider, Stack, Typography } from "@mui/material";
import SquareButton from "../../components/buttons/SquareButton";
import InfoPageLayout from "../../components/layout/InfoPageLayout";
import { LINKS } from "../../config/links";

export default function Styrdokument() {
  return (
    <InfoPageLayout navLabel="Sektionen">
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
        <SquareButton link={LINKS.docs.stadgar} fontSize="0.9em">
          stadgar
        </SquareButton>
        <SquareButton link={LINKS.docs.varumarkenOchLogotyper} fontSize="0.9em">
          varumärken och logotyper
        </SquareButton>
        <SquareButton link={LINKS.docs.reglemente} fontSize="0.9em">
          reglemente
        </SquareButton>
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
        uppmanar alla att läsa dokumenten för att vara informerade om sektionens
        diskussioner och beslut.
      </Typography>
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{
          gap: 2,
        }}
      >
        <SquareButton link={LINKS.docs.currentYearSm} fontSize="0.9em">
          sm {new Date().getFullYear()}
        </SquareButton>
        <SquareButton link={LINKS.docs.smArkiv} fontSize="0.9em">
          sm arkiv
        </SquareButton>
        <SquareButton link={LINKS.docs.smGuide} fontSize="0.9em">
          sm guide
        </SquareButton>
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
          link={LINKS.docs.currentYearStyrelseMote}
          fontSize="0.9em"
        >
          styrelsemöten {new Date().getFullYear()}
        </SquareButton>

        <SquareButton link={LINKS.docs.styrelseMoteArkiv} fontSize="0.9em">
          styrelsemöten arkiv
        </SquareButton>
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
        <SquareButton link={LINKS.docs.motionMall} fontSize="0.9em">
          motionsmall
        </SquareButton>
      </Stack>
    </InfoPageLayout>
  );
}
