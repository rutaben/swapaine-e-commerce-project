import React from 'react';
import {
  Grid,
  Avatar,
} from '@mui/material';

const ProductPageImages = ({ productImgs }) => (
  <Grid container spacing={2}>
    {productImgs.map((image) => (
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
