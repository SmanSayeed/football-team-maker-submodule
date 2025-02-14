// src/submodule/ui/SearchInput/SearchInput.jsx
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchInput = ({ placeholder, value, onChange, ...props }) => {
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
        }
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};

export default SearchInput;