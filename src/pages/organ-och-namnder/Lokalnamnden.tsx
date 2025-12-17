import { Divider, Link, Typography } from "@mui/material";
import InfoPageLayout from "../../components/layout/InfoPageLayout";
import lokal from "../../assets/banner.webp";
import GroupRoles from "../../components/roles/GroupRoles";
import NavLink from "../../components/util/NavLink";

export default function Lokalnamnden() {
  return (
    <InfoPageLayout
      navLabel="Organ och Nämnder"
      heroImage={lokal}
      heroTitle="lokalnämnden"
      heroHeight={{ xs: "40vh", md: "60vh" }}
    >
      <Typography variant="h4" mb={3}>
        Lokalnämnden
      </Typography>
      <Typography variant="body1">
        Lokalnämnden ansvarar för skötseln av kårlokalen{" "}
        <NavLink to="/rudan">Rudan</NavLink>. De ansvarar även för inköp av
        möbler, och allt som man kan tänkas vilja ha i lokalen.
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h5" mb={3}>
        Ansvarig
      </Typography>
      <GroupRoles
        find="Lokalnämnden"
        showGroupName={false}
        showContact={true}
      />
    </InfoPageLayout>
  );
}
