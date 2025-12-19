import { Box, Typography } from "@mui/material";
import SquareButton from "../../components/buttons/SquareButton";
import InfoPageLayout from "../../components/layout/InfoPageLayout";
import { LINKS } from "../../config/links";

export default function Styrelsemoten() {
  return (
    <InfoPageLayout navLabel="Sektionen">
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
        <SquareButton link={LINKS.internal.styrdokument} fontSize="1.2em">
          möteshandlingar och protokoll
        </SquareButton>
      </Box>
    </InfoPageLayout>
  );
}
