import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  styled,
} from '@mui/material';
import PlansImage from '../../assets/images/plans-image.png';
import PlanCard from './components/cards/plan-card';

const StyledGrid = styled(Grid)(() => ({ display: 'flex', justifyContent: 'center' }));

const StyledHeader = styled(Typography)(() => ({
  textTransform: 'uppercase',
  fontFamily: 'Lexend Deca',
  fontWeight: 700,
}));

const planCardsData = [
  {
    title: 'Kartais', pricePromo: '99', itemsCt: '4', ordersCt: '1 užsakymas',
  },
  {
    title: 'Dažnai', pricePromo: '149', itemsCt: '8', ordersCt: '2 užsakymai',
  },
  {
    title: 'Nuolatos', pricePromo: '199', itemsCt: '16', ordersCt: '4 užsakymai',
  },
];

const Plans = () => (
  <Box sx={{
    backgroundImage: `url(${PlansImage})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'right', display: 'flex', alignItems: 'center',
  }}
  >
    <Container maxWidth="md">
      <StyledGrid
        spacing={3}
        container
        sx={(theme) => ({
          mt: 3,
          mb: 8,
          [theme.breakpoints.down('md')]: {
            mb: 2,
          },
        })}
      >
        <StyledGrid item xs={12}>
          <StyledHeader
            variant="h3"
            sx={() => ({ pb: 4 })}
          >
            Narystės planai
          </StyledHeader>
        </StyledGrid>
        {planCardsData.map(({
          title, pricePromo, itemsCt, ordersCt,
        }) => (
          <StyledGrid
            item
            xs={12}
            md={4}
            key={title}
            sx={{ mb: 3 }}
          >
            <PlanCard
              title={title}
              pricePromo={pricePromo}
              itemsCt={itemsCt}
              ordersCt={ordersCt}
            />
          </StyledGrid>
        ))}
      </StyledGrid>
    </Container>
  </Box>
);

export default Plans;
