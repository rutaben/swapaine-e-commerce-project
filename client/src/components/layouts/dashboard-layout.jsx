import * as React from 'react';
import {
  Container,
} from '@mui/material';
// import CssBaseline from '@mui/material/CssBaseline';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => (
// const theme = useTheme();
// const [open, setOpen] = React.useState(false);

  <Container sx={{ display: 'flex' }}>
    {/* <CssBaseline /> */}
    <Outlet />
  </Container>
);
export default DashboardLayout;
