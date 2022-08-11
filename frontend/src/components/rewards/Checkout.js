import React from 'react'
import {Button, Paper, Typography, Stack } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';




export default function Checkout({ setShow, size , balance }){
    
    
    return(
        <Paper sx={{ m: 3, p: 3 , height: 100}} elevation={3}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                <Button>
                  <ShoppingBagIcon onClick={() => setShow(true)} />
                </Button>
                <Typography variant="h6"> You have {balance} points </Typography>

             
                  <Stack direction="row" alignItems="center" spacing={2}>
                <Button>
                <AddShoppingCartIcon onClick={() => setShow(false)} />
                </Button>
                <Typography variant="h8">{size}</Typography>
                </Stack>
                
              </Stack>

            
    </Paper>
    )
}