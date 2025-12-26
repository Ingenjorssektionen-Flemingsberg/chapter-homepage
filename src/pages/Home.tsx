import { Container, Box, Typography, Stack, IconButton } from "@mui/material";
import banner from "../assets/banner.webp";
import HeroBanner from "../components/HeroBanner";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useTheme } from "../hooks/useTheme";
import NavLink from "../components/util/NavLink";
import { LINKS } from "../config/links";

export default function Home() {
  const { theme } = useTheme();

  return (
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
              mb={2}
            >
              Vilka är vi?
            </Typography>
            <Typography
              sx={{ mb: 4, maxWidth: 800, mx: "auto", textAlign: "start" }}
              ml={{ xs: "1rem" }}
              mr={{ xs: "1rem" }}
            >
              Ingenjörssektionen Flemingsberg (IsF) är en sektion under{" "}
              <NavLink link={LINKS.ths.root}>
                Tekniska Högskolans Studentkår
              </NavLink>{" "}
              som ansvarar för studentlivet för alla som pluggar på KTH
              Flemingsberg. Vill du veta mer om kåren och hur du kan bli
              engagerad i sektionen kan du läsa mer{" "}
              <NavLink link={LINKS.internal.sektionen}>här</NavLink>
              .
              <br /> <br />
              Kika gärna in vår{" "}
              <NavLink link={LINKS.social.linktree}>LinkTree</NavLink> och följ
              oss på våra sociala medier för att få de senaste uppdateringarna.
            </Typography>

            <Stack
              direction="row"
              justifyContent="left"
              spacing={1.5}
              ml={{ xs: "1rem" }}
            >
              <IconButton
                href={LINKS.social.facebook.href}
                target="_blank"
                aria-label="Facebook"
                disableRipple
                sx={{
                  backgroundColor: theme.palette.text.primary,
                  color: theme.palette.primary.contrastText,
                  borderRadius: 1.5,
                }}
              >
                <FacebookIcon />
              </IconButton>

              <IconButton
                href={LINKS.social.instagram.href}
                target="_blank"
                aria-label="Instagram"
                disableRipple
                sx={{
                  backgroundColor: theme.palette.text.primary,
                  color: theme.palette.primary.contrastText,
                  borderRadius: 1.5,
                }}
              >
                <InstagramIcon />
              </IconButton>

              <IconButton
                href={LINKS.social.linkedin.href}
                target="_blank"
                aria-label="LinkedIn"
                disableRipple
                sx={{
                  backgroundColor: theme.palette.text.primary,
                  color: theme.palette.primary.contrastText,
                  borderRadius: 1.5,
                }}
              >
                <LinkedInIcon />
              </IconButton>
            </Stack>
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
            />
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}
