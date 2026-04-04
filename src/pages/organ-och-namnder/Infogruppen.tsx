import { Divider, Typography } from "@mui/material";
import InfoPageLayout from "../../components/layout/InfoPageLayout";
import GroupRoles from "../../components/roles/GroupRoles";
import info from "../../assets/organ-och-namnder/info.webp";
import { useGroups } from "../../contexts/GroupContext";

export default function Infogruppen() {
  const { gIndex } = useGroups();
  const g = gIndex.get("infogruppen");

  return (
    <InfoPageLayout
      navLabel="Organ och Nämnder"
      heroImage={info}
      heroTitle="infogruppen"
      heroHeight={{ xs: "40vh", md: "60vh" }}
      heroPosition={{ xs: "center", md: "center 50%" }}
    >
      <Typography variant="h4" mb={3}>
        Infogruppen
      </Typography>
      <Typography variant="body1">
        Infogruppen ansvarar för sektionens marknadsföring och kommunikation.
        Det innebär bland annat att sprida information och marknadsföra
        sektionens event, både internt och externt. Nämnden sköter sociala
        medier, grafiskt material och annan löpande kommunikation, och ser till
        att medlemmar får tydlig och aktuell information om vad som händer inom
        sektionen.
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h5" mb={3}>
        Ansvarig
      </Typography>
      {g && <GroupRoles group={g} showGroupName={false} showContact={true} />}
    </InfoPageLayout>
  );
}
