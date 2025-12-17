import { Typography } from "@mui/material";
import InfoPageLayout from "../../components/layout/InfoPageLayout";
import NavLink from "../../components/util/NavLink";

export default function JoinSektionen() {
  return (
    <InfoPageLayout navLabel="Nyantagen" heroImage="" heroTitle="" heroHeight={{ xs: "40vh", md: "60vh" }}>
      <Typography variant="h4" mb={3}>
        Så blir du en del av sektionen
      </Typography>
      <Typography variant="body1" mb={3}>
        För att bli sektionsmedlem betalar du medlemsavgift till THS(Tekniska högskolans studentkår), detta gör att du både blir
        kårmedlem och sektionsmedlem. Avgiften ligger på 365 kr/år och ger dig förmåner som bostadskön hos SSSB.
        <br />
        <br />
        Läs mer{" "}
        <NavLink to="https://thskth.se/en/membership" remote>
          här
        </NavLink>
        <br />
        <br />
        Om du vill ha mer av medlemskapet kan du söka till några av våra organ och nämnder, hänga i Rudan på fredagar eller hänga
        med på aktiviteter ordnade av sektionen.
        <br />
        <br />
        Mer information om våra organ och nämnder kan du hitta <NavLink to="/qm">här</NavLink>.
      </Typography>
    </InfoPageLayout>
  );
}
