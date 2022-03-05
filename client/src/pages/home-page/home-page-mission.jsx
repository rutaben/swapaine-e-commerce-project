import React from 'react';
import {
  Container,
  Grid,
  Box,
  Typography,
  styled,
} from '@mui/material';

const StyledHeader = styled(Typography)(() => ({
  fontWeight: 700,
  textTransform: 'uppercase',
  fontFamily: 'Cormorant Garamond',
}));

const StyledTextbox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
}));

const Mission = () => (
  <Container
    maxWidth="lg"
    sx={(theme) => ({
      [theme.breakpoints.down('md')]: {
        mt: 10,
        px: 7,
      },
      [theme.breakpoints.up('md')]: {
        mt: 13,
        px: 10,
      },
      [theme.breakpoints.up('lg')]: {
        px: 0,
      },
    })}
  >
    <Grid
      container
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Grid item xs={12} sx={{ width: '50%' }}>
        <Box height="100%">
          <StyledHeader variant="h2" align="center">
            Tvaraus vartojimo link
          </StyledHeader>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
      >
        <StyledTextbox
          sx={(theme) => ({
            gap: 3,
            mt: 7,
            [theme.breakpoints.down('md')]: {
              mt: 5,
            },
          })}
        >
          <Typography variant="body1">
            Siekiant sumažinti mados įtaką aplinkai vien tik tvarios drabužių gamybos nepakanka.
            Kiekvienas drabužis vidutiniškai nešiojamas tik 7 kartus, o moterys dėvi
            tik iki 30% drabužių, esančių spintoje.
          </Typography>
          <Typography variant="body1" sx={{ mb: 5 }}>
            Mūsų siekis - sukurti sąlygas tvaresniam vartojimui ir suteikti galimybę papildyti
            spintą aukštos kokybės rūbais jums tik panorėjus, o vėliau - leisti jais džiaugtis
            ir kitiems.
          </Typography>
          {/* <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <UnderlinedButton title="Kaip tai veikia" />
          </Box> */}
        </StyledTextbox>
      </Grid>
    </Grid>
  </Container>
);

export default Mission;
