import React from "react";
import list from "./data";
import { Container, Grid, CardContent, Box, Card, CardMedia, Typography } from "@mui/material";
import { Button } from "semantic-ui-react";

const Shop = ({ handleClick }) => {
  return (
    <Container>
      <Grid
        container spacing={2}>
      {list.map((item) => (
        <Grid item xs={6}>
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
            <Button onClick={() => handleClick(item)}> Add to Cart</Button>
          </Box>
        </Box>
        
      </Card>
      </Grid>
      ))}
      </Grid>
    </Container>
  );
};

export default Shop;
