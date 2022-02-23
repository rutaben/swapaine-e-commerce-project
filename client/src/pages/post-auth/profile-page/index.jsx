import React from 'react';
import {
  Box, Typography, Container, Grid,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { userSelector } from '../../../store/auth';
// import ProfileService from '../../../services/profile-service';
import ProfilePagePhoto from './profile-page-photo';
import ProfilePageUserInfo from './profile-page-user-info';

const ProfilePage = () => {
  const user = useSelector(userSelector);
  console.log(user);

  return (
  // <Box>
  //   <Typography>
  //     Sveiki sugrįžę, useri 524345342!
  //   </Typography>
  //   <NavLink to={routes.UserInfoPage}>Eiti į profilį</NavLink>
  // </Box>
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
  );
};

export default ProfilePage;
