import React, { useState } from "react";
import ProductList from "./ProductList";
import ProductForm from "./ProductForm";
import { Button, Container, TextField, Grid } from "@mui/material";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  //handles the logic to show the add product form
  const handleAddProductClick = () => {
    setShowForm(!showForm);
  };

  //handles the logic to close the add product form
  const handleFormClose = () => {
    setShowForm(false);
  };

  return (
    <Container>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justify="space-between"
        style={{ marginBottom: "20px" }}
      >
        <Grid item xs={10.5}>
          <TextField
            fullWidth
            label="Search Products"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </Grid>

        <Grid item xs={1.5} style={{ textAlign: "right" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddProductClick}
          >
            {showForm ? "Close Form" : "Add Product"}
          </Button>
        </Grid>
      </Grid>
      {showForm && <ProductForm onFormClose={handleFormClose} />}
      <ProductList searchTerm={searchTerm} />
    </Container>
  );
};

export default Home;
