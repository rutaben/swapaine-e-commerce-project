import React from 'react';

import {
  Typography,
  TextField,
  Autocomplete,
  Button,
  Box,
  styled,
} from '@mui/material';

const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
  '& .MuiAutocomplete-popupIndicator': {
    color: theme.palette.primary.contrastText,
  },
}));

const StyledTextField = styled(TextField)(() => ({
  '& .MuiInput-input': {
    color: 'rgba(0,0,0,0.0)',
  },
}));

const AutocompleteFilter = ({
  filterOptions,
  filterName,
  label,
  onChange,
}) => {
  const selectedOptions = filterOptions.filter((option) => option.selected);

  return (
    <>
      <StyledAutocomplete
        disableClearable
        options={filterOptions}
        getOptionLabel={(option) => option.title}
        filterName={filterName}
        style={{ width: '100%', marginBottom: 10 }}
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
            InputLabelProps={{
              shrink: false,
              style: { color: '#141414' },
            }}
            InputProps={{ ...params.InputProps, disableUnderline: true }}
            label={label}
            variant="standard"
          />
        )}
        onChange={(_, selectedFilterOptions) => onChange(selectedFilterOptions, filterName)}
      />
      <Box sx={{ mb: 1 }}>
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
            <Box>
              <Typography sx={{ fontWeight: 300 }}>
                {option.title}
              </Typography>
            </Box>

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

export default AutocompleteFilter;
