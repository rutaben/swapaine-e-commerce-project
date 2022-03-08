import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  styled,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ContainedButtonDark from '../../../../components/buttons/contained-button-dark';
import StyledNavlink from '../../../../components/partials/navbar/styled-nav-link';

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '430px',
  [theme.breakpoints.up('md')]: {
    width: '400px',
  },
  [theme.breakpoints.down('md')]: {
    width: '300px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '300px',
  },
}));

const StyledBody = styled(Typography)(() => ({
  lineHeight: 2,
  fontWeight: 300,

}));

const StyledCheckIcon = styled(CheckIcon)(() => ({
  width: '16px',
  height: '16px',
  marginRight: 5,
}));

const PlanCard = ({
  title, pricePromo, itemsCt, ordersCt,
}) => (
  <StyledCard>
    <CardContent>
      <Typography
        variant="h4"
        align="center"
        sx={() => ({
          mb: 3, fontFamily: 'Cormorant Garamond', fontWeight: 600, textTransform: 'uppercase',
        })}
      >
        {title}
      </Typography>
      <Box sx={{
        display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
      }}
      >
        <StyledBody variant="h3" sx={{ fontWeight: 600 }}>
          €
          {pricePromo}
        </StyledBody>
        <br />
        <StyledBody variant="body2" sx={(theme) => ({ color: theme.palette.secondary.main })}>
          /mėn.
        </StyledBody>
      </Box>
      <StyledNavlink to="/login">
        <ContainedButtonDark title="Išbandyti" />
      </StyledNavlink>
      <StyledBody variant="body2" sx={{ mt: 2 }}>
        <StyledCheckIcon />
        Iki
        {' '}
        {itemsCt}
        {' '}
        drabužių/ mėn.
        <br />
        <StyledCheckIcon />
        {ordersCt}
        / mėn.
        <br />
        <StyledCheckIcon />
        Nemokamas siuntimas
        <br />
        <StyledCheckIcon />
        Nemokamas valymas
        <br />
      </StyledBody>
    </CardContent>
  </StyledCard>
);

export default PlanCard;
