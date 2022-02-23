import React from 'react';
import {
  Box,
  // MenuItem,
  // FormControl,
  // Select,
  Button,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// const sortingOptions = [
//   { title: 'Įkėlimo datą', disabled: false },
//   { title: 'Kainą didėjant', disabled: false },
//   { title: 'Kainą mažėjant', disabled: false },
// ];

const ProductsPageTopActions = ({ openDrawer }) => (
// const [sorting, setSorting] = React.useState('');

  // const handleChange = (event) => {
  //   setSorting(event.target.value);
  // };

  <Box sx={{
    minWidth: 120, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 2,
  }}
  >
    <Button
      size="large"
      onClick={openDrawer}
      sx={(theme) => ({
        fontSize: theme.typography.body2,
        color: theme.palette.primary.contrastText,
        [theme.breakpoints.down('md')]: {
          display: 'flex',
        },
        [theme.breakpoints.up('md')]: {
          display: 'none',
        },
      })}
    >
      Filtrai
      <ArrowDropDownIcon sx={{ color: 'gray' }} />
    </Button>
    {/* <FormControl sx={{ minWidth: 120 }}>
        <Select
          variant="standard"
          disableUnderline
          id="demo-simple-select"
          displayEmpty
          value={sorting}
          onChange={handleChange}
          sx={(theme) => ({ fontSize: theme.typography.body2, textTransform: 'uppercase' })}
        >
          <MenuItem value="">Rikiuoti pagal:</MenuItem>
          {sortingOptions.map(({ title, disabled }) => (
            <MenuItem disabled={disabled} key={title} value={title}>{title}</MenuItem>
          ))}
        </Select>
      </FormControl> */}
  </Box>
);

export default ProductsPageTopActions;
