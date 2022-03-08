import React from 'react';

import {
  Grid,
} from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ParkSharpIcon from '@mui/icons-material/ParkSharp';
import VerifiedIcon from '@mui/icons-material/Verified';
import FeatureCard from './components/cards/feature-card';

const featuresCardsData = [
  { title: 'Draugiška aplinkai', body: 'Nesirūpinkite drabužių skalbimu - juos valome ekologiškoje valykloje.', icon: <ParkSharpIcon fontSize="large" /> },
  { title: 'Mažiau išteklių siuntimui', body: 'Užsakymai pristatomi daugkartinėse pakuotėse iš vietinių sandėlių.', icon: <LocalShippingIcon fontSize="large" /> },
  { title: 'Jokių įsipareigojimų', body: 'Prenumeratą galite atšaukti bet kada. Jokių klausimų ar papildomų išlaidų.', icon: <VerifiedIcon fontSize="large" /> },
];

const Features = () => (
  <Grid
    container
    sx={(theme) => ({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      px: 15,
      my: 5,
      [theme.breakpoints.down('lg')]: {
        px: 5,
      },
      [theme.breakpoints.down('md')]: {
        mb: 6,
        px: 15,
      },
      [theme.breakpoints.down('sm')]: {
        px: 8,
      },
    })}
  >
    {featuresCardsData.map(({
      title, body, icon,
    }) => (
      <Grid item xs={12} md={4} key={title} sx={{ px: 2, mb: 3 }}>
        <FeatureCard title={title} body={body}>
          {icon}
        </FeatureCard>
      </Grid>
    ))}
  </Grid>
);

export default Features;
