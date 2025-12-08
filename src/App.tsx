import { useRoutes } from "react-router-dom";
import { routes } from "./AppRoutes";
import { NotificationProvider } from "./contexts/NotificationContext";
import { LoadingProvider } from "./contexts/LoadingContext";
import { CalendarProvider } from "./contexts/CalenderContext";

function App() {
  const pages = useRoutes(routes);

  return (
    <LoadingProvider>
      <NotificationProvider>
        <CalendarProvider>{pages}</CalendarProvider>
      </NotificationProvider>
    </LoadingProvider>
  );
}

export default App;
