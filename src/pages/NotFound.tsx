import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: "100vh", // take full screen height
        minWidth: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // horizontal center
        justifyContent: "center",
      }}
    >
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
