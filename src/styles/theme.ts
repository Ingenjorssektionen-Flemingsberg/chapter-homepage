import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    onBackground: string;
    onPaper: string;
  }

  interface PaletteOptions {
    onBackground?: string;
    onPaper?: string;
  }
}

const OKRAROD = "#90302C";

// DARK THEME – warm, moody, ochre-red accent
const darkTheme = createTheme({
  typography: { fontFamily: "'Times new roman', sans-serif" },
  palette: {
    mode: "dark",
    primary: { main: OKRAROD },
    secondary: { main: "#D98A6A" },

    background: {
      default: "#120C0B",
      paper: "#1C1110",
    },

    // --------------------------
    // Custom foreground colours
    // --------------------------
    onBackground: "#222222", // soft warm ivory
    onPaper: "#F7E7E1", // slightly stronger for cards
    // --------------------------

    text: {
      primary: "#FFF5EF",
      secondary: "#E0C1B8",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          "&::-webkit-scrollbar": { width: 0, height: 0 },
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        },
        "*::-webkit-scrollbar": {
          display: "none",
          width: 0,
          height: 0,
        },
        "*": {
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        },
      },
    },

    MuiTableHead: {
      styleOverrides: {
        root: { backgroundColor: "#2A1412" },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          color: "#FFF5EF",
          fontWeight: "bold",
          backgroundColor: "#3B1614",
          borderBottom: "2px solid #5A201C",
        },
        body: { color: "#FFF5EF" },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:nth-of-type(even)": { backgroundColor: "#1E1010" },
          "&:nth-of-type(odd)": { backgroundColor: "#241212" },
          "&:hover": { backgroundColor: "#3B1614" },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "inherit",
          textDecorationColor: "inherit",
        },
      },
      defaultProps: {
        underline: "always",
      },
    },
  },
});

// LIGHT THEME – soft, creamy background with okraröd accent
const lightTheme = createTheme({
  typography: { fontFamily: "'Times new roman', sans-serif" },
  palette: {
    mode: "light",
    primary: { main: OKRAROD },
    secondary: { main: "#E79A80" },

    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },

    // --------------------------
    // Custom foreground colours
    // --------------------------
    onBackground: OKRAROD, // deep warm brown for contrast
    onPaper: "#4C1F1A", // slightly stronger for cards
    // --------------------------

    text: {
      primary: "#3A1613",
      secondary: "#6B3A34",
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          "&::-webkit-scrollbar": { width: 0, height: 0 },
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        },
        "*::-webkit-scrollbar": {
          display: "none",
          width: 0,
          height: 0,
        },
        "*": {
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        },
      },
    },

    MuiTableHead: {
      styleOverrides: {
        root: { backgroundColor: "#F6D2C9" },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          color: "#3A1613",
          fontWeight: "bold",
          backgroundColor: "#F6D2C9",
          borderBottom: "2px solid #E7B29D",
        },
        body: { color: "#3A1613" },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:nth-of-type(even)": { backgroundColor: "#FFE7DD" },
          "&:nth-of-type(odd)": { backgroundColor: "#FFF5EF" },
          "&:hover": { backgroundColor: "#F6D2C9" },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "inherit",
          textDecorationColor: "inherit",
        },
      },
      defaultProps: {
        underline: "always",
      },
    },
  },
});

export { darkTheme, lightTheme };
