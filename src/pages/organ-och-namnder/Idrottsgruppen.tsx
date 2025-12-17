import { Divider, Typography } from "@mui/material";
import InfoPageLayout from "../../components/layout/InfoPageLayout";
import igor from "../../assets/organ-och-namnder/igor.webp";
import GroupRoles from "../../components/roles/GroupRoles";
import NavLink from "../../components/util/NavLink";

export default function Idrottsgruppen() {
  return (
    <InfoPageLayout
      navLabel="Organ och Nämnder"
      heroImage={igor}
      heroTitle="Idrottsgruppen"
      heroHeight={{ xs: "40vh", md: "60vh" }}
      heroPosition={{ xs: "center", md: "center 100%" }}
    >
      <Typography variant="h4" mb={3}>
        Idrottsgruppen
      </Typography>
      <Typography variant="body1">
        Ibland kan det vara bra att ta en paus från pluggandet och röra på sig
        för att tänka på något annat för en stund. Idrottsgruppen ansvarar för
        alla sport- och idrottsevent inom sektionen och anordnar med jämna
        mellanrum olika idrottsaktiviteter. Har du förslag eller önskemål på
        aktiviteter är du varmt välkommen att kontakta IGOr på
        igor@isflemingsberg.se
        <br /> <br />
        Gå gärna med i vår{" "}
        <NavLink to="https://discord.gg/2EJ9YZp9Yp" remote>
          Discord
        </NavLink>{" "}
        för att få de senaste uppdateringarna från oss!
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h5" mb={3}>
        Ansvarig
      </Typography>
      <GroupRoles
        find="Idrottsgruppen"
        showGroupName={false}
        showContact={true}
      />
    </InfoPageLayout>
  );
}
