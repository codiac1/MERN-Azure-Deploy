// src/components/Footer.js
import React from "react";
import { Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{ bgcolor: "background.paper" }}
      className="footer"
      component="footer"
    >
      <p style={{ textAlign: "center", color: "#666" }}>
        &copy; 2024 My E-commerce Site. All rights reserved.
      </p>
    </Box>
  );
};

export default Footer;
