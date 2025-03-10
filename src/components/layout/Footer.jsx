// src/components/layout/Footer.js
import React from "react";
import {
  Box,
  Grid2,
  Typography,
  IconButton,
  useTheme,
  Container,
} from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

function Footer() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor:
          theme.palette.mode === "dark" ? "primary.dark" : "primary.main",
        color: theme.palette.mode === "dark" ? "text.primary" : "common.white",
        padding: 3,
        width: "100%",
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        <Grid2 container spacing={3} justifyContent="center">
          {/* Copyright Text */}
          <Grid2 xs={12} md={6}>
            <Typography variant="body1" sx={{ mb: { xs: 2, md: 0 } }}>
              © 2023 Your Company. All rights reserved.
            </Typography>
          </Grid2>

          {/* Social Media Icons */}
          <Grid2
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <IconButton
              color="inherit"
              href="https://facebook.com"
              target="_blank"
              sx={{
                color:
                  theme.palette.mode === "dark"
                    ? "text.primary"
                    : "common.white",
              }}
            >
              <Facebook />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://twitter.com"
              target="_blank"
              sx={{
                color:
                  theme.palette.mode === "dark"
                    ? "text.primary"
                    : "common.white",
              }}
            >
              <Twitter />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://instagram.com"
              target="_blank"
              sx={{
                color:
                  theme.palette.mode === "dark"
                    ? "text.primary"
                    : "common.white",
              }}
            >
              <Instagram />
            </IconButton>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}

export default Footer;
