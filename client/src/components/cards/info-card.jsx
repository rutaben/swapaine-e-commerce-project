import * as React from 'react';
import {
  Card,
  CardActions,
  CardContent,
} from '@mui/material';
import ContainedButtonDark from '../buttons/contained-button-dark';

const InfoCard = ({ children }) => (
  <Card elevation={0} sx={(theme) => ({ backgroundColor: theme.palette.background.default })}>
    <CardContent>
      {children}
    </CardContent>
    <CardActions>
      <ContainedButtonDark title="Į mėgstamus" type="submit" />
    </CardActions>
  </Card>
);

export default InfoCard;
