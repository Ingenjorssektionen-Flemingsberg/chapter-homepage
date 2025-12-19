import { Typography } from "@mui/material";
import SquareButton from "../../components/buttons/SquareButton";
import ovve from "../../assets/sektionen/ovve.webp";
import InfoPageLayout from "../../components/layout/InfoPageLayout";
import { LINKS } from "../../config/links";

export default function Ovve() {
  return (
    <InfoPageLayout
      navLabel="Sektionen"
      heroImage={ovve}
      heroTitle="ovve"
      heroHeight={{ xs: "40vh", md: "60vh" }}
      heroPosition={{ xs: "center 50%", md: "center 70%" }}
    >
      <Typography variant="h4" mb={3}>
        Ovve
      </Typography>
      <Typography variant="body1" mb={3}>
        Det finns mycket en student kan skaffa sig under sin tid på KTH, men få
        saker bär samma tyngd som en ovve. Den är mer än ett plagg, den blir ett
        minne av sena kvällar, tidiga mornar och ögonblick som fastnar långt
        efter att studierna är slut. Ovven är en följeslagare genom studietiden:
        sliten på rätt ställen, full av märken och historier, och alltid redo
        för nästa tradition eller äventyr.
        <br /> <br />
        Den kostar <strong>600</strong> kronor, och finns i ett brett spann av
        storlekar så att alla ska kunna hitta en som sitter perfekt.
        <br />
      </Typography>
      <SquareButton link={LINKS.mail.ovve} fontSize="1.2em">
        köp ovve
      </SquareButton>
      <Typography variant="body1" mb={3} mt={7}>
        Här hittar du också vår ovveguide där du kan läsa om traditionerna,
        reglerna och de små hemligheter som ovvekulturen involverar. Ta väl hand
        om den, den kommer vara med dig i vått och torrt.
      </Typography>
      <SquareButton link={LINKS.docs.ovveguide} fontSize="1.2em">
        ovveguide (PDF)
      </SquareButton>
    </InfoPageLayout>
  );
}
