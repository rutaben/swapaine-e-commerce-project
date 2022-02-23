import React from 'react';
import { Box } from '@mui/material';
import Hero from './home-page-hero';
import Mission from './home-page-mission';
import Features from './home-page-features';
import Plans from './home-page-plans';
import Shop from './home-page-shop';
import Instructions from './home-page-instructions';

const Homepage = () => (
  <Box>
    <Hero />
    <Mission />
    <Features />
    <Plans />
    <Shop />
    <Instructions />
  </Box>
);

export default Homepage;
