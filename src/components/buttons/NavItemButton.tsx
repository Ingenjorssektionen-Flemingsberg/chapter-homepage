// src/components/NavItemButton.tsx

import { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import type { NavItem } from "../../config/navConfig";

interface NavItemButtonProps {
  item: NavItem;
}

const NavItemButton: React.FC<NavItemButtonProps> = ({ item }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const hasSubLinks = !!item.subLinks?.length;

  const open = Boolean(anchorEl);

  const handleClickMain = () => {
    navigate(item.path);
  };

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    if (!hasSubLinks) return;
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    if (!hasSubLinks) return;
    setAnchorEl(null);
  };

  const handleMenuItemClick = (path: string) => {
    navigate(path);
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        disableRipple
        onClick={handleClickMain}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={hasSubLinks ? undefined : handleMouseLeave}
        sx={{
          textTransform: "uppercase",
          color: "white",
          letterSpacing: "0.1em",
          fontFamily: "'Open Sans', sans-serif",
          fontSize: "0.85em",

          // 🔥 only super buttons get borders + rounded style
          borderRadius: item.superButton ? "20px" : 0,
          border: item.superButton ? "3px solid white" : "none",
          px: item.superButton ? 2.5 : 1,
          py: item.superButton ? 0.7 : 0.5,

          mx: 0.5,
        }}
      >
        {item.label}
      </Button>

      {hasSubLinks && (
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={() => setAnchorEl(null)}
          MenuListProps={{
            onMouseLeave: handleMouseLeave,
            sx: {
              backgroundColor: "rgba(0,0,0,0.9)",
              color: "white",
            },
          }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          {item.subLinks!.map((sub) => (
            <MenuItem
              key={sub.path}
              onClick={() => handleMenuItemClick(sub.path)}
              sx={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "0.85em",
                textTransform: "uppercase",
              }}
            >
              {sub.label}
            </MenuItem>
          ))}
        </Menu>
      )}
    </>
  );
};

export default NavItemButton;
