import ViewportLayout from '../components/layouts/viewport-layout';
import NavbarLayout from '../components/layouts/navbar-layout';
import DashboardLayout from '../components/layouts/dashboard-layout';

//! no-auth
import Homepage from '../pages/home-page';
import ProductsPage from '../pages/products-page';
import ProductPage from '../pages/product-page';
import CheckoutPage from '../pages/checkout-page';
// tures iskart kazkaip susikurti accounta po pirkimo; pvz. button - pirkti ir sukurti accounta
//! public-only
import LoginPage from '../pages/pre-auth/login-page';
import SignUpPage from '../pages/pre-auth/sign-up-page';
//! auth
import ProfilePage from '../pages/post-auth/profile-page';
//! user
import FavoritesPage from '../pages/post-auth/user/favorites-page';
// import UserInfoPage from '../pages/post-auth/user/user-info-page';
import OrdersPage from '../pages/post-auth/user/orders-page';
//! admin
import AdminDashboard from '../pages/post-auth/admin-only/admin-dashboard';
// import ProductPanelPage from '../pages/auth/admin/product-panel-page';
// import UserPanelPage from '../pages/auth/admin/user-panel-page';

export default {
  ViewportLayout,
  NavbarLayout,
  DashboardLayout,
  Homepage,
  CheckoutPage,
  ProductsPage,
  ProductPage,
  // ErrorPage,
  LoginPage,
  SignUpPage,
  ProfilePage,
  FavoritesPage,
  // UserInfoPage,
  OrdersPage,
  AdminDashboard,
  // StatisticsPage,
  // ProductPanelPage,
  // UserPanelPage,
};
