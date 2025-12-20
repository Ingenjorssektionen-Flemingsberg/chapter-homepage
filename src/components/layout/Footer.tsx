import { Box, Typography, IconButton, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useTheme } from "../../hooks/useTheme";
import NavLink from "../util/NavLink";
import { LINKS } from "../../config/links";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        px: 2,
        py: { xs: 4, md: 6 },
        bgcolor: "primary.main",
        color: "primary.contrastText",
      }}
    >
      {/* Address */}
      <Typography
        variant="caption"
        sx={{
          display: "block",
          textAlign: "center",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          opacity: 0.9,
          mb: 3,
          color: "white",
        }}
      >
        Ingenjörssektionen Flemingsberg · Hälsovägen 11c · Huddinge · Sweden
      </Typography>

      {/* Links */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 1.5, md: 4 }}
        alignItems="center"
        justifyContent="center"
        sx={{ mb: 3, color: theme.palette.secondary.main }}
      >
        <Typography>
          Har du frågor?{" "}
          <NavLink
            link={LINKS.mail.styrelsen}
            sx={{ color: theme.palette.secondary.main }}
          >
            styrelsen@isflemingsberg.se
          </NavLink>
        </Typography>

        <Typography>
          Lämna klagomål till sektionen:{" "}
          <NavLink
            link={LINKS.internal.jml}
            sx={{ color: theme.palette.secondary.main, mr: 1 }}
          >
            JML
          </NavLink>
          <NavLink
            link={LINKS.internal.studienamnden}
            sx={{ color: theme.palette.secondary.main }}
          >
            Studienämnden
          </NavLink>
        </Typography>
      </Stack>

      {/* Socials */}
      <Stack direction="row" justifyContent="center" spacing={1.5}>
        <IconButton
          href="https://www.facebook.com/isflemingsberg/"
          target="_blank"
          rel="noopener"
          aria-label="Facebook"
          disableRipple
          sx={{ color: "white" }}
        >
          <FacebookIcon />
        </IconButton>

        <IconButton
          href="https://instagram.com/isflemingsberg"
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
          disableRipple
          sx={{ color: "white" }}
        >
          <InstagramIcon />
        </IconButton>

        <IconButton
          href="https://www.linkedin.com/company/ingsekt"
          target="_blank"
          rel="noopener"
          aria-label="LinkedIn"
          disableRipple
          sx={{ color: "white" }}
        >
          <LinkedInIcon />
        </IconButton>
      </Stack>
    </Box>
  );
}
