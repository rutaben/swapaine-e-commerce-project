import React from 'react';
import {
  Box,
  Typography,
  Avatar,
} from '@mui/material';

const stepsData = [
  { step: '1', title: 'Pristatymas' },
  { step: '2', title: 'Mokėjimo informacija' },
  { step: '3', title: 'Patvirtinimas' },
];

const CheckoutPageSteps = () => (
  <Box
    sx={() => ({
      py: 1, width: '90%', display: 'flex', justifyContent: 'space-around',
    })}
  >
    {stepsData.map(({ step, title }) => (
      <Box sx={{
        display: 'flex', alignItems: 'center', gap: 2,
      }}
      >
        <Avatar>{step}</Avatar>
        <Typography>
          {title}
        </Typography>
      </Box>
    ))}
  </Box>
);

export default CheckoutPageSteps;
