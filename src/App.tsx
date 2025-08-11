import { Container, Grid, Stack, Toolbar } from "@mui/material";
import TopNav from "./components/TopNav";
import Form from "./components/Form";

export default function App() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack direction="column" height="100%" my={1}>
        <TopNav />
        <Toolbar />
        <Grid container spacing={4} sx={{ height: "calc(100vh - 5rem)" }}>
          <Grid size={6} sx={{ border: "1px solid black", height: "100%" }}>
            <Form />
          </Grid>
          <Grid
            size={6}
            sx={{ border: "1px solid black", height: "100%" }}
          ></Grid>
        </Grid>
      </Stack>
    </Container>
  );
}
