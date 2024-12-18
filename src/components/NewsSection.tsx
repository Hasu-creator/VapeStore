import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const NewsSection: React.FC = () => {
  return (
    <Container sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom> {/* Xóa khoảng trắng ở đây */}
        Tin Tức Mới Nhất
      </Typography>
      <Typography variant="body2" paragraph>
        Cập nhật mới nhất về các sản phẩm và chương trình khuyến mãi. 
        Hãy theo dõi để không bỏ lỡ bất kỳ thông tin nào từ chúng tôi!
      </Typography>
      {/* Bạn có thể thêm danh sách tin tức ở đây */}
    </Container>
  );
};

export default NewsSection;