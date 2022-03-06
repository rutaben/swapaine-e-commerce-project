import React from 'react';
import HeroContainer from './components/containers/hero-container';

const Hero = () => {
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
      <HeroContainer
        heroText="Moderni spinta"
        title="Žiūrėti"
      >
        <img
          src="https://res.cloudinary.com/rutaben/image/upload/v1646480745/pexels-photo-6467614_fvokod.jpg"
          alt=""
          style={{
            height: '100vh', width: '100vw', objectFit: 'cover', objectPosition: 'top',
          }}
        />
      </HeroContainer>
    );
  }
  return (
    <HeroContainer
      heroText="Moderni spinta"
      title="Žiūrėti"
    >
      <img
        src="https://res.cloudinary.com/rutaben/image/upload/v1646479113/image_7dd3e8cb-6bed-439e-920d-38c1b62c625c_bodmaw.jpg"
        alt=""
        style={{
          height: '100vh', width: '100vw', objectFit: 'cover', objectPosition: 'top',
        }}
      />
    </HeroContainer>
  );
};

export default Hero;
