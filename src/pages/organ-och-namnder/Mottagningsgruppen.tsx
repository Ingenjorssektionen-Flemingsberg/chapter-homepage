import { Divider, Typography } from "@mui/material";
import InfoPageLayout from "../../components/layout/InfoPageLayout";
import mogen from "../../assets/organ-och-namnder/mogen.webp";
import GroupRoles from "../../components/roles/GroupRoles";
import { useGroups } from "../../contexts/GroupContext";

export default function Mottagningsgruppen() {
  const { gIndex } = useGroups();
  const g = gIndex.get("mottagningsgruppen");

  return (
    <InfoPageLayout
      navLabel="Organ och Nämnder"
      heroImage={mogen}
      heroTitle="mottagningsgruppen"
      heroHeight={{ xs: "40vh", md: "60vh" }}
      heroPosition={{ xs: "center 80%", md: "center 80%" }}
    >
      <Typography variant="h4" mb={3}>
        Mottagningsgruppen
      </Typography>
      <Typography variant="body1">
        Mottagningsgruppen, eller <strong>MoGen</strong>, ansvarar för
        mottagandet av de ny studenterna i början av varje vår- och hösttermin.
        Under de 3 första veckorna av höstterminen ger MoGen en introduktion
        till studentlivet på KTH där olika aktiviteter anordnas. Mottagningen är
        den perfekta tiden för att lära känna alla sina klasskamrater som man
        kommer att spendera dem kommande åren med men även en chans att få prata
        med äldre studenter (Faddrar) om hur det är att plugga på KTH.
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h5" mb={3}>
        Ansvarig
      </Typography>
      {g && <GroupRoles group={g} showGroupName={false} showContact={true} />}
    </InfoPageLayout>
  );
}
