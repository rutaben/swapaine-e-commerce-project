import React from 'react';
import {
  Box, Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { userSelector } from '../../../store/auth';
import ProfilePageUserInfo from './profile-page-user-info';

const ProfilePage = () => {
  const user = useSelector(userSelector);

  return (
    <Box
      sx={(theme) => ({ mt: 2, mx: 4, height: `calc(100vh - ${theme.mixins.footer.height * 2}px )` })}
      maxWidth="sm"
    >
      <Typography variant="h4" sx={{ mb: 5 }}>Informacija</Typography>
      <ProfilePageUserInfo user={user} />
    </Box>
  );
};

export default ProfilePage;
