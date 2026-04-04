import { Divider, Typography } from "@mui/material";
import InfoPageLayout from "../../components/layout/InfoPageLayout";
import GroupRoles from "../../components/roles/GroupRoles";
import valberedningen from "../../assets/organ-och-namnder/valberedningen.webp";
import { useGroups } from "../../contexts/GroupContext";

export default function Valberedningen() {
  const { gIndex } = useGroups();
  const g = gIndex.get("valberedningen");

  return (
    <InfoPageLayout
      navLabel="Organ och Nämnder"
      heroImage={valberedningen}
      heroTitle="valberedningen"
      heroHeight={{ xs: "40vh", md: "60vh" }}
      heroPosition={{ xs: "center", md: "center" }}
    >
      <Typography variant="h4" mb={3}>
        Valberedningen
      </Typography>
      <Typography variant="body1">
        Valberedningen arbetar med att bereda personval till sektionens
        förtroendevalda poster. De håller intervjuer med kandidater och gör en
        samlad bedömning av hur väl en person passar för den roll hen söker.
        Målet är att föreslå personer som kan bidra till att sektionens arbete
        fungerar på ett bra och rättvist sätt.
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h5" mb={3}>
        Ansvarig
      </Typography>
      {g && <GroupRoles group={g} showGroupName={false} showContact={true} />}
    </InfoPageLayout>
  );
}
