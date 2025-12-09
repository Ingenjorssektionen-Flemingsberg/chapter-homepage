import { Box, Typography, IconButton, Stack, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useTheme } from "../../hooks/useTheme";

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
          <Link
            href="mailto:styrelsen@isflemingsberg.se"
            underline="hover"
            sx={{ color: theme.palette.secondary.main }}
          >
            styrelsen@isflemingsberg.se
          </Link>
        </Typography>

        <Typography>
          Lämna klagomål till sektionen:{" "}
          <Link
            href="/jml"
            underline="hover"
            sx={{ color: theme.palette.secondary.main, mr: 1 }}
          >
            JML
          </Link>
          <Link
            href="/studienamnden"
            underline="hover"
            sx={{ color: theme.palette.secondary.main }}
          >
            Studienämnden
          </Link>
        </Typography>
      </Stack>

      {/* Socials */}
      <Stack direction="row" justifyContent="center" spacing={1.5}>
        <IconButton
          href="https://www.facebook.com/isflemingsberg/"
          target="_blank"
          rel="noopener"
          aria-label="Facebook"
          sx={{ color: "primary.contrastText" }}
        >
          <FacebookIcon />
        </IconButton>

        <IconButton
          href="https://instagram.com/isflemingsberg"
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
          sx={{ color: "primary.contrastText" }}
        >
          <InstagramIcon />
        </IconButton>

        <IconButton
          href="https://www.linkedin.com/company/ingsekt"
          target="_blank"
          rel="noopener"
          aria-label="LinkedIn"
          sx={{ color: "primary.contrastText" }}
        >
          <LinkedInIcon />
        </IconButton>
      </Stack>
    </Box>
  );
}
