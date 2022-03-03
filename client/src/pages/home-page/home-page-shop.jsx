import React from 'react';
import {
  Container,
  Typography,
  Grid,
  styled,
} from '@mui/material';
import CollectionCard from './components/cards/collection-card';

const StyledHeader = styled(Typography)(() => ({
  fontWeight: 700,
  textTransform: 'uppercase',
  fontFamily: 'Lexend Deca',
}));

const shopCardsData = [
  { title: 'Švarkai', image: 'https://res.cloudinary.com/rutaben/image/upload/v1646157393/product-images/13-1_cne1as.png' },
  { title: 'Kelnės', image: 'https://res.cloudinary.com/rutaben/image/upload/v1646157368/product-images/8-1_tj5mp1.png' },
  { title: 'Suknelės', image: 'https://res.cloudinary.com/rutaben/image/upload/v1646157413/product-images/47-1_nk4li4.png' },
];

const Shop = () => (
  <Container maxWidth="lg">
    <Grid
      container
      sx={(theme) => ({
        display: 'flex',
        justifyContent: 'center',
        my: 15,
        [theme.breakpoints.down('md')]: {
          my: 5,
          px: 25,
        },
        [theme.breakpoints.down('sm')]: {
          my: 5,
          px: 5,
        },
      })}
    >
      <Grid item xs={12} sx={{ mb: 5 }}>
        <StyledHeader variant="h3">
          Kategorijos
        </StyledHeader>
      </Grid>
      {shopCardsData.map(({
        title, image,
      }) => (
        <Grid
          item
          xs={12}
          md={4}
          key={title}
          sx={{ px: 2 }}
        >
          <CollectionCard title={title} image={image} />
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Shop;
