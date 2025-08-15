import { Box, Grid, Stack, TextField, Typography, Button } from "@mui/material";
import { useState } from "react";

type InputField = {
  label: string;
  size: number;
  type: "number" | "text" | "date";
  defaultValue?: string | number | Date;
};

type Section = {
  title: string;
  formType: "client" | "invoice" | "vehicle";
  fields: InputField[];
};

type FormProps = {
  onGenerate: (formData: {
    client: Record<string, string | number | Date>;
    invoice: Record<string, string | number | Date>;
    vehicle: Record<string, string | number | Date>;
  }) => void;
};

export default function Form({ onGenerate }: FormProps) {
  const initialState: Record<string, string | number | Date> = {};
  const [clientForm, setClientForm] = useState(initialState);
  const [invoiceForm, setInvoiceForm] = useState(initialState);
  const [vehicleForm, setVehicleForm] = useState(initialState);

  const handleFormChange = (
    formType: "client" | "invoice" | "vehicle",
    key: string,
    value: string,
  ) => {
    let currentForm, setCurrentForm;

    switch (formType) {
      case "client":
        currentForm = clientForm;
        setCurrentForm = setClientForm;
        break;
      case "invoice":
        currentForm = invoiceForm;
        setCurrentForm = setInvoiceForm;
        break;
      case "vehicle":
        currentForm = vehicleForm;
        setCurrentForm = setVehicleForm;
        break;
      default:
        return;
    }

    const newFormData = {
      ...currentForm,
      [key]: value,
    };

    // Handle bidirectional calculation between days and hire start date
    // (only for forms that have these fields)
    if (formType === "client" || formType === "invoice") {
      if (key === "No. of Days" && value) {
        const days = parseInt(value);
        if (!isNaN(days)) {
          const today = new Date();
          const hireDate = new Date(today);
          hireDate.setDate(today.getDate() + days);
          const formattedDate = hireDate.toISOString().split("T")[0];
          newFormData["Hire Start Date"] = formattedDate;
        }
      } else if (key === "Hire Start Date" && value) {
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
    }

    setCurrentForm(newFormData);
  };

  const handleGenerate = () => {
    onGenerate({
      client: clientForm,
      invoice: invoiceForm,
      vehicle: vehicleForm,
    });
  };

  const formData = {
    client: clientForm,
    invoice: invoiceForm,
    vehicle: vehicleForm,
  };
  const sections: Section[] = [
    {
      title: "Client Information",
      formType: "client",
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
      formType: "vehicle",
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
      formType: "invoice",
      fields: [
        { label: "Weekly Rent", size: 6, type: "number" },
        { label: "No. of Days", size: 6, type: "number" },
        {
          label: "Invoice Date",
          size: 6,
          type: "date",
          defaultValue: new Date().toISOString().split("T")[0],
        },
        {
          label: "Hire Start Date",
          size: 6,
          type: "date",
          defaultValue: new Date().toISOString().split("T")[0],
        },
      ],
    },
  ];

  return (
    <Stack direction="column" height="100%">
      <Stack
        direction="column"
        p={2}
        spacing={1}
        sx={{ flex: 1, overflow: "auto" }}
      >
        {sections.map(({ title, formType, fields }) => (
          <Box key={title}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", marginBottom: 1 }}
              gutterBottom
            >
              {title}
            </Typography>
            <Grid container spacing={2} px={1}>
              {fields.map(({ label, size, type, defaultValue }) => {
                const value =
                  formData[formType][label]?.toString() ||
                  (defaultValue !== undefined ? defaultValue.toString() : "");

                return (
                  <Grid key={label} size={size}>
                    <TextField
                      type={type}
                      label={label}
                      size="small"
                      sx={{ width: "100%" }}
                      focused={type === "date"}
                      value={value}
                      onChange={(e) =>
                        handleFormChange(formType, label, e.target.value)
                      }
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
      <Box sx={{ p: 2, borderTop: "1px solid #e0e0e0" }}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleGenerate}
          sx={{ py: 1.5 }}
        >
          Generate Invoice
        </Button>
      </Box>
    </Stack>
  );
}
