import { Typography } from "@mui/material";
import SquareButton from "../../components/buttons/SquareButton";
import InfoPageLayout from "../../components/layout/InfoPageLayout";
import { LINKS } from "../../config/links";

export default function Sangbok() {
  return (
    <InfoPageLayout navLabel="Sektionen">
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
      <SquareButton link={LINKS.mail.styrelsen} fontSize="1.2em">
        styrelsen@isflemingsberg.se
      </SquareButton>
    </InfoPageLayout>
  );
}
