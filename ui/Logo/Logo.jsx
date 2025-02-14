// src/submodule/ui/Logo/Logo.jsx
import { Box, Typography } from '@mui/material';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

const Logo = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <SportsSoccerIcon sx={{ fontSize: 32, color: 'primary.main' }} />
      <Typography
        variant="h6"
        component="div"
        sx={{
          fontWeight: 700,
          display: { xs: 'none', sm: 'block' }
        }}
      >
        Team Maker
      </Typography>
    </Box>
  );
};

export default Logo;