import { AppBar, Button, Toolbar, Typography, Container } from "@mui/material";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

// eslint-disable-next-line react/prop-types
const Header = ({ setDarkMode, darkMode }) => {
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Container style={{ background: "none", backgroundBlendMode: "screen" }}>
      <AppBar
        position="sticky"
        style={{
          background: "none",
          backgroundBlendMode: "screen",
          padding: "1rem",
          border: "none",
          boxShadow: "none",
        }}
      >
        <Toolbar style={{ background: "none", backgroundBlendMode: "screen" }}>
          <Typography
            variant="h5"
            component="h1"
            flexGrow="1"
            style={{ background: "none" }}
            fontWeight="500"
          >
            JM Blog
          </Typography>
          <Button
            className="custom-btn"
            onClick={toggleTheme}
            style={{
              color: "#f1f2f3",
              border: "none",
              backgroundColor: "##272727",
              boxShadow: "none",
            }}
          >
            {darkMode ? <WbSunnyIcon /> : <BedtimeIcon />}
          </Button>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Header;
