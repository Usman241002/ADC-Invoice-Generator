import { Container, Grid } from "@mui/material";
import TopNav from "./components/TopNav";

export default function App() {
  return (
    <Container maxWidth="xl">
      <TopNav />
      <Grid container spacing={4} mt={8} sx={{ height: "100vh" }}>
        <Grid
          size={6}
          sx={{ border: "1px solid black", height: "100%" }}
        ></Grid>
        <Grid
          size={6}
          sx={{ border: "1px solid black", height: "100%" }}
        ></Grid>
      </Grid>
    </Container>
  );
}
