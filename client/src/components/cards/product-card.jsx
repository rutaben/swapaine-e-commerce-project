import * as React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Box,
  styled,
} from '@mui/material';
import { Link } from 'react-router-dom';

const StyledCard = styled(Card)(() => ({
  width: 280,
  height: 550,
  backgroundColor: '#fafafa',
  '& .MuiTouchRipple-root': {
    display: 'none',
  },
}));

const StyledCardActionArea = styled(CardActionArea)(() => ({
  '& .MuiCardActionArea-focusHighlight': {
    display: 'none',
  },
}));

const CardLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.contrastText,
}));

const StyledTypography = styled(Typography)(() => ({
  fontWeight: 300,
}));

const ProductCard = ({
  id, name, price, brand, productImage,
}) => (
  <StyledCard
    elevation={0}
    sx={{ px: '0.2rem', py: 2 }}
  >
    <StyledCardActionArea>
      <CardLink
        to={`/products/${id}`}
      >
        <CardMedia
          component="img"
          height="400"
          image={productImage}
          alt="product"
        />
        <CardContent>
          <Typography
            variant="h4"
            sx={{
              textTransform: 'uppercase', mb: 1, fontFamily: 'Cormorant Garamond', fontWeight: '700',
            }}
          >
            {brand}
          </Typography>
          <Box sx={{ height: '2.15rem' }}>
            <Typography variant="subtitle1" sx={{ mb: 1, lineHeight: 1.25 }}>
              {name}
            </Typography>
          </Box>
          <StyledTypography variant="subtitle1">
            Originali kaina €
            {price}
            ,00
          </StyledTypography>
        </CardContent>
      </CardLink>
    </StyledCardActionArea>
  </StyledCard>
);

export default ProductCard;
