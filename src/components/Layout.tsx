import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContrastIcon from "@mui/icons-material/Contrast";
import { Link as RouterLink, Outlet, useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import IsFLogo from "../assets/IsF.png";
import { navItems } from "../config/navConfig";
import NavItemButton from "./buttons/NavItemButton";

const Header: React.FC = () => {
  const { isDark, switchTheme, theme } = useTheme();
  const navigate = useNavigate();

  const pages = [
    "HEM",
    "NYHETER",
    "EVENT",
    "SEKTIONEN",
    "ORGAN OCH NÄMNDER",
    "NYANTAGEN",
    "DISCORD",
    "KONTAKT",
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", // page at least full viewport height
      }}
    >
      <Toolbar
        sx={{
          position: "absolute",
          zIndex: 1100,
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <IconButton
          component={RouterLink}
          to="/"
          disableRipple
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            p: 2,
          }}
        >
          <Box
            component="img"
            src={IsFLogo}
            alt="Ingenjörssektionen Flemingsberg"
            sx={{
              height: "10vh",
              width: "auto",
              display: "block",
            }}
          />
        </IconButton>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 3,
          }}
        >
          <Box sx={{ display: "flex", gap: 1 }}>
            {navItems.map((item) => (
              <NavItemButton key={item.label} item={item} />
            ))}
          </Box>

          <Button
            color="inherit"
            onClick={switchTheme}
            disableRipple
            sx={{
              transform: isDark ? "rotate(180deg)" : "none",
              transition: "transform 0.4s",
              "&:hover": {
                backgroundColor: "transparent",
              },
              "&:active": {
                backgroundColor: "transparent",
              },
              "&:focusVisible": {
                backgroundColor: "transparent",
              },
              color: "white",
            }}
          >
            <ContrastIcon />
          </Button>
        </Box>
      </Toolbar>

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          // no overflow here – let the page scroll naturally
          p: 0,
          m: 0,
        }}
      >
        <Outlet />
      </Box>

      {/* Footer – at the bottom of the document, not sticky to viewport */}
      <Box
        component="footer"
        sx={{
          backgroundColor: theme.palette.onBackground,
          width: "100%",
          textAlign: "center",
          py: 2,
          paddingTop: "6vh",
          paddingBottom: "6vh",
          color: theme.palette.secondary.main,
          fontFamily: theme.typography.fontFamily,
        }}
      >
        {/* Top line */}
        <Typography
          sx={{
            textTransform: "uppercase",
            color: "white",
            letterSpacing: "0.1em",
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "0.9em",
          }}
        >
          Ingenjörssektionen Flemingsberg, Hälsovägen 11c, Huddinge, Sweden
        </Typography>

        {/* Contact + Links Row */}
        <Box
          sx={{
            justifyContent: "space-between",
            display: "flex",
            width: "45%",
            margin: "auto",
            marginTop: "2vh",
            marginBottom: "3vh",
            flexWrap: "wrap",
            gap: "1.5vh",
          }}
        >
          {/* Contact Email */}
          <Typography
            variant="subtitle1"
            sx={{
              color: theme.palette.secondary.main,
              fontFamily: `"Times New Roman", serif`,
            }}
          >
            Har du frågor?{" "}
            <Box
              component="a"
              href="mailto:styrelsen@isflemingsberg.se"
              sx={{
                color: theme.palette.secondary.main,
              }}
            >
              styrelsen@isflemingsberg.se
            </Box>
          </Typography>

          {/* Complaint Links */}
          <Typography
            variant="subtitle1"
            sx={{
              color: theme.palette.secondary.main,
              fontFamily: `"Times New Roman", serif`,
            }}
          >
            Lämna klagomål till sektionen:{" "}
            <Box
              component="a"
              href="https://isflemingsberg.se/jml"
              sx={{
                color: theme.palette.secondary.main,
                mr: 1,
              }}
            >
              JML
            </Box>
            <Box
              component="a"
              href="https://isflemingsberg.se/studienmnden"
              sx={{
                color: theme.palette.secondary.main,
              }}
            >
              Studienämnden
            </Box>
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <IconButton
            component="a"
            href="https://www.facebook.com/isflemingsberg/"
            sx={{ color: "white" }}
          >
            <FacebookIcon fontSize="large" />
          </IconButton>

          <IconButton
            component="a"
            href="https://instagram.com/isflemingsberg"
            sx={{ color: "white" }}
          >
            <InstagramIcon fontSize="large" />
          </IconButton>

          <IconButton
            component="a"
            href="https://www.linkedin.com/company/ingsekt"
            sx={{ color: "white" }}
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
