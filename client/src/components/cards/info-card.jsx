import * as React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  // Typography,
} from '@mui/material';
import BlackButton from '../../pages/home-page/components/buttons/black-button';

const InfoCard = ({
  buttonText, children,
}) => (
  <Card elevation={0} sx={(theme) => ({ backgroundColor: theme.palette.background.default })}>
    <CardContent>
      {children}
    </CardContent>
    <CardActions>
      <BlackButton title={buttonText} type="submit" />
    </CardActions>
  </Card>
);

export default InfoCard;
