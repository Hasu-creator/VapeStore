// src/components/CartItem.tsx
import React from 'react';
import { Grid, Typography, IconButton } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';

interface CartItemProps {
  item: {
    id: string;
    name: string;
    price: number;
    quantity: number;
  };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  return (
    <Grid container alignItems="center" spacing={2} style={{ padding: '10px 0' }}>
      <Grid item xs={8}>
        <Typography variant="body1">{item.name}</Typography>
        <Typography variant="body2">Giá: {item.price} VNĐ</Typography>
        <Typography variant="body2">Số lượng: {item.quantity}</Typography>
      </Grid>
      <Grid item xs={4} style={{ textAlign: 'right' }}>
        <IconButton color="secondary">
          <DeleteIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default CartItem;