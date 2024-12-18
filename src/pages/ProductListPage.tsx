import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProductContext } from '../contexts/ProductContext';
import { Box, Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import Breadcrumb from '../components/Breadcrumb'; // Import the Breadcrumb component

const ProductListPage: React.FC = () => {
  const { products } = useProductContext();
  const navigate = useNavigate();

  return (
    <Box sx={{ padding: 2 }}>
      {/* Breadcrumb */}
      <Breadcrumb /> {/* Add the Breadcrumb component here */}

      <Typography variant="h4" component="h1" gutterBottom>
        Danh Sách Sản Phẩm
      </Typography>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card className="transition-transform transform hover:scale-105 hover:shadow-lg duration-300">
              {/* Wrap CardMedia with a Button for navigation */}
              <Button onClick={() => navigate(`/product/${product.id}`)} sx={{ padding: 0 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={typeof product.image === 'string' ? product.image : ''} // Kiểm tra kiểu dữ liệu
                  alt={product.imageAlt}
                  className="object-cover transition-opacity duration-300 hover:opacity-80"
                />
              </Button>
              <CardContent>
                <Typography variant="h5" component="div" className="font-bold">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.price} VNĐ
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductListPage;