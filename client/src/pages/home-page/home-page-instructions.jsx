import React from 'react';
import {
  Avatar,
  Typography,
  Grid,
  styled,
} from '@mui/material';
import InstructionsImage from '../../assets/images/instructions-image.png';
import Icon1 from '../../assets/images/instructions-icon-1.png';
import Icon2 from '../../assets/images/instructions-icon-2.png';
import Icon3 from '../../assets/images/instructions-icon-3.png';
import FeatureCard from './components/cards/feature-card';

const StyledContainer = styled(Grid)(() => ({
  display: 'flex',
  justifyContent: 'center',
  backgroundImage: `url(${InstructionsImage})`,
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
}));

const StyledTypography = styled(Typography)(() => ({
  fontFamily: 'Lexend Deca',
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
      my: 12,
      [theme.breakpoints.down('md')]: {
        my: 0,
        px: 20,
        backgroundImage: 'none',
      },
      [theme.breakpoints.down('sm')]: {
        my: 0,
        px: 3,
      },
    })}
  >
    <Grid item xs={12}>
      <StyledTypography
        variant="h3"
        align="center"
        sx={{ mb: 3 }}
      >
        Kaip tai veikia
      </StyledTypography>
    </Grid>
    {instructionsCardsData.map(({ title, body, image }) => (
      <Grid item xs={12} md={4} key={title}>
        <FeatureCard key={title} title={title} body={body}>
          <Avatar variant="square" src={image} sx={{ width: '300px', height: '300px' }} />
        </FeatureCard>
      </Grid>
    ))}
  </StyledContainer>
);

export default Instructions;
