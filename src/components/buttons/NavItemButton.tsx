import { useState } from "react";
import {
  Box,
  Button,
  List,
  ListItemButton,
  ListItemText,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import type { NavItem } from "../../config/navConfig";

interface NavItemButtonProps {
  item: NavItem;
}

const NavItemButton: React.FC<NavItemButtonProps> = ({ item }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const hasSubLinks = !!item.subLinks?.length;

  const handleMainClick = () => {
    if (!item.path) return;

    if (item.remote) {
      window.open(item.path, "_blank", "noopener,noreferrer");
    } else {
      navigate(item.path);
    }
  };

  const handleSubClick = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  const handleMouseEnter = () => {
    if (!hasSubLinks) return;
    setOpen(true);
  };

  const handleMouseLeave = () => {
    if (!hasSubLinks) return;
    setOpen(false);
  };

  return (
    <Box
      position="relative"
      display="inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{ margin: "auto" }}
    >
      <Button
        disableRipple
        onClick={handleMainClick}
        sx={{
          textTransform: "uppercase",
          color: "white",
          letterSpacing: "0.1em",
          fontFamily: "'Open Sans', sans-serif",
          fontSize: "0.85em",

          borderRadius: item.superButton ? "20px" : 0,
          border: item.superButton ? "3px solid white" : "none",
          px: item.superButton ? 2.5 : 1,
          py: item.superButton ? 0.7 : 0.5,

          transition: "background-color 0.2s ease, color 0.2s ease",

          "&:hover": {
            backgroundColor: item.superButton ? "white" : "transparent",
            color: item.superButton ? "black" : "white",
          },
        }}
      >
        {item.label}
      </Button>

      {hasSubLinks && (
        <Paper
          elevation={4}
          sx={{
            position: "absolute",
            top: "100%",
            left: 0,
            mt: 0,
            backgroundColor: "#222222",
            minWidth: 260,
            zIndex: 1300,
            borderRadius: 0,

            // 🔽 dropdown animation
            transformOrigin: "top",
            transform: open ? "scaleY(1)" : "scaleY(0)",
            transition: "transform 125ms ease-out",
            overflow: "hidden",
            pointerEvents: open ? "auto" : "none",
          }}
        >
          <Box
            sx={{
              opacity: open ? 1 : 0,
              transition: "opacity 150ms ease-out",
              transitionDelay: open ? "125ms" : "0ms", // text appears after dropdown starts
            }}
          >
            <List dense sx={{ py: 1 }}>
              {item.subLinks!.map((sub) => (
                <ListItemButton
                  key={sub.path}
                  onClick={() => handleSubClick(sub.path)}
                  sx={{
                    py: 0.1,
                    "&:hover": {
                      backgroundColor: "transparent",
                      "& .MuiListItemText-primary": {
                        color: "white",
                        textShadow: "0 0 1px white",
                      },
                    },
                  }}
                >
                  <ListItemText
                    primary={sub.label}
                    slotProps={{
                      primary: {
                        fontFamily: "'Open Sans', sans-serif",
                        fontSize: "0.8em",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#EEE",
                      },
                    }}
                  />
                </ListItemButton>
              ))}
            </List>
          </Box>
        </Paper>
      )}
    </Box>
  );
};

export default NavItemButton;
