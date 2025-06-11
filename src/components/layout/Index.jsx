import { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, CssBaseline } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";

const Index = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) === "dark" : false;
  });

  // set theme to local storage
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(darkMode ? "dark" : "light"));
  }, [darkMode]);

  // create theme with dark/light mode
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
  const toggleTheme = () => {
    setDarkMode((prevState) => !prevState);
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/*base style */}
      <Box sx={{ flexGrow: 1, width: "100%", minWidth: "365px" }}>
        {/* Header */}
        <Header toggleTheme={toggleTheme} isDark={darkMode} />

        {/* Main content */}
        {children}

        {/* Footer */}
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Index;
