import { Divider, Typography } from "@mui/material";
import InfoPageLayout from "../../components/layout/InfoPageLayout";
import studienamnden from "../../assets/organ-och-namnder/studienamnden.webp";
import RoleItem from "../../components/roles/RoleItem";
import ComplaintForm from "../../components/ComplaintForm";
import { useGroups } from "../../contexts/GroupContext";

export default function Studienamnden() {
  const { rIndex } = useGroups();
  const r = rIndex.get("styrelsen-studienämndens ordförande");

  return (
    <InfoPageLayout
      navLabel="Organ och Nämnder"
      heroImage={studienamnden}
      heroTitle="studienämnden"
      heroHeight={{ xs: "40vh", md: "60vh" }}
    >
      <Typography variant="h4" mb={3}>
        Studienämnden
      </Typography>
      <Typography variant="body1">
        Studienämnden arbetar med sektionens studiebevakning. Tillsammans med
        representanter från alla klasser och program ser studienämnden till att
        kurser utvärderas och följs upp.
        <br /> <br />
        Studienämnden undersöker bland annat:
        <ul style={{ marginTop: 0 }}>
          <li>Vad tycker studenterna om kursen?</li>
          <li>Är upplägget tydligt och rimligt?</li>
          <li>Fungerar föreläsningarna bra?</li>
          <li>Är examinationerna på en lagom nivå?</li>
        </ul>
        Målet är att hela tiden bidra till att utbildningen blir bättre. Har du
        synpunkter på en kurs som du vill få fram, eller frågor om
        Studienämnden, hör gärna av dig till sno@isflemingsberg.se.
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h5" mb={3}>
        Ansvarig
      </Typography>
      {r && <RoleItem role={r} showContact={true} />}

      <Divider sx={{ my: 3 }} />

      <ComplaintForm title="Lämna ett klagomål till studienämnden" email="" />
    </InfoPageLayout>
  );
}
