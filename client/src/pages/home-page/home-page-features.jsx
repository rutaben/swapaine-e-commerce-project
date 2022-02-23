import React from 'react';

import {
  Grid,
  Avatar,
} from '@mui/material';
import EcoImage from '../../assets/images/icon-eco.png';
import PackageImage from '../../assets/images/icon-package.png';
import CancellationImage from '../../assets/images/icon-cancellation.png';
import FeatureCard from './components/cards/feature-card';

const featuresCardsData = [
  { title: 'Draugiška aplinkai', body: 'Nesirūpinkite drabužių skalbimu - juos valome ekologiškoje valykloje.', image: EcoImage },
  { title: 'Mažiau išteklių siuntimui', body: 'Užsakymai pristatomi iš vietinių sandėlių ir siunčiami pakuotėse iš perdirbtų drabužių.', image: PackageImage },
  { title: 'Jokių įsipareigojimų', body: 'Prenumeratą galite atšaukti bet kada. Jokių klausimų ar papildomų išlaidų.', image: CancellationImage },
];

const Features = () => (
  <Grid
    container
    sx={(theme) => ({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      px: 15,
      my: 15,
      [theme.breakpoints.down('md')]: {
        my: 0,
        px: 20,
      },
      [theme.breakpoints.down('sm')]: {
        my: 0,
        px: 8,
      },
    })}
  >
    {featuresCardsData.map(({
      title, body, image,
    }) => (
      <Grid item xs={12} md={4} key={title} sx={{ px: 3 }}>
        <FeatureCard title={title} body={body}>
          <Avatar variant="square" src={image} sx={{ width: '120px', height: '120px' }} />
        </FeatureCard>
      </Grid>
    ))}
  </Grid>
);

export default Features;
