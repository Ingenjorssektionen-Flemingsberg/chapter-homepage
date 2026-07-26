import { Divider, Typography } from "@mui/material";
import InfoPageLayout from "../../components/layout/InfoPageLayout";
import ComplaintForm from "../../components/ComplaintForm";
import { useGroups } from "../../contexts/GroupContext";
import sno from "../../assets/organ-och-namnder/studienamnden.webp";
import GroupRoles from "../../components/roles/GroupRoles";

export default function Sso() {
  const { gIndex } = useGroups();
  const g = gIndex.get("studerande skyddsombud");

  return (
    <InfoPageLayout
      navLabel="Organ och Nämnder"
      heroImage={sno}
      heroTitle="Studerande Skyddsombud"
      heroHeight={{ xs: "40vh", md: "60vh" }}
    >
      <Typography variant="h4" mb={3}>
        Studerande Skyddsombud
      </Typography>
      <Typography variant="body1">
        Studerande skyddsombud representerar studenternas intressen i frågor som
        rör arbetsmiljö och studiemiljö. De arbetar för att säkerställa en
        trygg, säker och inkluderande studieplats genom att uppmärksamma
        brister, delta i arbetsmiljöarbete och föra studenternas talan gentemot
        lärosätet. Du kan vända dig till skyddsombudet om du upplever problem
        som påverkar din studiemiljö. Skyddsombudet har även tystnadsplikt,
        vilket innebär att känsliga uppgifter hanteras konfidentiellt.
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h5" mb={3}>
        Ansvarig
      </Typography>
      {g && <GroupRoles group={g} showGroupName={false} showContact={true} />}
      <Divider sx={{ my: 3 }} />

      <ComplaintForm
        title="Lämna ett klagomål till studerande skyddsombud"
        kind="sso"
      />
    </InfoPageLayout>
  );
}
