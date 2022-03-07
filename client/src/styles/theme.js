import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    text: {
      primary: '#141414',
    },
    background: {
      default: '#fafafa',
    },
    primary: {
      main: '#545c66',
      light: '#fafafa',
      contrastText: '#141414',
    },
    secondary: {
      main: '#212b36',
      light: '#b86054',
      contrastText: '#fafafa',
    },
    error: {
      main: '#bf4c4c',
    },
  },
  typography: {
    fontFamily: [
      'Josefin Sans', 'sans-serif',
    ].join(','),
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*::-webkit-scrollbar': {
          display: '0px',
        },
      },
    },
  },
});

theme.typography.h1 = {
  fontSize: '3.5rem',
  '@media (min-width:600px)': {
    fontSize: '4rem',
  },
  '@media (min-width:900px)': {
    fontSize: '5rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '5.5rem',
  },
};

theme.typography.h2 = {
  fontSize: '2.5rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '3rem',
  },
};

theme.typography.h3 = {
  fontSize: '1.75rem',
  '@media (min-width:600px)': {
    fontSize: '2rem',
  },
  '@media (min-width:900px)': {
    fontSize: '2.25rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '2.5rem',
  },
};

theme.typography.h4 = {
  fontSize: '1.15rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem',
  },
};

theme.typography.h5 = {
  fontSize: '1.15rem',
};

theme.typography.body1 = {
  fontSize: '1.05rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '1.175rem',
  },
};

theme.typography.body2 = {
  fontSize: '1.05rem',
};

theme.typography.subtitle1 = {
  fontSize: '0.85rem',
};

export const lightTheme = createTheme(theme, {
  mixins: {
    toolbar: {
      height: 100,
    },
    footer: {
      height: 150,
    },
    drawer: {
      width: 240,
    },
    transitions: {
      duration: {
        slow: 600,
      },
    },
  },
});

export default theme;
