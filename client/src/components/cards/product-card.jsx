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
}));

const ProductCard = ({
  id, name, price, brand,
}) => (
  <Card
    elevation={0}
    sx={{
      maxWidth: 350, px: 1, py: 2, backgroundColor: '#fafafa',
    }}
  >
    <CardActionArea>
      <CardLink to={`/products/${id}`}>
        <CardMedia
          component="img"
          height="350"
          image="http://unsplash.it/300/400"
          alt="product"
        />
        <CardContent>
          <Typography variant="h5" component="div" sx={{ textTransform: 'uppercase' }}>
            {brand}
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            {name}
          </Typography>
          <Typography variant="body2">
            Vertė €
            {price}
          </Typography>
        </CardContent>
      </CardLink>
    </CardActionArea>
  </Card>
);

export default ProductCard;
