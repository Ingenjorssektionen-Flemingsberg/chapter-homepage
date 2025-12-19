import { Typography } from "@mui/material";
import SquareButton from "../../components/buttons/SquareButton";
import InfoPageLayout from "../../components/layout/InfoPageLayout";
import { LINKS } from "../../config/links";

export default function Skap() {
  return (
    <InfoPageLayout navLabel="Sektionen">
      <Typography variant="h4" mb={3}>
        Skåp
      </Typography>
      <Typography variant="body1" mb={3}>
        Är du intresserad av att hyra skåp?
        <br /> <br />
        Ingenjörssektionen Flemingsberg står för uthyrningen av skåpen på plan 4
        vid campus Flemingsberg.
        <br />
        Kom förbi expeditionen (Kexet) på plan 4 så ser vi till att du får
        tillgång till ett av skåpen. (Alternativt mejla)
        <br /> <br />
        Hyran ligger på 50kr/termin för THS kårmedlemmar och 150kr/termin om du
        inte är medlem.
        <br /> En deposition på 500kr tillkommer. Den återfås vid återlämning av
        nyckel.
      </Typography>
      <SquareButton link={LINKS.mail.styrelsen} fontSize="1.2em">
        frågor?
      </SquareButton>

      <Typography variant="body1" mb={3} mt={7}>
        Om du inte är kårmedlem kan du betala kårmedlemskapet hos THS.
      </Typography>
      <SquareButton link={LINKS.ths.root} fontSize="1.2em">
        bli kårmedlem
      </SquareButton>
    </InfoPageLayout>
  );
}
