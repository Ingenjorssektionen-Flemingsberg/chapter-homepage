import { Container, Box, Typography, Stack } from "@mui/material";
import banner from "../assets/banner.webp";
import HeroBanner from "../components/HeroBanner";

export default function Home() {
  return (
    <>
      <Container
        disableGutters
        sx={{
          minHeight: "100vh",
          minWidth: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <HeroBanner
          image={banner}
          subtitle="Välkommen till"
          title={
            <>
              INGENJÖRSSEKTIONEN <br /> FLEMINGSBERG
            </>
          }
        />
      </Container>

      {/* About Section */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          px: { xs: 2, sm: 4, md: 8 },
          textAlign: "center",
          backgroundColor: "background.default",
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="center"
          justifySelf={"center"}
          maxWidth={{ xs: "100vw", md: "90vw" }}
          minWidth={{ xs: "100vw", md: "50vw" }}
          spacing={3}
        >
          <Stack>
            <Typography
              variant="h5"
              textAlign="start"
              ml={{ xs: "1rem" }}
              mr={{ xs: "1rem" }}
            >
              Var finns vi?
            </Typography>
            <Typography
              sx={{ mb: 4, maxWidth: 800, mx: "auto", textAlign: "start" }}
              ml={{ xs: "1rem" }}
              mr={{ xs: "1rem" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, architecto tempora maxime deserunt dolores cumque? Quod
              soluta in quis ab voluptatibus, voluptatum ducimus facilis quam
              cumque, nam, repellendus ullam ex. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ducimus, quisquam laudantium aliquid
              quibusdam iure, quae, at ipsam maxime dolorem sit itaque eligendi
              animi quas nihil aut culpa reiciendis molestiae sequi.
              <br /> <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
              ipsum sed, voluptatum ipsa dicta repudiandae? Accusamus, doloribus
              nihil nam fuga accusantium eligendi itaque exercitationem,
              architecto unde blanditiis ullam laborum odio!
            </Typography>
          </Stack>
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
            ></iframe>
          </Box>
        </Stack>
      </Box>
    </>
  );
}
