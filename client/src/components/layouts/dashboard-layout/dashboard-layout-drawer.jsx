import React from 'react';
import {
  Drawer,
  IconButton,
  List,
  Typography,
  Box,
  useTheme,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PersonIcon from '@mui/icons-material/Person';
import HistoryIcon from '@mui/icons-material/History';
import ConstructionIcon from '@mui/icons-material/Construction';
import { authSelector } from '../../../store/auth';
import { useSelector } from '../../../store/hooks';
import routes from '../../../routing/routes';

import DashboardLayoutDrawerHeader from './dashboard-layout-drawer-header';
import DashboardLayoutDrawerLink from './dashboard-layout-drawer-link';

const navigationItems = {
  common: [
    { title: 'Profilis', path: routes.ProfilePage, Icon: PersonIcon },
  ],
  user: [
    { title: 'Išsaugotos prekės', path: routes.FavoritesPage, Icon: ConstructionIcon },
    { title: 'Užsakymai', path: routes.OrdersPage, Icon: HistoryIcon },
  ],
  admin: [
    { title: 'Produktų panelė', path: routes.AdminDashboard, Icon: ConstructionIcon },
  ],
};

const DashboardLayoutDrawer = ({
  open,
  handleDrawerClose,
  isSmallScreen,
}) => {
  const theme = useTheme();
  const { user } = useSelector(authSelector);

  return (
    <Drawer
      sx={{
        width: theme.mixins.drawer.width,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: theme.mixins.drawer.width,
          boxSizing: 'border-box',
          // backgroundColor: 'rgba(0, 0, 0, 0.0)',
          // borderWidth: 0,
        },
      }}
      variant={isSmallScreen ? 'persistent' : 'permanent'}
      anchor="left"
      open={open}
    >
      <DashboardLayoutDrawerHeader>
        {isSmallScreen && (
          <Box sx={{
            mx: 'auto', width: '90%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}
          >
            <Typography variant="h3" sx={{ fontFamily: 'Cormorant Garamond', fontWeight: 700 }}>Meniu</Typography>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr'
                ? (
                  <ChevronLeftIcon sx={() => ({
                    color: theme.palette.primary.contrastText,
                  })}
                  />
                )
                : (
                  <ChevronRightIcon sx={() => ({
                    color: theme.palette.primary.contrastText,
                  })}
                  />
                )}
            </IconButton>
          </Box>
        )}
      </DashboardLayoutDrawerHeader>
      <List>
        {navigationItems.common.map(({ path, title, Icon }) => (
          <DashboardLayoutDrawerLink
            key={path}
            path={path}
            title={title}
            Icon={Icon}
          />
        ))}
        {user?.role === 'ADMIN' && navigationItems.admin.map(({ path, title, Icon }) => (
          <DashboardLayoutDrawerLink
            key={path}
            path={path}
            title={title}
            Icon={Icon}
          />
        ))}

        {user?.role === 'USER' && navigationItems.user.map(({ path, title, Icon }) => (
          <DashboardLayoutDrawerLink
            key={path}
            path={path}
            title={title}
            Icon={Icon}
          />
        ))}

      </List>

    </Drawer>
  );
};

export default DashboardLayoutDrawer;
