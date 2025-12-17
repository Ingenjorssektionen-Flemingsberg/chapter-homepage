import { Divider, Typography } from "@mui/material";
import fisq from "../../assets/organ-och-namnder/fisq.webp";
import InfoPageLayout from "../../components/layout/InfoPageLayout";
import GroupRoles from "../../components/roles/GroupRoles";
import SquareButton from "../../components/buttons/SquareButton";
import NavLink from "../../components/util/NavLink";

export default function QM() {
  return (
    <InfoPageLayout
      navLabel="Organ och Nämnder"
      heroImage={fisq}
      heroTitle="fisq"
      heroHeight={{ xs: "40vh", md: "60vh" }}
      heroPosition={{ xs: "center 10%", md: "center 60%" }}
    >
      <Typography variant="h4" mb={3}>
        FISQ
      </Typography>

      <Typography variant="body1">
        Flemingsbergs Ingenjörssektions Qlubbmästeri, förkortat FISQ, ansvarar
        för sektions fest och barverksamhet.
        <br /> <br />
        Puben är vanligtvis öppen varje fredag i kårlokalen{" "}
        <NavLink to="/rudan">Rudan</NavLink> från 17:17. Förutom fredagspubar
        anordnas sittningar och andra festligheter under året. För inträde
        gäller kårmedlem (IsF / RKHSK / MiT) +1.
        <br /> <br />
        Håll utkik{" "}
        <NavLink to="http://facebook.com/FISQlubbmasteri/" remote>
          Facebook
        </NavLink>{" "}
        eller{" "}
        <NavLink to="https://www.instagram.com/fisqeri/" remote>
          Instagram
        </NavLink>{" "}
        för aktiviteter som FISQ anordnar.
        <br /> <br />
        Är du intresserad av att veta mer om barverksamheten och kanske själv är
        sugen på att stå bakom baren kontakta qm@isflemingsberg.se eller sväng
        förbi när puben är öppen!
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h5" mb={3}>
        Ansvarig
      </Typography>
      <GroupRoles
        find="Qlubbmästeriet"
        showGroupName={false}
        showContact={true}
      />

      <Divider sx={{ my: 3 }} />

      <Typography variant="h5">Viktiga Dokument</Typography>

      {/* TODO: Fixa pdf, antingen via drive eller om man ska kunna lägga upp på webbsidan */}
      <SquareButton to="" fontSize="1em" sx={{ mt: 3 }}>
        Reglemente
      </SquareButton>
      <SquareButton to="" fontSize="1em" sx={{ mt: 3 }}>
        Protokoll (QMM)
      </SquareButton>
    </InfoPageLayout>
  );
}
