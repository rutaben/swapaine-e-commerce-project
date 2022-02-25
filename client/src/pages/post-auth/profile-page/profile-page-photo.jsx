import React, { useState } from 'react';
// import React, { useState } from 'react';
import {
  Box,
  Grid,
  Button,
} from '@mui/material';
// import ClearIcon from '@mui/icons-material/Clear';
import ModalCard from '../../components/modal-card';
// import ProfileService from '../../../services/profile-service';
import ProfilePageImageGrid from './profile-page-image-grid';

// import YellowButton from '../../home-page/components/buttons/yellow-button';

const ProfilePagePhoto = ({
  mainImg, imgData, setMainImage,
}) => {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Grid container spacing={2} sx={{ px: 3 }}>
        <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src={(mainImg && mainImg.src) ?? '/default-image.jpg'} alt="user" style={{ borderRadius: '50%', height: '150px', width: '150px' }} />
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, mt: 1,
          }}
        >
          <Button
            fullWidth
            onClick={handleOpen}
            sx={{ backgroundColor: '#141414' }}
          >
            Pakeisti
          </Button>
          <ModalCard open={open} onClose={handleClose}>
            <Box sx={{ width: '50vw' }}>
              <ProfilePageImageGrid
                imgData={imgData}
                columns={4}
                handleSelectImage={(id) => {
                  setMainImage(id);
                  handleClose();
                }}
              />
            </Box>
          </ModalCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfilePagePhoto;
