import { Divider, Typography } from "@mui/material";
import sky from "../../assets/sektionen/sky.webp";
import InfoPageLayout from "../../components/layout/InfoPageLayout";
import { rolesConfig } from "../../config/rolesConfig";
import ChapterRoles from "../../components/roles/ChapterRoles";
import NavLink from "../../components/util/NavLink";

export default function Sektionen() {
  return (
    <InfoPageLayout
      navLabel="Sektionen"
      heroImage={sky}
      heroTitle="sektionen"
      heroHeight={{ xs: "40vh", md: "60vh" }}
    >
      <Typography variant="h4" mb={3}>
        Sektionen
      </Typography>
      <Typography variant="body1" mb={3}>
        För att orka med tre år av studier behöver man då och då slappna av och
        tänka på annat. Till er hjälp finns sektionen som arbetar ideellt med
        just detta. Allt från idrottsevent och studiebevakning till spelkvällar
        och fredagspubar. Allt om vad sektionen har att erbjuda kan ni läsa
        under <NavLink to="/organ-och-nämnder">organ & nämnder</NavLink>.
      </Typography>

      <Divider
        sx={{
          my: 5,
        }}
      />

      <ChapterRoles data={rolesConfig} />
    </InfoPageLayout>
  );
}
