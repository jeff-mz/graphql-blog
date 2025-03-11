// src/components/layout/Footer.js
import { Box, Typography, Container, Grid2, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.main",
        color: "common.white",
        padding: 2,
        width: "100%",
      }}
    >
      <Container maxWidth="lg">
        <Grid2
          container
          spacing={1}
          justifyContent={{ xs: "center", md: "space-between" }}
          flexDirection={{ xs: "column", md: "row" }}
          alignItems="center"
        >
          {/* Copyright Text */}
          <Grid2 xs={12} md={6} sx={{ textAlign: { xs: "center" } }}>
            <Typography variant="p">
              © 2023 JM Blog. All rights reserved.
            </Typography>
          </Grid2>

          {/* Social Media Icons */}
          <Grid2
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: { xs: "center" },
            }}
          >
            <IconButton
              color="inherit"
              href="https://facebook.com"
              target="_blank"
              sx={{ color: "common.white" }}
            >
              <Facebook />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://twitter.com"
              target="_blank"
              sx={{ color: "common.white" }}
            >
              <Twitter />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://instagram.com"
              target="_blank"
              sx={{ color: "common.white" }}
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
