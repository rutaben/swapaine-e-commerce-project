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
      light: '#f2f2f2',
      main: '#fafafa',
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
    coloredButton: {
      main: '#f7ea49',
      dark: '#141414',
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
  fontSize: '2rem',
  '@media (min-width:600px)': {
    fontSize: '2.25rem',
  },
  '@media (min-width:900px)': {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '2.75rem',
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

export const lightTheme = createTheme(theme, {
  mixins: {
    toolbar: {
      height: 100,
    },
    footer: {
      height: 100,
    },
    drawer: {
      width: 240,
    },
  },
});

// export const bodyTypography = createTheme(theme, {
//   palette: {
//     typography: {
//       fontFamily: [
//         'Open Sans',
//         'sans-serif',
//       ].join(','),
//     },
//   },
// });

export default theme;
