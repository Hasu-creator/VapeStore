import React from 'react';
import { Box, Typography } from '@mui/material';

const ContactSection: React.FC = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6">Liên Hệ Chúng Tôi</Typography>
      <Typography variant="body2">Email: contact@example.com</Typography>
    </Box>
  );
};

export default ContactSection;
