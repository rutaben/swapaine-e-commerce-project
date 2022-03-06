import * as React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  styled,
} from '@mui/material';
import { Link } from 'react-router-dom';

const CardLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.contrastText,
  '&:hover': {
    backgroundColor: '#141414',
  },
}));

const StyledTypography = styled(Typography)(() => ({
  fontWeight: 300,
}));

const ProductCard = ({
  id, name, price, brand, productImage,
}) => (
  <Card
    elevation={0}
    sx={{
      maxWidth: 280, height: 550, px: '0.2rem', py: 2, backgroundColor: '#fafafa',
    }}
  >
    <CardActionArea>
      <CardLink to={`/products/${id}`}>
        <CardMedia
          component="img"
          height="400"
          image={productImage}
          alt="product"
        />
        <CardContent sx={{ px: 0 }}>
          <Typography
            variant="h4"
            sx={{
              textTransform: 'uppercase', mb: 1, fontFamily: 'Cormorant Garamond', fontWeight: '700',
            }}
          >
            {brand}
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            {name}
          </Typography>
          <StyledTypography variant="subtitle1">
            Originali kaina €
            {price}
            ,00
          </StyledTypography>
        </CardContent>
      </CardLink>
    </CardActionArea>
  </Card>
);

export default ProductCard;
