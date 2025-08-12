import { Container, Grid, Stack, Toolbar } from "@mui/material";
import TopNav from "./components/TopNav";
import Form from "./components/Form";
import { useState } from "react";

export default function App() {
  const initialState: Record<string, string | number | Date> = {};
  const [formData, setFormData] = useState(initialState);

  const handleChange = (key: string, value: string) => {
    const newFormData = {
      ...formData,
      [key]: value,
    };

    // Handle bidirectional calculation between days and hire start date
    if (key === "No. of Days" && value) {
      // Calculate hire start date from number of days
      const days = parseInt(value);
      if (!isNaN(days)) {
        const today = new Date();
        const hireDate = new Date(today);
        hireDate.setDate(today.getDate() + days);

        // Format date as YYYY-MM-DD for input field
        const formattedDate = hireDate.toISOString().split("T")[0];
        newFormData["Hire Start Date"] = formattedDate;
      }
    } else if (key === "Hire Start Date" && value) {
      // Calculate number of days from hire start date
      try {
        const hireDate = new Date(value);
        if (!isNaN(hireDate.getTime())) {
          const today = new Date();
          const diffMs = hireDate.getTime() - today.getTime();
          const days = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
          newFormData["No. of Days"] = days.toString();
        }
      } catch (error) {
        console.log(error);
      }
    }

    setFormData(newFormData);
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
            <Form handleChange={handleChange} formData={formData} />
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
