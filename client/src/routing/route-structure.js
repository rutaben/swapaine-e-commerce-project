import {
  PUBLIC_ONLY,
  AUTH,
  USER,
  ADMIN,
} from './auth-types';

const routeStructure = [
  {
    path: '/',
    pageName: 'NavbarLayout',
    childRoutes: [
      { index: true, pageName: 'Homepage' },
      { path: 'products', pageName: 'ProductsPage' },
      { path: 'products/:id', pageName: 'ProductPage' },
      {
        path: '/',
        pageName: 'ViewportLayout',
        childRoutes: [
          { path: 'login', pageName: 'LoginPage', auth: PUBLIC_ONLY },
          { path: 'register', pageName: 'SignUpPage', auth: PUBLIC_ONLY },
        ],
      },
      // { path: '*', pageName: 'ErrorPage' },
    ],
  },
  {
    path: '/account',
    pageName: 'DashboardLayout',
    childRoutes: [
      { index: true, pageName: 'ProfilePage', auth: AUTH },
      { path: 'favorites', pageName: 'FavoritesPage', auth: USER },
      { path: 'orders', pageName: 'OrdersPage', auth: USER },
      { path: 'user-info', pageName: 'UserInfoPage', auth: USER },
      { path: 'admin/dashboard', pageName: 'AdminDashboard', auth: ADMIN },
      // { path: 'admin/products', pageName: 'ProductPage', auth: ADMIN },
      // { path: 'admin/users', pageName: 'UsersPage', auth: ADMIN },
    ],
  },
];

export default routeStructure;
