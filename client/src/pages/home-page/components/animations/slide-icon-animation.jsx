import React from 'react';
import { Box } from '@mui/material';

const SlideIconAnimation = () => (
  <Box sx={{
    width: '60px',
    height: '60px',
    position: 'relative',
    animation: 'left 1.5s infinite',
    '&::before': {
      content: "''",
      position: 'absolute',
      top: '15px',
      left: '18px',
      width: '18px',
      height: '18px',
      borderLeft: '2px solid #141414',
      borderBottom: '2px solid #141414',
      transform: 'rotate(45deg)',
    },
    '@keyframes left': {
      '0%': { transform: 'translate(0)' },
      '20%': { transform: 'translateX(-20px)' },
      '40%': { transform: 'translate(0)' },
    },
  }}
  />
);

export default SlideIconAnimation;
