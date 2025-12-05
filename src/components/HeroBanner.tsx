import { Box, Typography } from "@mui/material";
import { useTheme } from "../contexts/ThemeContext";

interface HeroBannerProps {
  image: string; // background image
  title: string | React.ReactNode; // main text
  subtitle?: string; // optional smaller line above
  height?: string | number; // height (default 70vh)
  overlayLight?: number; // overlay opacity in light mode
  overlayDark?: number; // overlay opacity in dark mode
}

export default function HeroBanner({
  image,
  title,
  subtitle,
  height = "70vh",
  overlayLight = 0.35,
  overlayDark = 0.7,
}: HeroBannerProps) {
  const { isDark } = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        height,
        position: "relative",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: `rgba(0, 0, 0, ${
            isDark ? overlayDark : overlayLight
          })`,
          zIndex: 1,
        },
      }}
    >
      {subtitle && (
        <Typography
          variant="h5"
          sx={{
            color: "white",
            fontStyle: "italic",
            zIndex: 2,
            position: "relative",
            textAlign: "center",
            marginBottom: "2vh",
            fontFamily: `"Times New Roman", serif`,
          }}
        >
          {subtitle}
        </Typography>
      )}

      <Typography
        variant="h2"
        sx={{
          color: "white",
          fontWeight: "bold",
          zIndex: 2,
          position: "relative",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          textAlign: "center",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}
