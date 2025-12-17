import { Box, Typography } from "@mui/material";
import InfoPageLayout from "../../components/layout/InfoPageLayout";

export default function HittaHit() {
  return (
    <InfoPageLayout
      navLabel="Nyantagen"
      heroImage=""
      heroTitle=""
      heroHeight={{ xs: "40vh", md: "60vh" }}
    >
      <Typography variant="h4" mb={3}>
        Hitta Hit
      </Typography>
      <Typography variant="body1" mb={3}>
        Adress: <br />
        Hälsovägen 11C <br />
        141 57 Huddinge <br />
        <br />
        Restiden ligger på ca. 20 min med pendeltåget från Stockholm City till
        Flemingsberg. Från stationen är det en promenad på ca. 10 min till KTH
        Flemingsberg som ligger vid Flemingsbergs centrum. Följ skyltarna mot
        sjukhuset (Huddinge sjukhus). Huvudingången är på samma sida som
        huvudentré till sjukhuset. Under inskrivningsdagen kommer det finnas
        faddrar som är utspridda för att hjälpa dig hitta rätt från pendeln så
        fråga personerna i tröjor med texten fadder.
      </Typography>

      <Box sx={{ width: "100%", height: { xs: 300, md: 400 } }}>
        <iframe
          title="ISF Flemingsberg Location"
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=KTH Flemingsberg Hälsovägen 11, 141 52 Huddinge&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Box>
    </InfoPageLayout>
  );
}
