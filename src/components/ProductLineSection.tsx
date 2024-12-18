import React, { useState } from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';

const ProductLineSection: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState(0); // Track selected product index

  const products = [
    {
      name: 'ASPIRE',
      image: 'https://i.imgur.com/5vEUSD7.png',
      title: 'FLEXUS Q',
      description: 'The FLEXUS Q is a versatile pod system that offers adjustable airflow and a range of coil options for a customized vaping experience.'
    },
    {
      name: 'UWELL',
      image: 'https://i.imgur.com/YbFdVXd.png',
      title: 'CALIBURN',
      description: 'The CALIBURN is known for its simplicity and ease of use, providing a satisfying MTL experience with a sleek design.'
    },
    {
      name: 'SMOK',
      image: 'https://i.imgur.com/blavyjF.png',
      title: 'NORD 4',
      description: 'The NORD 4 is a powerful pod system that features adjustable wattage and a large battery capacity for all-day vaping.'
    },
    {
      name: 'VLADDIN',
      image: 'https://i.imgur.com/dz1MTwL.png',
      title: 'JET',
      description: 'The JET is a compact pod system designed for ease of use, offering a rich flavor experience in a portable format.'
    }
  ];

  return (
    <Container sx={{ py: { xs: 4, md: 8 } }}>
      <Typography variant="h4" sx={{ mb: 4, textAlign: 'center', color: '#C8E7FF' }}>
        Dòng sản phẩm
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {products.map((product, index) => (
          <Grid item xs={6} sm={3} key={product.name}>
            <Box
              onClick={() => setSelectedProduct(index)}
              sx={{
                padding: 2,
                border: '1px solid #C8E7FF',
                borderRadius: 2,
                textAlign: 'center',
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: 'rgba(200, 231, 255, 0.1)',
                },
              }}
            >
              <Typography variant="h6" sx={{ color: '#C8E7FF' }}>
                {product.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Display selected product details */}
      <Grid container spacing={2} sx={{ mt: 4, alignItems: 'center' }}>
        <Grid item xs={12} md={5} sx={{ textAlign: 'center' }}>
          <img
            src={products[selectedProduct].image}
            alt={products[selectedProduct].title}
            style={{ width: '564px', height: '564px' }} // Set specific width and height
          />
        </Grid>
        <Grid item xs={12} md={7} sx={{ paddingLeft: 2 }}> {/* Add padding to the left */}
          <Typography variant="h5" sx={{ color: '#C8E7FF', mb: 2 }}>
            {products[selectedProduct].title}
          </Typography>
          <Typography variant="body1" sx={{ color: '#C8E7FF', mb: 2 }}>
            {products[selectedProduct].description}
          </Typography>
          <Button
            variant="outlined"
            sx={{
              borderColor: '#C8E7FF',
              color: '#C8E7FF',
              '&:hover': {
                backgroundColor: 'rgba(200, 231, 255, 0.1)',
              },
              px: 4,
              py: 1.5,
              fontSize: '1rem',
            }}
          >
            Xem thêm
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductLineSection;