import { Box, Grid, Stack, TextField, Typography } from "@mui/material";

type InputField = {
  label: string;
  size: number;
  type: "number" | "text" | "date";
};

type Section = {
  title: string;
  fields: InputField[];
};

type FormProps = {
  handleChange: (key: string, value: string) => void;
  formData: Record<string, string | number | Date>;
};

export default function Form({ handleChange, formData }: FormProps) {
  const sections: Section[] = [
    {
      title: "Client Information",
      fields: [
        { label: "Name", size: 12, type: "text" },
        { label: "Address", size: 12, type: "text" },
        { label: "City", size: 6, type: "text" },
        { label: "Postcode", size: 6, type: "text" },
        { label: "Driving License Number", size: 6, type: "text" },
        { label: "Licensing Agency", size: 6, type: "text" },
        { label: "Date of Birth", size: 6, type: "date" },
        { label: "Expiry Date", size: 6, type: "date" },
      ],
    },
    {
      title: "Vehicle Information",
      fields: [
        { label: "Make", size: 4, type: "text" },
        { label: "Model", size: 4, type: "text" },
        { label: "VRM", size: 4, type: "text" },
        { label: "Insurance Number", size: 6, type: "text" },
        { label: "Plate Number", size: 6, type: "text" },
      ],
    },
    {
      title: "Invoice Information",
      fields: [
        { label: "Weekly Rent", size: 6, type: "number" },
        { label: "No. of Days", size: 6, type: "number" },
        { label: "Invoice Date", size: 6, type: "date" },
        { label: "Hire Start Date", size: 6, type: "date" },
      ],
    },
  ];

  return (
    <Stack
      direction="column"
      p={2}
      spacing={1}
      sx={{ maxHeight: "100%", overflow: "auto" }}
    >
      {sections.map(({ title, fields }) => (
        <Box key={title}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", marginBottom: 1 }}
            gutterBottom
          >
            {title}
          </Typography>
          <Grid container spacing={2} px={1}>
            {fields.map(({ label, size, type }) => {
              return (
                <Grid size={size}>
                  <TextField
                    type={type}
                    label={label}
                    size="small"
                    sx={{ width: "100%" }}
                    focused={type === "date"}
                    value={formData[label]?.toString() || ""}
                    onChange={(e) => handleChange(label, e.target.value)}
                    slotProps={{
                      htmlInput: {
                        step:
                          type === "number" && label === "Weekly Rent"
                            ? 0.01
                            : 1,
                      },
                    }}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      ))}
    </Stack>
  );
}
