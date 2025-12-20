import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { type NavItem } from "../../config/navConfig";
import { useNavigate } from "react-router-dom";

interface NavSidebarProps {
  item: NavItem;
}

const NavSidebar: React.FC<NavSidebarProps> = ({ item }) => {
  const hasSubLinks = !!item.subLinks;
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        flexDirection: "column",
        alignItems: "left",
        maxWidth: "15vw",
      }}
    >
      <Typography
        variant="h5"
        textTransform="uppercase"
        fontFamily="'Open Sans', sans-serif"
        letterSpacing="0.05em"
      >
        {item.label}
      </Typography>
      {hasSubLinks && (
        <List dense sx={{ py: 1 }}>
          {item.subLinks!.map((sub) => (
            <ListItemButton
              key={sub.path}
              onClick={() => navigate(sub.path)}
              sx={{
                px: 0,
                py: 0.1,
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <ListItemText
                primary={sub.label}
                slotProps={{
                  primary: {
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "0.9em",
                    fontWeight: 400,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: globalThis.location.pathname.endsWith(sub.path)
                      ? "textSecondary"
                      : "#666",
                  },
                }}
              />
            </ListItemButton>
          ))}
        </List>
      )}
    </Box>
  );
};

export default NavSidebar;
