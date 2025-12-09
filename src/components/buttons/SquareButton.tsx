import { Button, useTheme } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

interface SquareButtonProps {
  text: string;
  to: string; // link
  width?: string | number; // e.g. "200px", "100%", etc.
  size?: "small" | "medium" | "large";
  fontSize?: string;
}

export default function SquareButton({
  text,
  to,
  width = "auto",
  size = "large",
  fontSize = "1.25em",
}: Readonly<SquareButtonProps>) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Button
      component={RouterLink}
      to={to}
      size={size}
      sx={{
        width,
        maxWidth: "80vw",
        textAlign: "center",
        whiteSpace: "normal", // allow wrapping
        lineHeight: 1.2,
        letterSpacing: "0.05em",
        padding: "8px 12px",
        borderRadius: 0, // square corners
        backgroundColor: isDark ? "#fff" : "#222",
        color: isDark ? "#222" : "#fff",
        textTransform: "uppercase",
        fontFamily:
          "'proxima-nova', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontWeight: 600,
        fontSize: { xs: "0.9em", md: fontSize },
        px: 5,
        py: 2.5,
        "&:hover": {
          backgroundColor: isDark ? "#ddd" : "#222",
        },
      }}
    >
      {text}
    </Button>
  );
}
