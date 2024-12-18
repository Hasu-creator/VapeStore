// src/components/Cart.tsx
import React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  List, 
  ListItem, 
  ListItemText, 
  IconButton 
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCart } from '../contexts/CartContext';

const Cart: React.FC = () => {
  const { cart, cartTotal, clearCart, removeFromCart } = useCart();

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Giỏ hàng
      </Typography>
      {cart.length === 0 ? (
        <Typography variant="body1">Giỏ hàng trống</Typography>
      ) : (
        <>
          <List>
            {cart.map(item => (
              <ListItem 
                key={item.id}
                secondaryAction={
                  <IconButton 
                    edge="end" 
                    aria-label="delete"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemText 
                  primary={`${item.name}`}
                  secondary={`${item.price.toLocaleString('vi-VN', {
                    style: 'currency',
                    currency: 'VND'
                  })} x ${item.quantity}`}
                />
              </ListItem>
            ))}
          </List>
          
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            mt: 2 
          }}>
            <Typography variant="h6">
              Tổng: {cartTotal.toLocaleString('vi-VN', {
                style: 'currency',
                currency: 'VND'
              })}
            </Typography>
            
            <Button 
              variant="contained" 
              color="secondary" 
              onClick={clearCart}
            >
              Xóa giỏ hàng
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Cart;