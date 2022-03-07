import React from 'react';
import {
  Box, Typography, Container, Grid,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { userSelector } from '../../../store/auth';
import ProfilePageUserInfo from './profile-page-user-info';

const ProfilePage = () => {
  const user = useSelector(userSelector);

  return (
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
            <ProfilePageUserInfo user={user} />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProfilePage;
