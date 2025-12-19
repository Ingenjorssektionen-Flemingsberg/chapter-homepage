import { Typography } from "@mui/material";
import InfoPageLayout from "../../components/layout/InfoPageLayout";
import NavLink from "../../components/util/NavLink";
import banner from "../../assets/banner.webp";
import { LINKS } from "../../config/links";

export default function InfoFlemingsberg() {
  return (
    <InfoPageLayout
      navLabel="Nyantagen"
      heroImage={banner}
      heroSubtitle="info om"
      heroTitle="kth flemingsberg"
      heroHeight={{ xs: "40vh", md: "60vh" }}
      heroPosition={{ xs: "center", md: "center 400%" }}
    >
      <Typography variant="h4" mb={3}>
        Info om KTH Flemingsberg
      </Typography>
      <Typography variant="body1" mb={3}>
        KTH Flemingsberg är beläget söder om centrala Stockholm i ett område med
        stor akademisk verksamhet och stark tillväxttakt. Flemingsberg är
        dessutom en av norra Europas mest betydelsefulla platser inom bioteknik,
        både vad det gäller forskning och industriell verksamhet.
        <br />
        <br />
        Flemingsberg ligger bara 20 minuter med pendeltåg från Stockholms
        central. Här bedriver KTH grundutbildningar i form av civilingenjörs-
        och högskoleingenjörsutbildning i medicinsk teknik samt
        högskoleingenjörsutbildningar i datateknik, elektroteknik och teknik och
        ekonomi. Även tekniskt basår och bastermin finns representerade på detta
        campus
        <br />
        <br />
        Forsknings- och utbildningsverksamheten på KTH Flemingsberg är inriktad
        på utveckling inom det tvärvetenskapliga området medicinsk teknik.
        <br />
        <br />
        2016 flyttade KTH:s verksamhet in i en ny byggnad i Flemingsberg efter
        att tidigare varit i Hanninge. I samma byggnad ligger Röda Korsets
        högskola. På campusområdet finns även delar av Karolinska Institutets
        och Södertörns högskolas verksamheter.
        <br />
        <br />
        <NavLink link={LINKS.kth.kthFlemingsberg}>Läs mer</NavLink>
        <br />
        <br />
        Hälsovägen 11c <br />
        141 57 Huddinge
        <br />
        <br />
        Telefon (vx): 08-790 60 00 <br />
        Telefax: 08-790 48 00
      </Typography>
    </InfoPageLayout>
  );
}
