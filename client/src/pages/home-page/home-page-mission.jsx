import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Container,
  Grid,
  Box,
  Typography,
  styled,
} from '@mui/material';
import MissionImage from '../../assets/images/mission-image.png';
import UnderlinedButton from './components/buttons/underlined-button';

const StyledContainer = styled(Box)(() => ({
  width: '100%',
  backgroundImage: `url(${MissionImage})`,
  backgroundPosition: 'left',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
}));

const StyledHeader = styled(Typography)(() => ({
  fontWeight: 700,
  textTransform: 'uppercase',
  // lineHeight: 1.15,
  fontFamily: 'Lexend Deca',
}));

const StyledTextbox = styled(Box)(() => ({
  width: '45%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
}));

const Mission = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <StyledContainer sx={{ my: 15, mx: 5 }}>
      <Container
        maxWidth="md"
      >
        <Grid container>
          <Grid item xs={12} sx={{ width: '50%' }}>
            <Box height="100%">
              <StyledHeader
                data-aos="fade-up"
                variant="h2"
                sx={(theme) => ({
                  [theme.breakpoints.down('lg')]: {
                    width: '50%',
                    px: 5,
                  },
                  [theme.breakpoints.down('sm')]: {
                    width: '100%',
                    px: 3,
                    mt: -5,
                    mb: 3,
                  },
                })}
              >
                Kitas
                <br />
                žingsnis
                <br />
                tvarumo
                <br />
                link
              </StyledHeader>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ display: 'flex', justifyContent: 'flex-end' }}
          >
            <StyledTextbox
              data-aos="fade-up"
              sx={(theme) => ({
                gap: 3,
                mt: -3,
                [theme.breakpoints.down('lg')]: {
                  width: '55%',
                  px: 3,
                },
                [theme.breakpoints.down('sm')]: {
                  width: '100%',
                  mt: 4,
                },
              })}
            >
              <Typography variant="body1" sx={{ fontWeight: 700 }}>
                Siekiant sumažinti mados įtaką aplinkai vien tik tvarios drabužių gamybos nepakanka.
              </Typography>
              <Typography variant="body2">
                Kiekvienas drabužis vidutiniškai nešiojamas tik 7 kartus, o moterys dėvi
                tik iki 30% drabužių, esančių spintoje.
                <br />
                <br />
                Mūsų siekis - sukurti sąlygas tvaresniam vartojimui ir suteikti galimybę papildyti
                spintą aukštos kokybės rūbais jums tik panorėjus, o vėliau - leisti jais džiaugtis
                ir kitiems.
              </Typography>
              <UnderlinedButton title="Kaip tai veikia" />
            </StyledTextbox>
          </Grid>
        </Grid>
      </Container>
    </StyledContainer>
  );
};

export default Mission;
