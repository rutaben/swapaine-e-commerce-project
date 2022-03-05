import React from 'react';
import {
  Container,
  Grid,
} from '@mui/material';
import CollectionCard from './components/cards/collection-card';

const shopCardsData = [
  { title: 'Švarkai', image: 'https://res.cloudinary.com/rutaben/image/upload/v1646267694/qnbsp2fx9goaotsttntc_r7x2mc.jpg' },
  { title: 'Kelnės', image: 'https://res.cloudinary.com/rutaben/image/upload/v1646498099/h20swan-camel_hhlhkd.jpg' },
  { title: 'Suknelės', image: 'https://res.cloudinary.com/rutaben/image/upload/v1646268080/8D6A2547-F1CF-4BC9-ABB2-A82FD15B16ED_tk9nie.jpg' },
];

const Shop = () => (
  <Container maxWidth="lg">
    <Grid
      container
      sx={(theme) => ({
        display: 'flex',
        justifyContent: 'center',
        mb: 5,
        [theme.breakpoints.down('md')]: {
          px: 25,
          mb: 3,
        },
        [theme.breakpoints.down('sm')]: {
          px: 5,
        },
      })}
    >
      <Grid item xs={12} sx={{ mb: 7 }} />
      {shopCardsData.map(({
        title, image,
      }) => (
        <Grid
          item
          xs={12}
          md={4}
          key={title}
          sx={{ px: 2, mb: 2 }}
        >
          <CollectionCard title={title} image={image} />
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Shop;
