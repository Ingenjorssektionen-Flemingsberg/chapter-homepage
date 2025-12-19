import { Divider, Typography } from "@mui/material";
import InfoPageLayout from "../../components/layout/InfoPageLayout";
import foretag from "../../assets/organ-och-namnder/foretag.webp";
import GroupRoles from "../../components/roles/GroupRoles";
import MessageForm from "../../components/MessageForm";
import NavLink from "../../components/util/NavLink";
import { LINKS } from "../../config/links";

export default function Foretagsgruppen() {
  return (
    <InfoPageLayout
      navLabel="Organ och Nämnder"
      heroImage={foretag}
      heroTitle="Företagsgruppen"
      heroHeight={{ xs: "40vh", md: "60vh" }}
    >
      <Typography variant="h4" mb={3}>
        Företagsgruppen
      </Typography>
      <Typography variant="body1">
        Företagsgruppen arbetar för att ge studenter möjlighet att knyta tidiga
        kontakter med arbetsmarknaden redan under studietiden. Gruppen
        arrangerar olika typer av företagsevent, såsom lunchföreläsningar och
        företagspresentationer, där studenter får chans att träffa och lära
        känna potentiella framtida arbetsgivare.
        <br /> <br />
        Utöver detta ansvarar Företagsgruppen för att planera och genomföra
        sektionens arbetsmarknadsmässa{" "}
        <NavLink link={LINKS.internal.fam}>FAM</NavLink>
        , där företag och studenter möts under mer organiserade former. .
        <br /> <br />
        Vill du hålla dig uppdaterad om kommande event och möjligheter? Glöm
        inte att följa Företagsgruppen på{" "}
        <NavLink link={LINKS.social.famInstagram}>Instagram</NavLink>.
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h5" mb={3}>
        Ansvarig
      </Typography>
      <GroupRoles
        find="Företagsgruppen"
        showGroupName={false}
        showContact={true}
      />

      <Divider sx={{ my: 3 }} />

      <MessageForm
        title="Kontakt om samarbete"
        text="Är ni intresserade att komma i kontakt med våra studenter? Skulle ni vilja ha en monter uppe eller varför inte en lunchföreläsning? Vad än fallet är det bara att kontakta oss så kan vi säkert lösa det."
        email=""
      />
    </InfoPageLayout>
  );
}
