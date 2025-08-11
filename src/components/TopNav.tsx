import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
import { CurrencyPound } from "@mui/icons-material";

export default function TopNav() {
  return (
    <AppBar position="fixed">
      <Toolbar
        sx={{ backgroundColor: "#FFFFFF", justifyContent: "space-between" }}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          <CurrencyPound fontSize="large" sx={{ color: "#000000" }} />
          <Typography
            variant="h4"
            align="center"
            sx={{
              fontWeight: "700",
              color: "#000000",
              fontStyle: "bold",
              fontSize: "32px",
            }}
          >
            Invoice Generator
          </Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
