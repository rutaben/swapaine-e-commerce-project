import React from 'react';
import {
  Typography,
  // Box,
} from '@mui/material';
import InfoCard from '../../components/cards/info-card';

const ProductPageInfo = ({ product }) => {
  const kazkas = product;
  console.log(kazkas);

  return (
    <InfoCard buttonText="Išsaugoti" onSubmit>
      {product.map(({ value, name, variant }) => (
        <Typography variant={variant} gutterBottom>
          {name}
          {' '}
          {value}
        </Typography>
      ))}
    </InfoCard>
  );
};

export default ProductPageInfo;
