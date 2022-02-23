import React from 'react';
import {
  Box,
  Grid,
} from '@mui/material';
import YellowButton from '../../home-page/components/buttons/yellow-button';

const ProfilePagePhoto = () => (
  <Box>
    <Box>
      <Grid container spacing={2} sx={{ px: 3 }}>
        <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src="https://unsplash.it/200/300" alt="user" style={{ borderRadius: '50%', height: '150px', width: '150px' }} />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, mt: 1,
          }}
        >
          <YellowButton fullWidth title="Keisti" />
        </Grid>
      </Grid>
    </Box>
  </Box>
);

export default ProfilePagePhoto;
