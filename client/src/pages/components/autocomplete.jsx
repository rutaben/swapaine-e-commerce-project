import React from 'react';

import {
  TextField,
  Autocomplete,
  Checkbox,
  styled,
} from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

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
}) => (
  <Autocomplete
    multiple
    limitTags={2}
    options={filterOptions}
    getOptionLabel={(option) => option.title}
    disableCloseOnSelect
    filterName={filterName}
    style={{ width: '90%', marginBottom: 10 }}
    isOptionEqualToValue={(option, value) => option.id === value.id}
    // renderTags={() => null}
    renderOption={(props, option) => (
      <li {...props}>
        <Checkbox
          icon={icon}
          checkedIcon={checkedIcon}
          //* perduodu selected reiksme pagal url i checked
          checked={option.selected}
        />
        {option.title}
      </li>
    )}
    renderInput={(params) => (
      <StyledTextField {...params} label={label} />
    )}
    onChange={(e, selectedFilterOptions) => onChange(e, selectedFilterOptions, filterName)}
    // event targetas yra <li></li>

  />
);

export default CheckboxFilter;
