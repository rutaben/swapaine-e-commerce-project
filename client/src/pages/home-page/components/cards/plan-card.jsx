import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  styled,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import CheckIcon from '@mui/icons-material/Check';
import BlackButton from '../buttons/black-button';

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
        variant="h5"
        align="center"
        sx={() => ({
          mb: 3, fontWeight: 700,
        })}
      >
        {title}
      </Typography>
      <Box sx={{
        display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
      }}
      >
        <StyledBody variant="h4" sx={{ fontWeight: 700 }}>
          €
          {pricePromo}
        </StyledBody>
        <br />
        <StyledBody variant="body2" sx={(theme) => ({ color: theme.palette.secondary.main })}>
          /mėn.
        </StyledBody>
      </Box>
      <NavLink to="/checkout" sx={{ textDecoration: 'none' }}>
        <BlackButton title="Išbandyti" />
      </NavLink>
      <StyledBody variant="body2">
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
