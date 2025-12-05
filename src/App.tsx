import { useRoutes } from "react-router-dom";
import { routes } from "./AppRoutes";
import { ThemeProvider } from "./contexts/ThemeContext";
import { CssBaseline } from "@mui/material";
import { NotificationProvider } from "./contexts/NotificationContext";
import { LoadingProvider } from "./contexts/LoadingContext";

function App() {
  const pages = useRoutes(routes);

  return (
    <ThemeProvider>
      <LoadingProvider>
        <NotificationProvider>
          <CssBaseline />
          {pages}
        </NotificationProvider>
      </LoadingProvider>
    </ThemeProvider>
  );
}

export default App;
