import { Divider, Typography } from "@mui/material";
import InfoPageLayout from "../../components/layout/InfoPageLayout";
import jml from "../../assets/organ-och-namnder/jml.webp";
import RoleItem from "../../components/roles/RoleItem";
import ComplaintForm from "../../components/ComplaintForm";
import { useGroups } from "../../contexts/GroupContext";

export default function JML() {
  const { rIndex } = useGroups();
  const r = rIndex.get("styrelsen-jml-ansvarig");

  return (
    <InfoPageLayout
      navLabel="Organ och Nämnder"
      heroImage={jml}
      heroTitle="JML-nämnden"
      heroHeight={{ xs: "40vh", md: "60vh" }}
    >
      <Typography variant="h4" mb={3}>
        JML-Nämnden
      </Typography>
      <Typography variant="body1">
        JML-gruppen är en grupp inom IsF som hanterar JML-frågor, håller i
        workshops och ses och hänger. Är du intresserad av att vara med i
        JML-nämnden, tveka inte att mejla jml@isflemingsberg.se!
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h5" mb={3}>
        Ansvarig
      </Typography>
      {r && <RoleItem role={r} showContact={true} />}
      <Divider sx={{ my: 3 }} />

      <ComplaintForm title="Lämna ett JML klagomål" kind="jml" />
    </InfoPageLayout>
  );
}
