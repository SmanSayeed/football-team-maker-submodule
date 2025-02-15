// src/submodule/ui/RangeFilter/RangeFilter.jsx
import { Box, TextField, Typography } from '@mui/material';

const RangeFilter = ({
  label,
  minValue,
  maxValue,
  onMinChange,
  onMaxChange,
  minPlaceholder = "Min",
  maxPlaceholder = "Max",
  type = "number",
  size = "small",
  sx,
  ...props
}) => {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column',
      gap: 1,
      ...sx 
    }}>
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>
      <Box sx={{ 
        display: 'flex', 
        gap: 1,
        alignItems: 'center' 
      }}>
        <TextField
          size={size}
          type={type}
          value={minValue}
          onChange={onMinChange}
          placeholder={minPlaceholder}
          sx={{ width: 95 }}
          {...props}
        />
        <Typography variant="body2" color="text.secondary">-</Typography>
        <TextField
          size={size}
          type={type}
          value={maxValue}
          onChange={onMaxChange}
          placeholder={maxPlaceholder}
          sx={{ width: 95 }}
          {...props}
        />
      </Box>
    </Box>
  );
};

export default RangeFilter;