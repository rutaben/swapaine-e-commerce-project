import * as React from 'react';
import {
  Container,
  Box,
  Typography,
  // Link,
} from '@mui/material';
import InfoCard from '../../components/cards/info-card';

const CheckoutPageOrderInfo = () => (
  <Container sx={{
    display: 'flex', justifyContent: 'center', flexDirection: 'column',
  }}
  >
    <Typography sx={{ mb: 1, fontWeight: 700 }}>
      Patvirtinimas
    </Typography>
    <InfoCard title="Užsakymo informacija" buttonText="Patvirtinti mokėjimą">
      <Typography variant="body1" sx={{ mt: 4, fontWeight: 700 }}>
        Narystės planas DAŽNAI
      </Typography>
      <Typography variant="body2" sx={{ my: 4 }}>
        • Pirmus 2 mėnesius - 99€/mėn, vėliau - 149€/mėn.
        <br />
        • Iki 8 drabužių/mėn.
        <br />
        • 2 užsakymai/mėn.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="body1" sx={{ fontWeight: 700 }}>
          IŠ VISO
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 700 }}>
          99€
        </Typography>
      </Box>
      {/* <Link to="/login" sx={{ textDecoration: 'none' }}>
        Patvirtinti mokėjimą
      </Link> */}
    </InfoCard>
  </Container>
);

export default CheckoutPageOrderInfo;
