// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';
import NewsSection from './components/NewsSection';
import SupportSection from './components/SupportSection';
import ScrollToTop from './components/ScrollToTop';
import Breadcrumb from './components/Breadcrumb';
// Import Providers
import { ProductProvider } from './contexts/ProductContext';
import { CartProvider } from './contexts/CartContext';

// Import Pages
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartCheckoutPage';
import CheckoutPage from './pages/CartCheckoutPage';
import AboutUs from './components/AboutUs';
import NewsPage from './pages/NewsPage';
import ProductListPage from './pages/ProductListPage';

// Tạo theme
const theme = createTheme({
  palette: {
    mode: 'light',
    // Cấu hình màu sắc khác nếu cần
  },
});

const App: React.FC = () => {
  return (
    <ProductProvider>
      <CartProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <div className="App">
              <Header />
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/Sản phẩm" element={<ProductListPage />} />
                <Route path="/Sản phẩm/:id" element={<ProductDetailPage />} />
                <Route path="/Giỏ hàng" element={<CartPage />} />
                <Route path="/Về chúng tôi" element={<AboutUs />} />
                <Route path="/Tin tức" element={<NewsPage />} />
                <Route path="/Thanh toán" element={<CheckoutPage />} />
                <Route path="/Liên hệ" element={<SupportSection />} />
              </Routes>
            </div>
          </Router>
        </ThemeProvider>
      </CartProvider>
    </ProductProvider>
  );
};

export default App;