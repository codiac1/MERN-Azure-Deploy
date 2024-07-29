import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    clearCart();
    navigate("/confirmation");
  };

  if (cartItems.length === 0)
    return <Typography variant="h5">Your cart is empty</Typography>;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>
      <Grid container spacing={4}>
        {cartItems.map((item) => (
          <Grid item xs={12} md={6} key={item._id}>
            <Card>
              <CardMedia
                component="img"
                alt={item.name}
                height="160"
                image={item.imageUrl}
                title={item.name}
              />
              <CardContent>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="body2">{item.description}</Typography>
                <Typography variant="h5">&#x20b9; {item.price}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "20px" }}
        onClick={handleCheckout}
      >
        Proceed to Checkout
      </Button>
    </Container>
  );
};

export default Cart;
