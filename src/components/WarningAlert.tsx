import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const WarningAlert: React.FC = () => {
  const messages = [
    "Thuốc lá điện tử là sản phẩm dành cho người trưởng thành (18+). Nghiêm cấm người dưới 18 tuổi dưới mọi hình thức.",
    "Thuốc lá điện tử có thể chứa nicotine. Nicotine khi sử dụng với hàm lượng cao có thể gây ngộ độc và có tính gây nghiện. Không được uống trực tiếp nicotine và tránh cho nicotine tiếp xúc với da và mắt. Phụ nữ không nên sử dụng khi đang có thai và cho con bú. Lưu ý tránh xa tầm tay trẻ em và động vật.",
    "Việc sử dụng những sản phẩm chứa nicotine có thể khiến những bệnh liên quan đến đường hô hấp và tim mạch nặng hơn. Ngoài ra, khi uống phải nicotine có thể gây nên hiện tượng tăng nhịp tim, huyết áp và gây choáng, buồn nôn, kích ứng dạ dày. Nếu một trong những điều này xảy ra bạn cần liên hệ với chuyên viên y tế ngay.",
    "Nếu bạn không phải là người sử dụng nicotine thường xuyên, chúng tôi không khuyến khích bạn bắt đầu sử dụng thuốc lá điện tử."
  ];

  return (
    <Container  sx={{ width:'1200px',margin: '40px auto' }}> {/* Change maxWidth from "md" to "lg" */}
      <Paper 
        elevation={3} 
        sx={{ 
          padding: 4, 
          margin: '16px 0', 
          backgroundColor: '#ffffff', 
          border: '4px solid #000000', 
          borderRadius: 2, 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          width: '100%' // Ensure it takes the full width of the container
        }}
      >
        <Box display="flex" justifyContent="center" mb={2}>
          <WarningAmberIcon sx={{ fontSize: '4rem', color: '#000000' }} />
        </Box>

        <Typography 
          variant="h4" 
          align="center" 
          sx={{ fontWeight: 'bold', color: '#000000', marginBottom: 3, textTransform: 'uppercase' }}
        >
          Cảnh Báo
        </Typography>

        {messages.map((warning, index) => (
          <Typography 
            key={index} 
            variant="h6" 
            sx={{ fontSize: '1.5rem', color: '#333333', marginTop: 2, position: 'relative' }}
          >
            <span style={{ fontWeight: 'bold', color: '#ffd700', marginRight: '8px' }}>Cảnh Báo:</span>
            {warning}
          </Typography>
        ))}
      </Paper>
    </Container>
  );
};

export default WarningAlert;