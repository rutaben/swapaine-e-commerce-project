import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Container,
  Typography,
  Grid,
  Box,
  styled,
} from '@mui/material';
import CollectionCard from './components/cards/collection-card';
import SlideIconAnimation from './components/animations/slide-icon-animation';

const StyledHeader = styled(Typography)(() => ({
  fontWeight: 700,
  textTransform: 'uppercase',
  fontFamily: 'Lexend Deca',
}));

const StyledGrid = styled(Grid)(() => ({
  display: 'flex',
  overflowX: 'scroll',
  alignItems: 'flex-end',
  '&::-webkit-scrollbar': {
    width: 0,
  },
}));

const shopCardsData = [
  { title: 'Vakaro žvaigždė', image: 'https://images.pexels.com/photos/3394225/pexels-photo-3394225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
  { title: 'Diena biure', image: 'https://images.pexels.com/photos/8465072/pexels-photo-8465072.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
  { title: 'Savaitgalio malonumai', image: 'https://images.pexels.com/photos/6977372/pexels-photo-6977372.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
  { title: 'Atostogų režimas', image: 'https://images.pexels.com/photos/10661108/pexels-photo-10661108.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
  { title: 'Vestuvių viešnia', image: 'https://images.pexels.com/photos/9799802/pexels-photo-9799802.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
];

const Shop = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <Container maxWidth="xl">
      <Grid
        container
        spacing={2}
        sx={{
          display: 'flex',
          mt: 20,
          mb: 15,
          px: 3,
        }}
      >
        <Grid item xs={12} sx={{ position: 'relative' }}>
          <Box
            sx={{
              marginLeft: 18,
              bottom: -150,
              display: 'flex',
              position: 'absolute',
            }}
          >
            <SlideIconAnimation />
          </Box>
        </Grid>
        <Grid item xs={12} md={2}>
          <StyledHeader
            variant="h4"
            sx={() => ({
              position: 'absolute',
              mt: -9,
            })}
          >
            Populiarios kolekcijos
          </StyledHeader>
        </Grid>
        <StyledGrid
          item
          data-aos="fade-left"
          xs={12}
          md={10}
          sx={{ gap: 2, position: 'relative' }}
        >
          {shopCardsData.map(({
            title, image,
          }) => (
            <CollectionCard key={title} title={title} image={image} />
          ))}
        </StyledGrid>
      </Grid>
    </Container>
  );
};

export default Shop;
