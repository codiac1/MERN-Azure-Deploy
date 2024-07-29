import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Button } from "@mui/material";

const ConfirmationPage = () => {
  return (
    <Container style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h4" gutterBottom>
        Purchase Successful!
      </Typography>
      <Typography variant="h6" gutterBottom>
        Thank you for your purchase.
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/">
        Continue Shopping
      </Button>
    </Container>
  );
};

export default ConfirmationPage;
