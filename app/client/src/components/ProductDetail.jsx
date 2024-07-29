import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/CartContext";
import {
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardMedia,
} from "@mui/material";
import { Base_URL } from "../config";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(`${Base_URL}/api/products/${id}`);
      setProduct(res.data);
    };
    fetchProduct();
  }, [id]);

  if (!product)
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );

  return (
    <Container>
      <br />
      <Grid container spacing={8} paddingLeft="45px">
        <Grid item xs={10} md={4}>
          <Card>
            <CardMedia
              component="img"
              alt={product.name}
              height="350"
              image={product.imageUrl}
              title={product.name}
            />
          </Card>
        </Grid>
        <Grid item xs={8} md={4}>
          <br />
          <Typography variant="h4">{product.name}</Typography>
          <br />
          <Typography variant="body1">{product.description}</Typography>
          <br />
          <Typography variant="h5">&#x20b9; {product.price}</Typography>
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "20px" }}
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetail;
