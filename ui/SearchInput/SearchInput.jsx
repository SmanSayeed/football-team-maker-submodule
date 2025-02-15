// src/submodule/ui/SearchInput/SearchInput.jsx
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchInput = ({ placeholder, value, onChange, InputProps, sx, ...props }) => {
  return (
    <TextField
      placeholder={placeholder || "Search..."}
      value={value}
      onChange={onChange}
      variant="outlined"
      size="small"
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '20px',
          backgroundColor: 'white',
          transition: 'all 0.2s ease',
        },
        ...sx
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon color="action" />
          </InputAdornment>
        ),
        ...InputProps
      }}
      {...props}
    />
  );
};

export default SearchInput;