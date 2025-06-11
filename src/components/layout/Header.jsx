import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Container,
  IconButton,
} from "@mui/material";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { Link } from "react-router-dom";

const Header = ({ isDark, toggleTheme }) => {
  return (
    <AppBar
      position="sticky"
      sx={{
        p: "5px",
        boxShadow: "none",
        background: "transparent",
        backdropFilter: "blur(8px)",
        backgroundColor: isDark
          ? "rgba(0, 0, 0, 0.7)"
          : "rgba(255, 255, 255, 0.7)",
      }}
    >
      <Toolbar>
        <Container maxWidth="lg" sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h5" component="h1" flexGrow={1} fontWeight="500">
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              JM Blog
            </Link>
          </Typography>

          <IconButton
            onClick={toggleTheme}
            color="inherit"
            aria-label="toggle theme"
            sx={{
              "&:hover": {
                backgroundColor: isDark
                  ? "rgba(144, 202, 249, 0.08)"
                  : "rgba(25, 118, 210, 0.08)",
              },
            }}
          >
            {isDark ? (
              <WbSunnyIcon sx={{ color: "#ffb74d" }} />
            ) : (
              <BedtimeIcon sx={{ color: "#5c6bc0" }} />
            )}
          </IconButton>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
