import { Box, Grid, Stack, TextField, Typography } from "@mui/material";

export default function Form() {
  const clientInfo = [
    { label: "Name", size: 12 },
    { label: "Address", size: 12 },
    { label: "City", size: 6 },
    { label: "Postcode", size: 6 },
    { label: "Driving License Number", size: 12 },
    { label: "Date of Birth", size: 6 },
    { label: "Expiry Date", size: 6 },
  ];

  const invoiceInfo = [
    { label: "Weekly Rent", size: 4 },
    { label: "No. of Days", size: 4 },
    { label: "Hire Start Date", size: 4 },
  ];

  return (
    <Stack
      direction="column"
      p={2}
      spacing={1}
      sx={{ maxHeight: "100%", overflow: "auto" }}
    >
      <Box>
        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
          Client Information
        </Typography>
        <Grid container spacing={2} px={1}>
          {/*Add Onchange to all TextFields */}
          {clientInfo.map(({ label, size }) => (
            <Grid size={size}>
              <TextField label={label} size="small" sx={{ width: "100%" }} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box>
        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
          Invoice Information
        </Typography>
        <Grid container spacing={2} px={1}>
          {/*Add Onchange to all TextFields */}
          {invoiceInfo.map(({ label, size }) => (
            <Grid size={size}>
              <TextField label={label} size="small" sx={{ width: "100%" }} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Stack>
  );
}
