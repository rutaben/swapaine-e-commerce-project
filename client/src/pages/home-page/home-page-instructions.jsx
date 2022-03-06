import React from 'react';
import {
  Avatar,
  Typography,
  Grid,
  styled,
} from '@mui/material';
import Icon1 from '../../assets/images/instructions-1.png';
import Icon2 from '../../assets/images/instructions-2.png';
import Icon3 from '../../assets/images/instructions-3.png';
import FeatureCard from './components/cards/feature-card';
import ContainedButtonDark from '../../components/buttons/contained-button-dark';

const StyledContainer = styled(Grid)(() => ({
  display: 'flex',
  justifyContent: 'center',
}));

const StyledTypography = styled(Typography)(() => ({
  fontFamily: 'Cormorant Garamond',
  textTransform: 'uppercase',
  fontWeight: 700,
}));

const instructionsCardsData = [
  {
    title: 'Išsirinkite 4 drabužius',
    body: 'Artėja svarbus renginys? Ieškote naujo kostiumėlio darbui? Pridėkite drabužius į norų sąrašą ir formuokite užsakymą.',
    image: Icon1,
  },
  {
    title: 'Vilkėkite be apribojimų',
    body: 'Užsakymams netaikomos grąžinimo datos - džiaukitės drabužiais, kiek patinka, o valymą palikite mums.',
    image: Icon2,
  },
  {
    title: 'Grąžinkite ir rinkitės iš naujo',
    body: 'Užpildykite gražinimo formą, iškvieskite kurjerį ir formuokite naują užsakymą.',
    image: Icon3,
  },
];

const Instructions = () => (
  <StyledContainer
    container
    sx={(theme) => ({
      px: 15,
      mt: 5,
      mb: 15,
      [theme.breakpoints.down('md')]: {
        my: 0,
        px: 20,
        backgroundImage: 'none',
      },
      [theme.breakpoints.down('sm')]: {
        my: 5,
        px: 3,
      },
    })}
  >
    <Grid item xs={12}>
      <StyledTypography
        variant="h2"
        align="center"
        sx={{ mb: 7 }}
      >
        Kaip tai veikia?
      </StyledTypography>
    </Grid>
    {instructionsCardsData.map(({ title, body, image }) => (
      <Grid item xs={12} md={4} key={title} sx={{ mb: 3 }}>
        <FeatureCard key={title} title={title} body={body}>
          <Avatar variant="square" src={image} sx={{ width: '60px', height: '90px', mb: 3 }} />
        </FeatureCard>
      </Grid>
    ))}
    <ContainedButtonDark title="Žiūrėti katalogą" />
  </StyledContainer>
);

export default Instructions;
