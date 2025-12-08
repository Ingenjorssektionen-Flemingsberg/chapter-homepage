import { useMemo } from "react";
import { Container, Typography, Box, IconButton, Tooltip } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import HeroBanner from "../components/HeroBanner";
import event from "../assets/event.png";
import { useCalendar } from "../contexts/CalenderContext";

function getPaddedMonthGrid(date: Date) {
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const startDay = firstOfMonth.getDay() - 1;

  const cells: (Date | null)[] = [];

  // 1. Leading empty cells
  for (let i = 0; i < startDay; i++) {
    cells.push(null);
  }

  // 2. Days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    cells.push(new Date(year, month, day));
  }

  // 3. Pad the rest to reach 35 cells
  while (cells.length < 35) {
    cells.push(null);
  }

  return cells;
}

function getHoursMinutes(dateTime: string) {
  if (!dateTime) return "";

  // Detect all-day events: pure YYYY-MM-DD string
  // (Google returns all-day dates in this exact form)
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateTime)) {
    return "All day";
  }

  const d = new Date(dateTime);

  const hours = String(d.getHours()).padStart(2, "0");
  const minutes = String(d.getMinutes()).padStart(2, "0");

  return `${hours}:${minutes}`;
}

export default function Calendar() {
  const { currentDate, events, nextOrPrevMonth } = useCalendar();
  const monthName = currentDate.toLocaleString("default", { month: "long" });
  const monthGrid = useMemo(
    () => getPaddedMonthGrid(currentDate),
    [currentDate],
  );

  // Group events by YYYY-MM-DD
  const eventsByDate = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const map: Record<string, any[]> = {};
    for (const ev of events) {
      const startRaw = ev.start?.date || ev.start?.dateTime;
      const endRaw = ev.end?.date || ev.end?.dateTime || startRaw;
      if (!startRaw) continue;

      const isAllDay = !!ev.start?.date && !ev.start?.dateTime;

      let current = new Date(startRaw);
      current.setDate(current.getDate() - 1);
      let last = new Date(endRaw);
      last.setDate(last.getDate() - 1);

      if (isAllDay) {
        // For all-day events, Google uses an *exclusive* end.date
        // e.g. start=2025-01-10, end=2025-01-12 means 10th–11th
        // So we include up to the day before `end`
        last.setDate(last.getDate() - 1);
      }

      // Safeguard: if somehow last < current, clamp
      if (last < current) {
        last = new Date(current);
      }

      const startTime = getHoursMinutes(startRaw);
      let endTime = "";
      if (startTime !== "All day") {
        endTime = getHoursMinutes(endRaw);
      }

      // Walk from current → last, inclusive
      while (current <= last) {
        const key = current.toISOString().slice(0, 10); // YYYY-MM-DD

        if (!map[key]) map[key] = [];
        map[key].push({ startTime, endTime, ev });

        current.setDate(current.getDate() + 1);
      }
    }
    return map;
  }, [events]);

  const weekdayLabels = ["Mån", "Tis", "Ons", "Tors", "Fre", "Lör", "Sön"];

  return (
    <Container
      disableGutters
      sx={{
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        top: 0,
      }}
    >
      <HeroBanner
        image={event}
        height={"50vh"}
        subtitle="Kom på våra"
        title={"Events"}
      />

      {/* Header with navigation arrows */}
      <Box
        sx={{
          display: "flex",
          width: 900,
          justifyContent: "space-between",
          mt: 5,
          mb: 2,
        }}
      >
        <IconButton
          onClick={() => {
            nextOrPrevMonth("prev");
          }}
          aria-label="Previous month"
        >
          <ChevronLeft />
        </IconButton>

        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontFamily: "'Times new roman', sans-serif",
          }}
        >
          {monthName} {currentDate.getFullYear()}
        </Typography>

        <IconButton
          onClick={() => {
            nextOrPrevMonth("next");
          }}
          aria-label="Next month"
        >
          <ChevronRight />
        </IconButton>
      </Box>

      {/* Weekdays */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 1000,
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: 0.5,
          mb: 2,
        }}
      >
        {weekdayLabels.map((label) => (
          <Box
            key={label}
            sx={{
              textAlign: "center",
              fontFamily: "'Times new roman', sans-serif",
              fontWeight: 600,
              textTransform: "uppercase",
              py: 0.5,
              color: "#999",
              fontSize: "0.8em",
            }}
          >
            {label}
          </Box>
        ))}
      </Box>

      {/* Calendar grid */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 1000,
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: 0.5,
          mb: 10,
        }}
      >
        {monthGrid.map((date, index) => {
          const key = date ? date.toISOString().slice(0, 10) : `empty-${index}`;
          const todayKey = new Date().toISOString().slice(0, 10);
          const dayEvents = date && eventsByDate[key] ? eventsByDate[key] : [];

          let opacity = 0.25;
          if (date) {
            opacity = 0.5;
            if (key === todayKey) {
              opacity = 1;
            }
          }

          // Tooltip content for this day
          const tooltipContent =
            date && dayEvents.length > 0 ? (
              <Box sx={{ p: 0.5 }}>
                {dayEvents.map(({ startTime, endTime, ev }) => (
                  <Box key={ev.id} sx={{ mb: 0.5 }}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontFamily: "'Times new roman', sans-serif",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                      }}
                    >
                      {startTime} - {endTime ? `${endTime}: ` : ""}
                      {ev.summary}
                    </Typography>

                    {ev.location && (
                      <Typography
                        variant="caption"
                        sx={{
                          display: "block",
                          fontFamily: "'Times new roman', sans-serif",
                          fontSize: "0.7rem",
                        }}
                      >
                        Plats: {ev.location}
                      </Typography>
                    )}

                    {ev.description && (
                      <Typography
                        variant="caption"
                        sx={{
                          display: "block",
                          fontFamily: "'Times new roman', sans-serif",
                          fontSize: "0.7rem",
                          mt: 0.25,
                          whiteSpace: "pre-line",
                        }}
                      >
                        {ev.description}
                      </Typography>
                    )}
                  </Box>
                ))}
              </Box>
            ) : (
              "" // no tooltip if no events
            );

          return (
            <Tooltip
              key={key}
              title={tooltipContent}
              arrow
              placement="top"
              disableHoverListener={!date || dayEvents.length === 0}
            >
              <Box
                sx={{
                  minHeight: (1000 * 0.95) / 7,
                  p: 1,
                  backgroundColor: `rgba(240, 240, 240, ${opacity})`,
                  display: "flex",
                  flexDirection: "column",
                  cursor: date && dayEvents.length ? "pointer" : "default",
                }}
              >
                {date && (
                  <>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: "#999",
                        fontFamily: "'Times new roman', sans-serif",
                        fontSize: "0.8em",
                        textAlign: "right",
                      }}
                    >
                      {date.getDate()}
                    </Typography>

                    {dayEvents.map(({ startTime, ev }) => (
                      <Typography
                        key={ev.id}
                        variant="caption"
                        sx={{
                          display: "block",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          fontFamily: "'Times new roman', sans-serif",
                          textAlign: "left",
                          opacity: 0.8,
                        }}
                      >
                        <strong>{startTime}</strong> - {ev.summary}
                      </Typography>
                    ))}
                  </>
                )}
              </Box>
            </Tooltip>
          );
        })}
      </Box>
    </Container>
  );
}
