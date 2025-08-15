import { Box, Container, Grid, Stack, Toolbar } from "@mui/material";
import TopNav from "./components/TopNav";
import Form from "./components/Form";
import { useState } from "react";
import Invoice from "./components/Invoice";

export default function App() {
  const initialState: Record<string, string | number | Date> = {};

  // Applied form states (for invoice generation only)
  const [appliedFormData, setAppliedFormData] = useState({
    client: initialState,
    invoice: initialState,
    vehicle: initialState,
  });

  const handleGenerateInvoice = (formData: {
    client: Record<string, string | number | Date>;
    invoice: Record<string, string | number | Date>;
    vehicle: Record<string, string | number | Date>;
  }) => {
    setAppliedFormData(formData);
  };

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
            <Form onGenerate={handleGenerateInvoice} />
          </Grid>
          <Grid size={6} sx={{ border: "1px solid black", height: "100%" }}>
            <Box id="invoice-container">
              <Invoice formData={appliedFormData} />
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
}
