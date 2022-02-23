import React from 'react';
import {
  Grid, Box, styled, Typography,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TiktokIcon from '../../../assets/images/tik-tok-icon.png';

const StyledGridContainer = styled(Grid)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: theme.mixins.footer.height,
  backgroundColor: 'lightGrey',
}));

const Footer = () => (
  <StyledGridContainer
    container
    sx={() => ({ px: 2 })}
  >
    <Grid item xs={12} sm={8} md={9}>
      <Typography variant="body2">
        Swapainė © 2022
      </Typography>
    </Grid>
    <Grid item xs={12} sm={2} md={2} sx={{ textAlign: 'right' }}>
      <Typography variant="body2">
        Susisiekime
      </Typography>
    </Grid>
    <Grid item xs={12} sm={2} md={1} sx={{ textAlign: 'right' }}>
      <FacebookIcon />
      <InstagramIcon />
      <Box component="img" src={TiktokIcon} alt="" />
    </Grid>
  </StyledGridContainer>
);

export default Footer;
