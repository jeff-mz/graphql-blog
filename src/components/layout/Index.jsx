import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, CssBaseline } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";

const Index = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Create theme with dark/light mode
  const theme = createTheme({
    typography: {
      fontFamily: `"Rubik", sans-serif, Arial, Helvetica`,
    },
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? "#252525" : "#f1f2f3",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Ensures consistent baseline styles */}
      <Box sx={{ flexGrow: 1, minWidth: "360px" }}>
        {/* Header */}
        <Header setDarkMode={setDarkMode} darkMode={darkMode} />

        {/* Main content */}
        {/* <HomePage /> */}
        {children}

        {/* Footer */}
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Index;
