import { Divider, Typography } from "@mui/material";
import InfoPageLayout from "../../components/layout/InfoPageLayout";
import GroupRoles from "../../components/roles/GroupRoles";
import utbyte from "../../assets/organ-och-namnder/utbyte.webp";
import { useGroups } from "../../contexts/GroupContext";

export default function Utbytesnamnden() {
  const { gIndex } = useGroups();
  const g = gIndex.get("utbytesnämnden");

  return (
    <InfoPageLayout
      navLabel="Organ och Nämnder"
      heroImage={utbyte}
      heroTitle="utbytesnämnden"
      heroHeight={{ xs: "40vh", md: "60vh" }}
      heroPosition={{ xs: "center", md: "center 200%" }}
    >
      <Typography variant="h4" mb={3}>
        Utbytesnämnden
      </Typography>
      <Typography variant="body1">
        Utbytesnämnden hanterar frågor som rör utbytesstudier och stöttar
        studenter genom ansökningsprocessen. De hjälper till med praktiska
        frågor, för dialog med KTH vid behov och arbetar även med att informera
        och uppmuntra studenter att söka utbyte.
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h5" mb={3}>
        Ansvarig
      </Typography>
      {g && <GroupRoles group={g} showGroupName={false} showContact={true} />}
    </InfoPageLayout>
  );
}
