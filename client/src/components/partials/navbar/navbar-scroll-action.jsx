import React from 'react';
import { useScrollTrigger } from '@mui/material';

const ScrollHandler = (props) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: props.window ? window() : undefined,
  });

  return React.cloneElement(props.children, {
    style: {
      backgroundColor: trigger ? '#fafafa' : 'transparent',
      transition: trigger ? '0.3s' : '0.5s',
    },
  });
};

const NavbarScrollAction = ({ children }) => <ScrollHandler>{children}</ScrollHandler>;

export default NavbarScrollAction;
