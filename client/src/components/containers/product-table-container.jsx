import * as React from 'react';
import {
  Table,
  TableContainer,
  Box,
  Typography,
} from '@mui/material';

const ProductTableContainer = ({ title, children }) => (
  <TableContainer component={Box}>
    <Typography
      variant="h3"
      align="center"
      sx={{
        mb: 3, fontFamily: 'Lexend Deca', fontWeight: 700,
      }}
    >
      {title}
    </Typography>
    <Table
      sx={{
        minWidth: 320,
      }}
      aria-label="simple table"
    >
      {children}
    </Table>
  </TableContainer>
);

export default ProductTableContainer;
