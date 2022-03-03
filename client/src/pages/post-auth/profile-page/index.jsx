import React, { useState, useEffect } from 'react';
import {
  Box, Typography, Container, Grid,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { userSelector } from '../../../store/auth';
import ProfileService from '../../../services/profile-service';
import ProfilePagePhoto from './profile-page-photo';
import ProfilePageUserInfo from './profile-page-user-info';
import ProfilePageGallery from './profile-page-gallery';
import routes from '../../../routing/routes';

const ProfilePage = () => {
  const user = useSelector(userSelector);
  const [imgData, setImgData] = useState([]);

  const updateImgData = (newImgData) => {
    setImgData([...imgData, ...newImgData]);
  };

  const handleImageDelete = async (id) => {
    await ProfileService.deleteImage(id);
    setImgData(imgData.filter((x) => x.id !== id));
  };

  const setMainImage = async (id) => {
    await ProfileService.setMainImage(id);
  };

  useEffect(() => {
    (async () => {
      const fetchedImgData = await ProfileService.getUserImages();
      setImgData(fetchedImgData);
    })();
  }, []);

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
          <Grid item xs={12} md={4} sx={{ my: 5 }}>
            <ProfilePagePhoto
              mainImg={user.mainImg}
              imgData={imgData}
              setMainImage={setMainImage}
            />
          </Grid>
          <Grid item xs={12} md={4} sx={{ my: 5 }}>
            <ProfilePageGallery
              imgData={imgData}
              updateImgData={updateImgData}
              handleImageDelete={handleImageDelete}
            />
          </Grid>
          <Link to={routes.AdminDashboard}>
            <Typography textAlign="center">Daugiau</Typography>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProfilePage;
