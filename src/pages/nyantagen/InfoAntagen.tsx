import { Typography } from "@mui/material";
import InfoPageLayout from "../../components/layout/InfoPageLayout";
import NavLink from "../../components/util/NavLink";

export default function InfoAntagen() {
  return (
    <InfoPageLayout
      navLabel="Nyantagen"
      heroImage=""
      heroTitle=""
      heroHeight={{ xs: "40vh", md: "60vh" }}
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
            <NavLink
              remote
              to="https://www.kth.se/student/studier/nypakth/tekniskt-basar-kthflemingsberg-1.553271"
            >
              Tekniskt basår, 60 fup{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              remote
              to="https://www.kth.se/student/studier/nypakth/tekniskt-basar-termin-2-kthcampus-vt-1.357639"
            >
              Tekniskt basår, termin 2, 30 fup{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              remote
              to="https://www.kth.se/student/studier/nypakth/datateknik-flemingsberg-180-1.20533"
            >
              Datateknik, 180 hp{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              remote
              to="https://www.kth.se/student/studier/nypakth/elektroteknik-180-1.62763"
            >
              Elektroteknik, 180 hp
            </NavLink>
          </li>
          <li>
            <NavLink
              remote
              to="https://www.kth.se/student/studier/nypakth/medicinsk-teknik-180-1.553000"
            >
              Medicinsk teknik, 180 hp
            </NavLink>
          </li>
        </ul>
        Plats: Servicecenter, KTH Flemingsberg (entréplan). Hälsovägen 11C,
        Huddinge.{" "}
        <NavLink to="https://maps.app.goo.gl/sUKCHSNANoSyEVV56" remote>
          Se platsen på karta
        </NavLink>
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
        <NavLink
          remote
          to="https://www.kth.se/student/studier/nypakth/dispens-1.1247913"
        >
          Ansökan om dispens
        </NavLink>
      </Typography>
    </InfoPageLayout>
  );
}
