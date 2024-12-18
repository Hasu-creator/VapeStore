// ProductPage.tsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Grid, Card, CardMedia, CardContent, Typography, Button, FormControl, InputLabel, Select, MenuItem, Container, SelectChangeEvent } from '@mui/material';

interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
  image?: string;
  category?: string;
  brand?: string;
}

const ProductPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [category, setCategory] = useState<string>('all');

  const sampleProducts: Product[] = [
    {
      id: '1',
      name: 'Sản phẩm 1',
      image: 'https://i.imgur.com/8KYzJP0.png',
      price: 100000,
      category: 'category1'
    },
    {
      id: '2',
      name: 'Sản phẩm 2',
      image: 'https://i.imgur.com/faAYOkQ.png',
      price: 200000,
      category: 'category2'
    },
    {
      id: '3',
      name: 'Sản phẩm 3',
      image: 'https://i.imgur.com/98jaRdF.png',
      price: 150000,
      category: 'category1'
    },
    {
      id: '4',
      name: 'Sản phẩm 4',
      image: 'https://i.imgur.com/DKqxxq5.png',
      price: 300000,
      category: 'category2'
    }
  ];

  useEffect(() => {
    const currentProduct = sampleProducts.find((p) => p.id === productId);
    setProduct(currentProduct || null);
  }, [productId]);

  const handleCategoryChange = (event: SelectChangeEvent<string>) => {
    setCategory(event.target.value);
  };

  const filteredProducts = category === 'all' ? sampleProducts : sampleProducts.filter((p) => p.category === category);
  return (
    <Box>
      <Container maxWidth="lg" sx={{ marginTop: 4, marginBottom: 4 }}>
        {product && (
          <Box>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'
                  }}
                >
                  <CardMedia
                    component="img"
                    height="400"
                    image={product.image}
                    alt={product.name}
                  />
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box>
                  <Typography variant="h4">{product.name}</Typography>
                  <Typography variant="h5" color="primary">
                    {product.price.toLocaleString('vi-VN', {
                      style: 'currency',
                      currency: 'VND'
                    })}
                  </Typography>
                  <Box sx={{ marginTop: 2 }}>
                    <Button variant="contained" color="primary">
                      Thêm vào giỏ
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        )}

        <Box sx={{ marginTop: 4 }}>
        <FormControl>
          <InputLabel id="category-select-label">Danh mục</InputLabel>
          <Select
            labelId="category-select-label"
            id="category-select"
            value={category}
            onChange={handleCategoryChange}
          >
            <MenuItem value="all">Tất cả</MenuItem>
            <MenuItem value="category1">Danh mục 1</MenuItem>
            <MenuItem value="category2">Danh mục 2</MenuItem>
          </Select>
        </FormControl>

          <Grid container spacing={2}>
            {filteredProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'
                  }}
                  onClick={() => navigate(`/products/${product.id}`)}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={
                      Array.isArray(product.image) 
                        ? product.image[0] 
                        : product.image || '/default-image.png'
                    }
                    alt={product.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.price.toLocaleString('vi-VN', {
                        style: 'currency',
                        currency: 'VND'
                      })}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ProductPage;
