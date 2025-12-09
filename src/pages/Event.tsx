import { Container } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import event from "../assets/event.png";
import Calendar from "../components/Calender";

export default function Event() {
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
      <Calendar />
    </Container>
  );
}
