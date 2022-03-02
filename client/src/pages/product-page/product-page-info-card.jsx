import React from 'react';
import {
  Typography,
} from '@mui/material';
import InfoCard from '../../components/cards/info-card';

const ProductPageInfo = ({ product }) => (
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

export default ProductPageInfo;
