import {
  Box,
  Button,
  IconButton,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
} from "@mui/material";
import IsFLogo from "../../assets/IsF.png";
import { navItems } from "../../config/navConfig";
import NavItemButton from "../buttons/NavItemButton";
import { Link as RouterLink } from "react-router-dom";
import {
  ContrastOutlined,
  ExpandLess,
  ExpandMore,
  Menu,
} from "@mui/icons-material";
import { memo, useState } from "react";
import { useTheme } from "../../hooks/useTheme";

function HeaderComponent() {
  const { isDark, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const handleToggleItem = (label: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <>
      <Toolbar
        sx={{
          position: "fixed",
          top: 0,
          zIndex: 1100,
          justifyContent: "space-between",
          width: "100%",
          backdropFilter: "blur(10px)",
          backgroundColor: (_) =>
            !isDark ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.2)",
        }}
      >
        {/* Logo */}
        <IconButton
          component={RouterLink}
          to="/"
          disableRipple
          sx={{ display: "flex", alignItems: "center", p: 2 }}
        >
          <Box
            component="img"
            src={IsFLogo}
            alt="Ingenjörssektionen Flemingsberg"
            sx={{ height: "8vh", width: "auto", display: "block" }}
          />
        </IconButton>

        {/* Desktop nav + theme button */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "row",
            alignItems: "center",
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
            onClick={toggleTheme}
            disableRipple
            sx={{
              transform: isDark ? "rotate(180deg)" : "none",
              transition: "transform 0.4s",
              padding: 0,
              background: "none",
            }}
          >
            <ContrastOutlined />
          </Button>
        </Box>

        {/* Mobile menu button */}
        <IconButton
          color="inherit"
          edge="end"
          sx={{ display: { xs: "flex", md: "none" } }}
          onClick={handleDrawerToggle}
        >
          <Menu />
        </IconButton>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <List sx={{ width: 250 }}>
          {navItems.map((item) => {
            const hasSubLinks = !!item.subLinks?.length;
            const isOpen = !!openItems[item.label];

            return (
              <>
                <ListItem key={item.label} disablePadding>
                  {hasSubLinks ? (
                    <ListItemButton
                      onClick={() => {
                        handleToggleItem(item.label);
                      }}
                      sx={{
                        color: isDark ? "#fff" : "#000", // ensure text is visible
                        "&:hover": {
                          backgroundColor: isDark
                            ? "rgba(255,255,255,0.1)"
                            : "rgba(0,0,0,0.05)",
                        },
                      }}
                    >
                      <ListItemText primary={`+ ${item.label}`} />
                      {isOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                  ) : (
                    <ListItemButton
                      component={RouterLink}
                      to={item.path}
                      onClick={handleDrawerToggle}
                      sx={{
                        color: isDark ? "#fff" : "#000", // ensure text is visible
                        "&:hover": {
                          backgroundColor: isDark
                            ? "rgba(255,255,255,0.1)"
                            : "rgba(0,0,0,0.05)",
                        },
                      }}
                    >
                      <ListItemText primary={item.label} />
                    </ListItemButton>
                  )}
                </ListItem>

                {hasSubLinks && (
                  <Collapse in={isOpen} timeout="auto" unmountOnExit>
                    <List disablePadding>
                      {item.subLinks!.map((sub) => (
                        <ListItem key={sub.label} disablePadding>
                          <ListItemButton
                            component={RouterLink}
                            to={sub.path}
                            onClick={handleDrawerToggle}
                            sx={{
                              color: isDark ? "#fff" : "#000", // ensure text is visible
                              backgroundColor: "rgba(0,0,0, 0.2)",
                            }}
                          >
                            <ListItemText primary={sub.label} />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                )}
              </>
            );
          })}
          <ListItem disablePadding>
            <ListItemButton
              onClick={toggleTheme}
              sx={{
                color: isDark ? "#fff" : "#000",
                "&:hover": {
                  backgroundColor: isDark
                    ? "rgba(255,255,255,0.1)"
                    : "rgba(0,0,0,0.05)",
                },
              }}
            >
              <ContrastOutlined sx={{ mr: 1 }} /> Toggle Theme
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

export default memo(HeaderComponent);
