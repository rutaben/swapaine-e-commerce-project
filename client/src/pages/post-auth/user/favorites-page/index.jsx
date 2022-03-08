import React from 'react';
import {
  Box,
} from '@mui/material';

const FavoritesPage = () => (
  <Box sx={(theme) => ({ height: `calc(100vh - ${theme.mixins.footer.height * 2 - 3}px )` })}>
    <span>Čia greitai bus mėgstamiausios prekės</span>
  </Box>
);

export default FavoritesPage;
