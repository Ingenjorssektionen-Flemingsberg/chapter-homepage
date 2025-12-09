import {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
  useCallback,
} from "react";
import { getCalendarEvents } from "../services/calendarService";
import { useLoading } from "./LoadingContext";
import { useNotification } from "./NotificationContext";

interface CalendarContextType {
  currentDate: Date;
  from: string;
  to: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  events: any[];
  nextOrPrevMonth: (direction: "prev" | "next") => void;
}

const CalendarContext = createContext<CalendarContextType | undefined>(
  undefined
);

// eslint-disable-next-line react-refresh/only-export-components
export const useCalendar = () => {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error("useCalendar must be used within a CalendarProvider");
  }
  return context;
};

export const CalendarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentDate, setCurrentDate] = useState(() => {
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), 1);
  });
  const year = currentDate.getFullYear();
  const monthIndex = currentDate.getMonth();

  // derive from/to from currentDate
  const from = useMemo(
    () => new Date(year, monthIndex, 1).toISOString(),
    [year, monthIndex]
  );
  const to = useMemo(
    () => new Date(year, monthIndex + 1, 0, 23, 59, 59).toISOString(),
    [year, monthIndex]
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [events, setEvents] = useState<any[]>([]);
  const { loading } = useLoading();
  const { showNotification } = useNotification();

  const nextOrPrevMonthFunc = useCallback((direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const delta = direction === "prev" ? -1 : 1;
      return new Date(prev.getFullYear(), prev.getMonth() + delta, 1);
    });
  }, []);

  useEffect(() => {
    const fetch = async () => {
      if (!from || !to || loading) return;

      try {
        const events = await getCalendarEvents(from, to);
        setEvents(events);
      } catch (err) {
        console.error("getCalendarEvents: " + err);
        showNotification("Failed to get events", "error");
      }
    };

    fetch();
  }, [from, to, showNotification]);

  const value = useMemo<CalendarContextType>(
    () => ({
      currentDate: currentDate,
      from: from,
      to: to,
      events: events,
      nextOrPrevMonth: nextOrPrevMonthFunc,
    }),
    [currentDate, from, to, events, nextOrPrevMonthFunc]
  );

  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  );
};
