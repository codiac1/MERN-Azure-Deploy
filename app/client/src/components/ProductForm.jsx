// src/components/ProductForm.jsx
import React, { useState } from "react";
import { Base_URL } from ".././config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Container, Grid, Paper } from "@mui/material";
import { useProducts } from "../context/ProductContext";

const ProductForm = ({ onFormClose }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();
  const { addProduct } = useProducts();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newProduct = { name, description, price, imageUrl };
      const res = await axios.post(`${Base_URL}/api/products`, newProduct);
      setName("");
      setDescription("");
      setPrice("");
      setImageUrl("");
      navigate("/");
      onFormClose();
      addProduct(res.data);
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Error adding product.");
    }
  };

  return (
    <Container>
      <Paper style={{ padding: "16px", marginBottom: "20px" }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="number"
                label="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Image URL"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Add Product
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default ProductForm;
