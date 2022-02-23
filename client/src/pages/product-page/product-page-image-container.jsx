import React from 'react';
import {
  Grid,
  Avatar,
} from '@mui/material';

const images = ['https://www.net-a-porter.com/variants/images/24665545640540058/fr/w920_q60.jpg', 'https://www.net-a-porter.com/variants/images/24665545640540058/ou/w2000_q60.jpg', 'https://www.net-a-porter.com/variants/images/24665545640540058/in/w920_q60.jpg', 'https://www.net-a-porter.com/variants/images/24665545640540058/cu/w920_q60.jpg'];

const ProductPageImages = () => (
  <Grid container spacing={2}>
    {images.map((image) => (
      <Grid
        item
        xs={12}
        md={6}
        key={image}
      >
        <Avatar variant="square" src={image} sx={{ width: '100%', height: '100%' }} />
      </Grid>
    ))}
  </Grid>
);

export default ProductPageImages;
