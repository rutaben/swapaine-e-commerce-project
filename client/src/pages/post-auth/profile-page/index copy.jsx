import React from 'react';
import {
  Container,
  Box,
  Grid,
  Typography,
  Divider,
} from '@mui/material';
import Navbar from '../../../../components/partials/navbar';
import UserProvider from '../../user/contexts/user-context';
// import ProfilePageLinks from '../../user/components/sidebar';
import ProfilePagePhoto from './profile-page-photo';
import ProfilePageUserInfo from './profile-page-user-info';

const ProfilePage = () => (
  <UserProvider>
    <Box>
      <Navbar />
      <Container
        maxWidth="lg"
        sx={(theme) => ({ pt: `${theme.mixins.toolbar.height}px` })}
      >
        <Box sx={() => ({ py: 2 })}>
          <Typography variant="h4">Profilis</Typography>
        </Box>
        <Grid
          container
          spacing={2}
        >
          <Grid item xs={12} md={10} sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <Grid item xs={12} md={8} sx={{ my: 5 }}>
              <ProfilePageUserInfo />
            </Grid>
            <Grid item xs={12} md={4} sx={{ my: 5 }}>
              <ProfilePagePhoto />
            </Grid>
            <Grid item xs={12}>
              <Box sx={{
                mx: 2, my: 5, height: 100, backgroundColor: 'lightGrey',
              }}
              >
                <Typography>Pakeisti slaptiką</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </UserProvider>
);

export default ProfilePage;
