import { Box, Typography, IconButton, Stack, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
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
        sx={{ mb: 3 }}
      >
        <Typography>
          Har du frågor?{" "}
          <Link
            href="mailto:styrelsen@isflemingsberg.se"
            underline="hover"
            sx={{ color: "primary.contrastText" }}
          >
            styrelsen@isflemingsberg.se
          </Link>
        </Typography>

        <Typography>
          Klagomål:{" "}
          <Link
            href="https://isflemingsberg.se/jml"
            underline="hover"
            sx={{ color: "primary.contrastText", mr: 1 }}
          >
            JML
          </Link>
          <Link
            href="https://isflemingsberg.se/studienamnden"
            underline="hover"
            sx={{ color: "primary.contrastText" }}
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
