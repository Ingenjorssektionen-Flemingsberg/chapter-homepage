import { useRoutes } from "react-router-dom";
import { routes } from "./AppRoutes";
import { NotificationProvider } from "./contexts/NotificationContext";
import { LoadingProvider } from "./contexts/LoadingContext";
import { CalendarProvider } from "./contexts/CalenderContext";
import { NewsProvider } from "./contexts/NewsContext";

function App() {
  const pages = useRoutes(routes);

  return (
    <LoadingProvider>
      <NotificationProvider>
        <CalendarProvider>
          <NewsProvider>{pages}</NewsProvider>
        </CalendarProvider>
      </NotificationProvider>
    </LoadingProvider>
  );
}

export default App;
