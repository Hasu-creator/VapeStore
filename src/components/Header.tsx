// src/components/Header.tsx
import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Box, 
  Button, 
  IconButton, 
  TextField, 
  Tooltip,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemText,
  createTheme,
  ThemeProvider,
  Grid
} from '@mui/material';
import { 
  Person as ProfileIcon, 
  ShoppingCart as CartIcon, 
  Search as SearchIcon, 
  Close as CloseIcon,
  MenuOpen as MenuIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../hooks/useSearch';
import LoginModal from './LoginModal';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000',
      paper: '#1a1a1a'
    },
    primary: {
      main: '#fff'
    }
  }
});

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { searchProducts } = useSearch();

  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);

  const handleOpenLoginModal = () => {
    setOpenLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setOpenLoginModal(false);
  };

  const menuItems = [
    { name: 'Trang chủ', path: '/' },
    { name: 'Sản phẩm', path: '/Sản phẩm' },
    { name: 'Về chúng tôi', path: '/Về chúng tôi' },
    { name: 'Tin tức', path: '/Tin tức' },
    { name: 'Liên hệ', path: '/Liên hệ' }
  ];

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    searchProducts(searchQuery);
    setShowSearch(false);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="sticky" sx={{ backgroundColor: 'black', color: 'white' }}>
        <Toolbar>
          <Grid container alignItems="center" justifyContent="space-between" spacing={2}>
            {/* Mobile Menu Toggle */}
            <Grid item xs={2} sx={{ display: { xs: 'block', md: 'none' } }}>
              <IconButton color="inherit" onClick={() => setOpenMobileMenu(true)}>
                <MenuIcon />
              </IconButton>
            </Grid>

            {/* Logo */}
            <Grid item xs={4} md={2} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <Box 
                component="img" 
                src="https://i.imgur.com/QxF5uwp.png" 
                alt="Logo"
                sx={{ height: 40, cursor: 'pointer' }}
                onClick={() => navigate('/')}
              />
            </Grid>

            {/* Desktop Menu */}
            <Grid item md={4} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
              {menuItems.map((item) => (
                <Button 
                  key={item.name} 
                  color="inherit" 
                  onClick={() => navigate(item.path)}
                  sx={{ mx: 1, whiteSpace: 'nowrap', '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }}}
                >
                  {item.name}
                </Button>
              ))}
            </Grid>

            {/* Search & Actions */}
            <Grid item xs={6} md={4} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              {/* Search */}
              {showSearch && (
                <Box sx={{ mr: 1 }}>
                  <form onSubmit={handleSearchSubmit}>
                    <TextField
                      variant="outlined"
                      size="small"
                      placeholder="Tìm kiếm..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      sx={{ 
                        backgroundColor: '#1a1a1a',
                        borderRadius: 1,
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: 'rgba(255,255,255,0 .3)'
                          }
                        }
                      }}
                    />
                  </form>
                </Box>
              )}

              {/* Action Buttons */}
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Tooltip title="Tìm kiếm">
                  <IconButton color="inherit" onClick={() => setShowSearch(!showSearch)}>
                    {showSearch ? <CloseIcon /> : <SearchIcon />}
                  </IconButton>
                </Tooltip>

                <Tooltip title="Giỏ hàng">
                  <IconButton color="inherit" onClick={() => navigate('/cart')}>
                    <Badge badgeContent={4} color="error">
                      <CartIcon />
                    </Badge>
                  </IconButton>
                </Tooltip>

                <Tooltip title="Tài khoản">
                  <IconButton color="inherit" onClick={handleOpenLoginModal}>
                    <ProfileIcon />
                  </IconButton>
                </Tooltip>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>

        {/* Mobile Menu Drawer */}
        <Drawer anchor="left" open={openMobileMenu} onClose={() => setOpenMobileMenu(false)}>
          <Box sx={{ width: 250 }}>
            <List>
              {menuItems.map((item) => (
                <ListItem 
                  key={item.name}
                  onClick={() => {
                    navigate(item.path);
                    setOpenMobileMenu(false);
                  }}
                >
                  <ListItemText 
                    primary={item.name} 
                    primaryTypographyProps={{ style: { whiteSpace: 'nowrap' } }} 
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </AppBar>
      <LoginModal open={openLoginModal} onClose={handleCloseLoginModal} />
    </ThemeProvider>
  );
};

export default Header;