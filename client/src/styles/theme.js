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
      main: '#757779',
      contrastText: '#141414',
    },
    secondary: {
      main: '#757779',
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
  fontSize: '4rem',
  '@media (min-width:600px)': {
    fontSize: '6rem',
  },
  '@media (min-width:900px)': {
    fontSize: '8rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '9rem',
  },
};

theme.typography.h2 = {
  fontSize: '3.5rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '4.25rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '4.75rem',
  },
};

theme.typography.h3 = {
  fontSize: '2rem',
  '@media (min-width:600px)': {
    fontSize: '2.5rem',
  },
  '@media (min-width:900px)': {
    fontSize: '2.75rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '3rem',
  },
};

theme.typography.h4 = {
  fontSize: '1.5rem',
  '@media (min-width:600px)': {
    fontSize: '1.75rem',
  },
  '@media (min-width:900px)': {
    fontSize: '2rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '2,5rem',
  },
};

theme.typography.h5 = {
  fontSize: '1.125rem',
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.25rem',
  },
};

theme.typography.body1 = {
  fontSize: '1.15rem',
};

theme.typography.body2 = {
  fontSize: '0.9rem',
};

export const lightTheme = createTheme(theme, {
  mixins: {
    toolbar: {
      height: 120,
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
