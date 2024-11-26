import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#f4f6f8", 
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    button: {
      textTransform: "none",
    },
  },
});

export default theme;