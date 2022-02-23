import React from 'react';
import { Box } from '@mui/material';

const ScrollIconAnimation = () => (
  <Box sx={{
    width: '35px',
    height: '63px',
    border: '2px solid #fafafa',
    borderRadius: '60px',
    position: 'relative',
    '&::before': {
      content: "''",
      width: '8px',
      height: '8px',
      position: 'absolute',
      top: '10px',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: '#fafafa',
      borderRadius: '50%',
      opacity: 1,
      animation: 'wheel 2s infinite',
    },
    '@keyframes wheel': {
      '0%': { opacity: '0', top: '12px' },
      '100%': { opacity: '1', top: '38px' },
    },
  }}
  />
);

export default ScrollIconAnimation;
