import React from 'react';
// import HeroVideo from '../../assets/videos/hero-video-1.mp4';
import HeroContainer from './components/hero-container';

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
      <HeroContainer>
        <img
          src="https://images.pexels.com/photos/5119920/pexels-photo-5119920.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          alt=""
          style={{
            height: '100vh', width: '100vw', objectFit: 'cover', objectPosition: 'center',
          }}
        />
      </HeroContainer>
    );
  }
  return (
    <HeroContainer>

      <img
        src="https://images.pexels.com/photos/5119920/pexels-photo-5119920.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        alt=""
        style={{
          height: '100vh', width: '100vw', objectFit: 'cover', objectPosition: 'center',
        }}
      />
    </HeroContainer>
  );
};

export default Hero;
