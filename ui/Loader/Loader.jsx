// src/submodule/ui/Loader/Loader.jsx
import { Box, CircularProgress, Typography } from '@mui/material';

const Loader = ({ 
  size = 40, 
  thickness = 4, 
  text = "Loading...", 
  showText = true,
  color = "primary",
  sx 
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        ...sx
      }}
    >
      <CircularProgress 
        size={size} 
        thickness={thickness}
        color={color}
      />
      {showText && (
        <Typography 
          variant="body2" 
          color="text.secondary"
        >
          {text}
        </Typography>
      )}
    </Box>
  );
};

export default Loader;