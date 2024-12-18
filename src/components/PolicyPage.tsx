import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Paper 
} from '@mui/material';

interface PolicyPageProps {
  type: 'return' | 'warranty';
}

const PolicyPage: React.FC<PolicyPageProps> = ({ type }) => {
  const policyContent = {
    return: {
      title: 'Chính Sách Đổi Trả',
      description: `
        Chúng tôi cam kết mang đến cho khách hàng trải nghiệm mua sắm tốt nhất. 
        Dưới đây là chi tiết chính sách đổi trả sản phẩm:
      `,
      details: [
        'Sản phẩm được đổi trả trong vòng 7 ngày kể từ ngày mua',
        'Sản phẩm phải còn nguyên tem, nhãn và trong tình trạng ban đầu',
        'Không áp dụng đổi trả đối với các sản phẩm đã qua sử dụng',
      ]
    },
    warranty: {
      title: 'Bảo Hành - Sửa Chữa',
      description: `
        Chúng tôi cung cấp dịch vụ bảo hành chuyên nghiệp cho các sản phẩm:
      `,
      details: [
        'Thời gian bảo hành: 12 tháng kể từ ngày mua',
        'Miễn phí sửa chữa các lỗi do nhà sản xuất',
        'Hỗ trợ kỹ thuật nhanh chóng và chuyên nghiệp',
      ]
    }
  };

  const content = policyContent[type];

  return (
    <Container maxWidth="md" sx={{ mt: 10, mb: 5 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          {content.title}
        </Typography>
        
        <Typography variant="body1" paragraph>
          {content.description}
        </Typography>
        
        <Box component="ul" sx={{ pl: 4 }}>
          {content.details.map((detail, index) => (
            <Typography 
              key={index} 
              component="li" 
              variant="body2" 
              sx={{ mb: 1 }}
            >
              {detail}
            </Typography>
          ))}
        </Box>
      </Paper>
    </Container>
  );
};

export default PolicyPage;
