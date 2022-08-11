import React, { useState, useEffect } from "react";
import "./styles/cart.css";
import { Container, Grid, CardContent, Box, Card, CardMedia, IconButton, Typography, Button, Dialog, DialogContent, DialogContentText } from "@mui/material";
import axios from 'axios';

const API = axios.create( { baseURL: 'http://localhost:5000' });

const Cart = ({ cart, setCart, handleChange, balance }) => {
  const [price, setPrice] = useState(0);

  const [success, setSuccess] = useState(false);

    const handleClose = () => {
      setSuccess(false);
      window.history.replaceState({}, document.title, "/" + "rewards");
      window.location.reload(false);
  };

  const clearCart = () => {
    setCart([]);
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  const checkoutCart = async () => {
    let data = {
      email : JSON.parse(localStorage.getItem('profile')).user.email,
      points : balance - price
    }
    const res = await API.put('/users/updatePoints', data);
    setSuccess(true);
  }

  return (
    <Container sx={{ m: 3, p: 2 }} maxWidth="l">
      <Button onClick={clearCart} sx={{p:2}}>Clear Cart</Button>
    <Grid
    container spacing={2}>
      {cart.map((item) => (
        <Grid item xs={5}>
        <Card sx={{ display: 'flex', m: 3, p:3 }}>
      <CardMedia
        component="img"
        sx={{ width: 75, height: 75 }}
        image={item.img}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          {item.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          Points per Item: {item.price}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous" onClick={() => handleChange(item, 1)}>
           +
          </IconButton>
          <IconButton aria-label="play/pause">
          {item.amount}
          </IconButton>
          <IconButton aria-label="next" onClick={() => handleChange(item, -1)}>
            -
          </IconButton>
        </Box>
      </Box>
      
    </Card>
        </Grid>
      ))}
    </Grid>
    <Box className="total" sx={{p:3}}>
        <span>Total Points Used: </span>
        <span>{price} pt</span>
        {price > balance ? <span>Insufficient Points</span> : <Button onClick={checkoutCart} sx={{p:2}} disabled={ price == 0} >Checkout</Button>}
        {/* <Button onClick={clearCart} sx={{p:2}} disabled={ price > balance}>Checkout</Button> */}
    </Box>
    <Dialog
          open={success}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          >
          <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Your purchase is successfull
              </DialogContentText>
              <DialogContentText id="alert-dialog-description">
              {price} have been deducted from your account
              </DialogContentText>

          </DialogContent>
                
      </Dialog>
    </Container>
  );
};

export default Cart;
