import { Divider, Typography } from "@mui/material";
import InfoPageLayout from "../../components/layout/InfoPageLayout";
import slurpen from "../../assets/organ-och-namnder/slurpen.webp";
import GroupRoles from "../../components/roles/GroupRoles";
import NavLink from "../../components/util/NavLink";
import { LINKS } from "../../config/links";

export default function Slurpen() {
  return (
    <InfoPageLayout
      navLabel="Organ och Nämnder"
      heroImage={slurpen}
      heroTitle="slurpen"
      heroHeight={{ xs: "40vh", md: "60vh" }}
      heroPosition={{ xs: "center", md: "center 400%" }}
    >
      <Typography variant="h4" mb={3}>
        Slurpen
      </Typography>
      <Typography variant="body1">
        Slurpenredaktionen, eller bara Slurpen, står för sektionens mer
        lättsamma innehåll. Det handlar främst om roliga inlägg och igenkännbara
        situationer från studentlivet, som delas på Slurpens{" "}
        <NavLink link={LINKS.social.slurpenInstagram}>Instagram</NavLink>
        .
        <br /> <br />
        Tanken är inte att vara något avancerat, utan snarare att bidra med lite
        humor i vardagen och något kul att scrolla förbi mellan föreläsningar
        och plugg. Ibland internt, ibland allmänt, men alltid med sektionen i
        fokus.
        <br /> <br />
        Har du en idé, en tanke eller något som hade passat bra som inlägg är
        det bara att höra av sig.
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h5" mb={3}>
        Ansvarig
      </Typography>
      <GroupRoles
        find="Slurpenredaktionen"
        showGroupName={false}
        showContact={true}
      />
    </InfoPageLayout>
  );
}
