import { AppBar, Button, Toolbar, Typography, Container } from "@mui/material";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const Header = ({ setDarkMode, darkMode }) => {
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <AppBar position="sticky" sx={{ p: "5px", boxShadow: "none" }}>
      <Toolbar>
        <Container maxWidth="lg" sx={{ display: "flex" }}>
          <Typography
            variant="h5"
            component="h1"
            flexGrow="1"
            style={{ background: "none" }}
            fontWeight="500"
          >
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              JM Blog
            </Link>
          </Typography>
          <Button
            className="custom-btn"
            onClick={toggleTheme}
            sx={{
              color: `${darkMode ? "#f1f2f3" : "#272727"}`,
              border: "none",
            }}
          >
            {darkMode ? <WbSunnyIcon /> : <BedtimeIcon />}
          </Button>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
