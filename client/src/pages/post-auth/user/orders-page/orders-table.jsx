import * as React from 'react';
import {
  TableBody,
  TableCell,
  // TableHead,
  TableRow,
  Box,
  Checkbox,
  Avatar,
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ProductTableContainer from '../../../../components/containers/product-table-container';
import BlackButton from '../../../home-page/components/buttons/black-button';

function createData(image, title, size, color) {
  return {
    image, title, size, color,
  };
}

const rows = [
  createData('https://www.net-a-porter.com/variants/images/24665545640540058/fr/w920_q60.jpg', 'Dolce Humana kelnių kostiumėlis', '38EU', 'Ruda'),
  createData('https://www.net-a-porter.com/variants/images/18706561955385332/ou/w2000_q60.jpg', 'Irgi kostiumėlis', 'EU36', 'Žalia'),
];

const FavoritesTable = () => (
  <Box sx={{ mt: 5 }}>
    <ProductTableContainer title="Užsakymai">
      {/* <TableHead>
        <TableRow>
          <TableCell>Pasirinkti</TableCell>
          <TableCell />
          <TableCell />
          <TableCell align="right">Ištrinti</TableCell>
        </TableRow>
      </TableHead> */}
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.image}
          >
            <TableCell padding="checkbox" sx={{ textAlign: 'center' }}>
              <Checkbox
                sx={(theme) => ({
                  color: theme.palette.primary.contrastText,
                  '&:hover': {
                    color: theme.palette.primary.contrastText,
                  },
                })}
              />
            </TableCell>
            <TableCell component="th" scope="row" sx={{ px: 0, width: '70px' }}>
              <Avatar src={row.image} alt="" variant="square" sx={{ height: '100px', width: '100%' }} />
            </TableCell>
            <TableCell
              align="left"
              sx={(theme) => ({ fontSize: theme.typography.body2 })}
            >
              {row.title}
              <br />
              Dydis:
              {' '}
              {row.size}
              <br />
              Spalva:
              {' '}
              {row.color}
            </TableCell>
            <TableCell align="right">
              <DeleteOutlineIcon />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </ProductTableContainer>
    <Box sx={{ width: '290px' }}>
      <BlackButton title="Formuoti užsakymą" />
    </Box>
  </Box>
);

export default FavoritesTable;
