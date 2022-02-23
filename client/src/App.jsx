import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import store from './store';
import { lightTheme } from './styles/theme';
import PageRouter from './routing/page-router';
import './App.css';

const App = () => (
  <ReduxProvider store={store}>
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <PageRouter />
    </ThemeProvider>
  </ReduxProvider>
);

export default App;
