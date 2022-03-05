import React from 'react';
import { Paper } from '@mui/material';

const HeroImage = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const md = 900;
  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);
  if (width > md) {
    return (
      <Paper elevation={0} sx={{ height: '100vh' }}>
        <img
          src="https://res.cloudinary.com/rutaben/image/upload/v1646480745/pexels-photo-6467614_fvokod.jpg"
          alt=""
          style={{
            height: '100vh', width: '100vw', objectFit: 'cover', objectPosition: 'right',
          }}
        />
      </Paper>
    );
  }
  return (
    <Paper elevation={0} sx={{ height: '100vh' }}>
      <img
        src="https://res.cloudinary.com/rutaben/image/upload/v1646479202/image_969c12e2-6a37-4414-8970-6a80346347c0_va4tph.jpg"
        alt=""
        style={{
          height: '100vh', width: '100vw', objectFit: 'cover', objectPosition: 'center',
        }}
      />
    </Paper>
  );
};

export default HeroImage;
