import React from 'react';

import {
  TextField,
  Autocomplete,
  Button,
  Box,
  styled,
} from '@mui/material';

const StyledTextField = styled(TextField)(() => ({
  '.MuiInput-underline:before': {
    borderBottomColor: '#fafafa',
  },
  '.MuiInput-underline:hover:before': {
    borderBottomColor: '#fafafa',
  },
  '.MuiInput-underline:hover:after': {
    borderBottomColor: '#fafafa',
  },
}));

const CheckboxFilter = ({
  filterOptions,
  filterName,
  label,
  onChange,
}) => {
  const selectedOptions = filterOptions.filter((option) => option.selected);

  return (
    <>
      <Autocomplete
        options={filterOptions}
        getOptionLabel={(option) => option.title}
        filterName={filterName}
        style={{ width: '90%', marginBottom: 10 }}
        renderTags={() => null}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        renderOption={(props, option) => (
          <li {...props}>
            {option.title}
          </li>
        )}
        renderInput={(params) => (
          <StyledTextField
            {...params}
            label={label}
            variant="standard"
          />
        )}
        onChange={(_, selectedFilterOptions) => onChange(selectedFilterOptions, filterName)}
      />
      <Box sx={{ mb: 3 }}>
        {selectedOptions.map((option) => (
          <Box
            component="form"
            key={option.id}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              pl: 2,
              width: '90%',
              ':nth-of-type(2n -1)': {
                backgroundColor: '#f2f2f2',
              },
            }}
          >
            <div>{option.title}</div>

            <Button
              sx={{ color: '#141414' }}
              onClick={() => onChange(option, filterName)}
            >
              ✕
            </Button>

          </Box>
        ))}
      </Box>
    </>
  );
};

export default CheckboxFilter;
