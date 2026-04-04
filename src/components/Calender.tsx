import { useMemo } from "react";
import { Typography, Box, IconButton, Tooltip } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useCalendar } from "../contexts/CalenderContext";

function startOfLocalDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function formatLocalDateKey(date: Date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function getPaddedMonthGrid(date: Date) {
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Convert JS Sunday=0 → Monday=0
  const mondayIndex = (firstOfMonth.getDay() + 6) % 7;

  const cells: (Date | null)[] = [];

  // Leading padding
  for (let i = 0; i < mondayIndex; i++) {
    cells.push(null);
  }

  // Month days (local midnight!)
  for (let day = 1; day <= daysInMonth; day++) {
    cells.push(new Date(year, month, day));
  }

  // Always fill 5 weeks minimum (35 cells)
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

  const eventsByDate = useMemo(() => {
    const map: Record<string, any[]> = {};

    for (const ev of events) {
      const startRaw = ev.start?.dateTime || ev.start?.date;
      const endRaw = ev.end?.dateTime || ev.end?.date;
      if (!startRaw) continue;

      const isAllDay = !!ev.start?.date && !ev.start?.dateTime;

      let current = startOfLocalDay(new Date(startRaw));
      const last = startOfLocalDay(new Date(endRaw || startRaw));

      // Google all-day events use exclusive end
      if (isAllDay) {
        last.setDate(last.getDate() - 1);
      }

      const startTime = getHoursMinutes(startRaw);
      const endTime = startTime !== "All day" ? getHoursMinutes(endRaw) : "";

      while (current <= last) {
        const key = formatLocalDateKey(current);

        if (!map[key]) map[key] = [];
        map[key].push({ startTime, endTime, ev });

        current = new Date(
          current.getFullYear(),
          current.getMonth(),
          current.getDate() + 1,
        );
      }
    }

    return map;
  }, [events]);

  const weekdayLabels = ["Mån", "Tis", "Ons", "Tors", "Fre", "Lör", "Sön"];

  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          maxWidth: 950,
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
          const key = date ? formatLocalDateKey(date) : `empty-${index}`;
          const todayKey = formatLocalDateKey(new Date());
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
                        color: "#BBB",
                        fontFamily: "'Times new roman', sans-serif",
                        fontSize: "0.8em",
                        textAlign: "right",
                      }}
                    >
                      {key.slice(8, 10).replace(/^0/, "")}
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
    </>
  );
}
