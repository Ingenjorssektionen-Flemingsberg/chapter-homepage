import React from "react";
import { Box, Container, Divider } from "@mui/material";
import HeroBanner from "../HeroBanner";
import NavSidebar from "./NavSidebar";
import { navItems } from "../../config/navConfig";

interface InfoPageLayoutProps {
  navLabel: string;
  heroImage?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  heroHeight?: { xs: string; md: string };
  heroPosition?: { xs: string; md: string; lg?: string };
  children: React.ReactNode;
}

export default function InfoPageLayout({
  navLabel,
  heroImage,
  heroTitle,
  heroSubtitle,
  heroHeight = { xs: "40vh", md: "60vh" },
  heroPosition = { xs: "center", md: "center 35%" },
  children,
}: Readonly<InfoPageLayoutProps>) {
  const item = navItems.find((x) => x.label === navLabel);

  return (
    <Container
      disableGutters
      sx={{
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        top: 0,
      }}
    >
      {heroImage && (
        <HeroBanner
          image={heroImage}
          title={heroTitle ?? ""}
          subtitle={heroSubtitle ?? ""}
          height={heroHeight}
          position={heroPosition}
        />
      )}

      <Box
        sx={{
          maxWidth: { xs: "90vw", md: "50vw" },
          width: "100%",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          my: 8,
          mt: heroImage ? 8 : 20,
          alignItems: "flex-start",
          justifyContent: "left",
        }}
      >
        {item && <NavSidebar item={item} />}

        {item && (
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              display: { xs: "none", md: "inherit" },
            }}
          />
        )}

        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>{children}</Box>
      </Box>
    </Container>
  );
}
