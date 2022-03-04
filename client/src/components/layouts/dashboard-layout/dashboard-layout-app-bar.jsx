import { styled } from '@mui/material';
import Navbar from '../../partials/navbar';

const DashboardLayoutAppBar = styled(Navbar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: `calc(100% - ${theme.mixins.drawer.width}px)`,

  [theme.breakpoints.down('md')]: {
    width: '100%',
    ...(open && {
      width: `calc(100% - ${theme.mixins.drawer.width}px)`,
      marginLeft: `${theme.mixins.drawer.width}px`,
    }),
  },
}));

export default DashboardLayoutAppBar;
