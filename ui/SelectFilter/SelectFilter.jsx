// src/submodule/ui/SelectFilter/SelectFilter.jsx
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const SelectFilter = ({ 
  label, 
  value, 
  onChange, 
  options, 
  sx,
  size = "small",
  ...props 
}) => {
  return (
    <FormControl 
      size={size}
      sx={{ 
        minWidth: 200,
        ...sx 
      }}
    >
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        label={label}
        onChange={onChange}
        {...props}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectFilter;