import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Box } from "@mui/material";
import Footer from "./Footer";

export default function Layout() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", // page at least full viewport height
      }}
    >
      <Header />

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

      <Footer />
    </Box>
  );
}
