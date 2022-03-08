import React from 'react';
import {
  Box,
} from '@mui/material';

const OrdersPage = () => (
  <Box sx={(theme) => ({ height: `calc(100vh - ${theme.mixins.footer.height * 2 - 3}px )` })}>
    <span>Čia greitai bus užsakymų istorija</span>
  </Box>
);

export default OrdersPage;
