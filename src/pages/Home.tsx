import { Container } from "@mui/material";
import banner from "../assets/banner.jpg"; // adjust path if needed
import HeroBanner from "../components/HeroBanner";

export default function Home() {
  return (
    <Container
      disableGutters
      sx={{
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <HeroBanner
        image={banner}
        subtitle="Välkommen till"
        title={
          <>
            INGENJÖRSSEKTIONEN <br /> FLEMINGSBERG
          </>
        }
      />
    </Container>
  );
}
