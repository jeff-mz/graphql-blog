import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AppBar, Box, Container, CssBaseline, Toolbar } from "@mui/material";
import Header from "./components/layout/Header";
import HomePage from "./components/home/HomePage";
import Footer from "./components/layout/Footer";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Create theme with dark/light mode
  const theme = createTheme({
    typography: {
      fontFamily: `"Rubik", sans-serif, Arial, Helvetica`,
    },
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? "#272727" : "#1976d2", // Adjust primary color for dark/light mode
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Ensures consistent baseline styles */}
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh", // Full viewport height
          justifyContent: "center", // Center vertically
          alignItems: "center", // Center horizontally
        }}
      >
        {/* AppBar at the top */}
        <AppBar position="static" sx={{ width: "100%", mb: 3 }}>
          <Toolbar>
            <Header setDarkMode={setDarkMode} darkMode={darkMode} />
          </Toolbar>
        </AppBar>

        {/* Main content */}
        <Box sx={{ flexGrow: 1, width: "100%" }}>
          <HomePage />
        </Box>

        {/* Footer at the bottom */}
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default App;
