import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

const StyledNavlink = styled(NavLink)(({ theme }) => ({
  fontSize: '0.875rem',
  fontWeight: 700,
  letterSpacing: '1px',
  textDecoration: 'underline',
  textUnderlineOffset: '0.1rem',
  textDecorationColor: 'rgba(0,0,0,0.0)',
  backgroundColor: 'rgba(0,0,0,0.0)',
  color: theme.palette.primary.contrastText,
  '&.active': {
    textDecorationColor: theme.palette.primary.contrastText,
  },
}));

export default StyledNavlink;
