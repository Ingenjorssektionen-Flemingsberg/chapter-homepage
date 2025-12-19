import { Button, type ButtonProps, useTheme } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import type { LinkTo } from "../../config/links";

type SquareButtonProps = {
  children: React.ReactNode;
  link?: LinkTo; // link mode
  width?: string | number;
  fontSize?: string;
} & Omit<ButtonProps, "component" | "children">;

export default function SquareButton({
  children,
  link,
  width = "auto",
  fontSize = "1.25em",
  ...buttonProps
}: Readonly<SquareButtonProps>) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const isLink = Boolean(link);

  return (
    <Button
      {...buttonProps}
      component={isLink ? RouterLink : "button"}
      {...(isLink && {
        to: link?.href,
        target: link?.remote ? "_blank" : "_self",
      })}
      sx={{
        width,
        textAlign: "center",
        whiteSpace: "normal",
        lineHeight: 1.2,
        letterSpacing: "0.05em",
        borderRadius: 0,
        backgroundColor: isDark ? "#fff" : "#222",
        color: isDark ? "#222" : "#fff",
        textTransform: "uppercase",
        fontFamily:
          "'proxima-nova', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontWeight: 100,
        fontSize: { xs: "0.9em", md: fontSize },
        px: 5,
        py: 2.5,
        "&:hover": {
          backgroundColor: isDark ? "#ddd" : "#222",
        },
        ...buttonProps.sx,
      }}
    >
      {children}
    </Button>
  );
}
