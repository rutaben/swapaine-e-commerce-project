import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

const StyledNavlink = styled(NavLink)(({ theme }) => ({
  fontWeight: 300,
  textDecoration: 'none',
  color: theme.palette.primary.contrastText,
  '&.active': {
    fontWeight: 400,
  },
}));

export default StyledNavlink;
