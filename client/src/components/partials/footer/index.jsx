import React from 'react';
import {
  styled, Typography, Container, Box,
} from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const StyledBox = styled(Box)(({ theme }) => ({
  width: '100%',
  flexDirection: 'column-reverse',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 25,
  height: theme.mixins.footer.height,
}));

const StyledTypography = styled(Typography)(() => ({
  fontWeight: 400,
}));

const Footer = () => (
  <Box sx={(theme) => ({ backgroundColor: theme.palette.secondary.light })}>
    <Container maxWidth="lg">
      <StyledBox>
        <StyledTypography variant="body2">
          Swapainé © 2022
        </StyledTypography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <EmailOutlinedIcon />
          <FacebookOutlinedIcon />
          <InstagramIcon />
        </Box>
      </StyledBox>
    </Container>
  </Box>
);

export default Footer;
