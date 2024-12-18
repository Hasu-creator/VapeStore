// src/components/LoginModal.tsx
import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField
} from '@mui/material';

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ open, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3002/api/login', { // Đảm bảo cổng đúng
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
        localStorage.setItem('token', data.accessToken);
        setSuccess('Đăng nhập thành công!'); // Thông báo thành công
        setError(''); // Reset lỗi
        onClose(); // Đóng modal sau khi đăng nhập thành công
      } else {
        const errorData = await response.json();
        setError(errorData.message); // Hiển thị thông báo lỗi
        setSuccess(''); // Reset thông báo thành công
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('Đã xảy ra lỗi khi cố gắng đăng nhập.'); // Thông báo lỗi chung
      setSuccess(''); // Reset thông báo thành công
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Đăng Nhập</DialogTitle>
      <DialogContent>
        <form onSubmit={handleLogin}>
          <TextField
            autoFocus
            margin="dense"
            label="Tài Khoản"
            type="text"
            fullWidth
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Cập nhật trạng thái username
          />
          <TextField
            margin="dense"
            label="Mật Khẩu"
            type="password"
            fullWidth
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Cập nhật trạng thái password
          />
          {error && <p style={{ color: 'red' }}>{error}</p>} {/* Hiển thị thông báo lỗi */}
          {success && <p style={{ color: 'green' }}>{success}</p>} {/* Hiển thị thông báo thành công */}
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Hủy
        </Button>
        <Button type="submit" color="primary">
          Đăng Nhập
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoginModal;