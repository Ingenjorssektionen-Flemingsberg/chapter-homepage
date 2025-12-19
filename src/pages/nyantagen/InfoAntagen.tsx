import { Typography } from "@mui/material";
import InfoPageLayout from "../../components/layout/InfoPageLayout";
import NavLink from "../../components/util/NavLink";
import infoAntagen from "../../assets/nyantagen/info-antagen.webp";
import { LINKS } from "../../config/links";

export default function InfoAntagen() {
  return (
    <InfoPageLayout
      navLabel="Nyantagen"
      heroImage={infoAntagen}
      heroTitle="info om antagning"
      heroSubtitle=""
      heroHeight={{ xs: "40vh", md: "60vh" }}
      heroPosition={{ xs: "center", md: "center 250%" }}
    >
      <Typography variant="h4" mb={3}>
        Info om du blivit antagen {new Date().getFullYear()}
      </Typography>
      <Typography variant="body1" mb={3}>
        Hej!
        <br />
        <br />
        Stort grattis till att du har blivit antagen till en av utbildningarna
        här på KTH Flemingsberg. Mycket kommer att ske de första veckorna med
        intro kurser, mottagningen och att träffa nya människor.
        <br />
        <br />
        Det <strong>obligatoriska uppropet</strong> för alla
        högskoleutbildningar här på <strong>KTH Flemingsberg</strong> kommer att
        informeras om snart. Alla antagna kommer att delas in i olika grupper
        beroende på vilken utbildning du har sökt till, så glöm inte att kolla
        vilken tid och grupp du tillhör till.
        <br />
        <br />
        Mer information om tider och gruppindelningar hittar du här:
        <ul>
          <li>
            <NavLink link={LINKS.kth.bas}>Tekniskt basår, 60 fup </NavLink>
          </li>
          <li>
            <NavLink link={LINKS.kth.titeh}>
              Teknik och Ekonomi, 180 hp{" "}
            </NavLink>
          </li>
          <li>
            <NavLink link={LINKS.kth.tidaa}>Datateknik, 180 hp </NavLink>
          </li>
          <li>
            <NavLink link={LINKS.kth.tiela}>Elektroteknik, 180 hp</NavLink>
          </li>
          <li>
            <NavLink link={LINKS.kth.timel}>Medicinsk teknik, 180 hp</NavLink>
          </li>
        </ul>
        Plats: Servicecenter, KTH Flemingsberg (entréplan). Hälsovägen 11C,
        Huddinge.{" "}
        <NavLink link={LINKS.maps.kthFlemingsberg}>Se platsen på karta</NavLink>
        .
        <br />
        <br />
        <strong>Glöm inte att ta med legitimation!</strong>
        <br />
        <br />
        <strong>
          Om du inte kan närvara vid uppropet måste du ansöka om dispens.
          Ansökan om dispens gör du via följande formulär senast samma dag som
          uppropet!
        </strong>
        <br />
        <NavLink link={LINKS.kth.dispens}>Ansökan om dispens</NavLink>
      </Typography>
    </InfoPageLayout>
  );
}
