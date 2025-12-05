import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

export default function NotFound() {
  const navigate = useNavigate();
  const { theme } = useTheme();

  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: "100vh", // take full screen height
        minWidth: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // horizontal center
      }}
    >
      <Box
        sx={{
          width: "100vw",
          height: "14vh",
          backgroundColor: theme.palette.onBackground,
          marginBottom: "20vh",
        }}
      />

      <Typography
        variant="h1"
        sx={{ fontSize: { xs: 80, sm: 120 }, fontWeight: "bold" }}
      >
        404
      </Typography>
      <Typography variant="h4" sx={{ mt: 2, mb: 4 }}>
        Oops! Page Not Found
      </Typography>
      <Typography sx={{ mb: 4, color: "text.secondary" }}>
        The page you’re looking for doesn’t exist or has been moved.
      </Typography>
      <Box>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/")}
        >
          Go Home
        </Button>
      </Box>
    </Container>
  );
}
