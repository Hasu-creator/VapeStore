import React, { useEffect, useRef } from 'react';
import {
  Dialog,
  Box,
  Typography,
  Button,
} from '@mui/material';
import anime from 'animejs';
import '../styles/fonts.css';

interface AgeVerificationModalProps {
  open: boolean;
  onClose: () => void;
}

const AgeVerificationModal: React.FC<AgeVerificationModalProps> = ({
  open,
  onClose
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const stringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (open && modalRef.current && stringRef.current) {
      anime({
        targets: stringRef.current,
        translateY: [-20, 0],
        duration: 300,
        easing: 'easeOutExpo',
      });

      anime({
        targets: modalRef.current,
        opacity: [0, 1],
        translateY: [-50, 0],
        duration: 500,
        easing: 'easeOutExpo',
      });
    }
  }, [open]);

  return (
    <Dialog
      open={open}
      onClose={(event, reason) => {
        if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
          onClose();
        }
      }}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      PaperProps={{
        style: {
          zIndex: 9999,
          position: 'absolute',
          maxWidth: 500,
          width: '90%',
          backgroundColor: '#f5f5f5', // Soft background color
          borderRadius: '12px',
          overflow: 'hidden',
        }
      }}
    >
      <Box
        ref={modalRef}
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 4,
        }}
      >
        {/* String effect */}
        <Box
          ref={stringRef}
          sx={{
            width: '4px',
            height: '20px',
            backgroundColor: '#ba0404',
            position: 'absolute',
            top: -20,
            borderRadius: '2px',
            transition: 'all 0.3s ease',
          }}
        />

        <Typography
          variant="h4" // Change variant to h4 for larger size
          sx={{
            marginBottom: 2,
            fontWeight: 'bold',
            color: '#555c5b',
            fontFamily: 'Oswald'
          }}
        >
          Cảnh báo
        </Typography>

        <Typography
          variant="body1"
          sx={{
            marginBottom: 3,
            color: 'text.secondary',
            fontFamily: 'JosefinSans, sans-serif',
            textAlign: 'center',
            lineHeight: 1.5,
          }}
        >
          Các sản phẩm có trên INSEEPOD.com giới hạn độ tuổi và chỉ dành cho người lớn trong độ tuổi hút thuốc hợp pháp. Tất cả các đơn hàng được đặt trên trang web sẽ được xác minh lại độ tuổi. Bạn phải từ 18 tuổi trở lên để mua sản phẩm trên INSEEPOD.com.
        </Typography>

        <Button
          onClick={onClose}
          variant="contained"
          sx={{ 
            marginTop: 2,
            padding: 1.5,
            background: 'linear-gradient(90deg, #595757, #cac5c5)', // Gradient background
            color: '#fff',
            borderRadius: '20px',
            transition: 'background-color 0.3s ease, transform 0.3s',
            '&:hover': {
              backgroundColor: '#ff5722',
              transform: 'scale(1.05)',
            },
          }}
        >
          Tôi Đã Hiểu
        </Button>
      </Box>
    </Dialog>
  );
};

export default AgeVerificationModal;
