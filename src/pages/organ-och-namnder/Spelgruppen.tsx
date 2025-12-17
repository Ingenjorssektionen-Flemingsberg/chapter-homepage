import { Divider, Typography } from "@mui/material";
import InfoPageLayout from "../../components/layout/InfoPageLayout";
import spruppen from "../../assets/organ-och-namnder/spruppen.webp";
import GroupRoles from "../../components/roles/GroupRoles";
import NavLink from "../../components/util/NavLink";

export default function Spelgruppen() {
  return (
    <InfoPageLayout
      navLabel="Organ och Nämnder"
      heroImage={spruppen}
      heroTitle="spruppen"
      heroHeight={{ xs: "40vh", md: "60vh" }}
      heroPosition={{ xs: "center", md: "center 100%" }}
    >
      <Typography variant="h4" mb={3}>
        Spruppen
      </Typography>
      <Typography variant="body1">
        Spelgruppen, även kallat <strong>SPRUPPEN</strong>, är till för alla som
        tycker att brädspel och TV-spel är bland det bästa som finns. Spruppen
        ansvarar för inköp och underhåll av sektionens spel, så att spelhyllan
        hålls välfylld och i gott skick, vi har även PS3 och Wii för den som
        föredrar konsolspel.
        <br /> <br />
        Varje onsdag anordnar Spruppen spelkvällar i våran lokal{" "}
        <NavLink to="/rudan">Rudan</NavLink>
        , där man kan komma förbi, slå sig ner och spela tillsammans med andra,
        helt utan krav på förkunskaper eller tävlingsinstinkt (om man inte
        vill). Det är ett perfekt tillfälle att ta en paus från plugget, testa
        nya spel och träffa folk från sektionen.
        <br /> <br />
        Har du frågor om Spruppen, förslag på spel som borde köpas in eller bara
        vill tipsa om ditt favoritspel? Hör av dig, vi är alltid öppna för bra
        idéer (och bra spel). Gå gärna med i vår{" "}
        <NavLink to="https://discord.gg/vPWAkFauh6" remote>
          Discord
        </NavLink>{" "}
        för att få de senaste uppdateringarna från oss!
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h5" mb={3}>
        Ansvarig
      </Typography>
      <GroupRoles find="Spruppen" showGroupName={false} showContact={true} />
    </InfoPageLayout>
  );
}
