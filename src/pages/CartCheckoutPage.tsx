// src/pages/CartCheckoutPage.tsx
import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import CartItem from '../components/CartItem'; // Giả sử bạn có component CartItem để hiển thị từng sản phẩm
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider,
  Card,
  CardContent,
} from '@mui/material';

const CartCheckoutPage: React.FC = () => {
  const { cart, cartTotal } = useCart(); // Lấy giỏ hàng và tổng tiền từ context
  const navigate = useNavigate(); // Khai báo biến navigate

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [paypalEmail, setPaypalEmail] = useState('');

  const handleCheckout = () => {
    // Xử lý thanh toán tại đây
    alert('Đặt hàng thành công!');
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom align="center">
        Giỏ Hàng & Thanh Toán
      </Typography>
      <div className="flex">
        {/* Bên trái: Danh sách sản phẩm */}
        <div className="w-2/3 pr-4">
          {cart.length === 0 ? (
            <div className="text-center p-4 border border-gray-300 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold">Giỏ hàng trống</h2>
              <p>Bạn chưa thêm sản phẩm nào vào giỏ hàng.</p>
            </div>
          ) : (
            <div className="bg-white shadow-md rounded-lg p-4">
              <div className="grid grid-cols-3 gap-4 border-b-2 pb-2 mb-4">
                <div className="font-bold text-lg">Sản Phẩm</div>
                <div className="font-bold text-lg">Giá</div>
                <div className="font-bold text-lg">Số Lượng</div>
              </div>
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>

        {/* Bên phải: Thông tin thanh toán */}
        <div className="w-1/3 pl-4">
          <Card>
            <CardContent>
              <Typography variant="h6">Thông Tin Giao Hàng</Typography>
              <TextField
                label="Họ và Tên"
                fullWidth
                margin="normal"
                value={name}
                onChange={(e) => setName(e.target.value)}
                variant="outlined"
              />
              <TextField
                label="Địa Chỉ"
                fullWidth
                margin="normal"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                variant="outlined"
              />
              <FormControl fullWidth margin="normal" variant="outlined">
                <InputLabel>Phương Thức Thanh Toán</InputLabel>
                <Select
                  value={paymentMethod}
                  onChange={(e) => {
                    setPaymentMethod(e.target.value);
                    // Reset các trường thông tin thẻ khi thay đổi phương thức thanh toán
                    setCardNumber('');
                    setExpiryDate('');
                    setCvv('');
                    setPaypalEmail('');
                  }}
                >
                  <MenuItem value="credit_card">Thẻ Tín Dụng</MenuItem>
                  <MenuItem value="paypal">PayPal</MenuItem>
                  <MenuItem value="cash_on_delivery">Thanh Toán Khi Nhận Hàng</MenuItem>
                </Select>
              </FormControl>

              {/* Hiển thị thông tin thẻ tín dụng nếu phương thức thanh toán là thẻ tín dụng */}
              {paymentMethod === 'credit_card' && (
                <>
                  <TextField
                    label="Số Thẻ Tín Dụng"
                    fullWidth
                    margin="normal"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    variant="outlined"
                  />
                  <TextField
                    label="Ngày Hết Hạn (MM/YY)"
                    fullWidth
                    margin="normal"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    variant="outlined"
                  />
                  <TextField
                    label="CVV"
                    fullWidth
                    margin="normal"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    variant="outlined"
                  />
                </>
              )}

              {/* Hiển thị thông tin tài khoản PayPal nếu phương thức thanh toán là PayPal */}
              {paymentMethod === 'paypal' && (
                <TextField
                  label="Email PayPal"
                  fullWidth
                  margin="normal"
                  value={paypalEmail}
                  onChange={(e) => setPaypalEmail(e.target.value)}
                  variant="outlined"
                />
              )}

              <Divider style={{ margin: '20px 0' }} />
              <Typography variant="h6">Tóm Tắt Đơn Hàng</Typography>
              <Grid container spacing={2}>
                {cart.map((item) => (
                  <Grid item xs={12} key={item.id}>
                    <Typography>
                      {item.name} - {item.quantity} x {item.price} VNĐ
                    </Typography>
                  </Grid>
                ))}
              </Grid>
              <Typography variant="h6" style={{ marginTop: '20px' }}>
                Tổng số tiền: {cartTotal} VNĐ
              </Typography>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleCheckout}
                style={{ marginTop: '20px' }}
              >
                Đặt Hàng
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default CartCheckoutPage;