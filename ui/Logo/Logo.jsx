// src/submodule/ui/Logo/Logo.jsx
import { Box, Typography } from '@mui/material';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { Link } from 'react-router';

const Logo = () => {
  return (
    <Link 
      to="/" 
      style={{ 
        textDecoration: 'none',
        color: 'inherit'
      }}
    >
      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 0.5,
          '&:hover': {
            '& .logo-icon': {
              transform: 'rotate(45deg)'
            }
          }
        }}
      >
        <SportsSoccerIcon 
          className="logo-icon"
          sx={{ 
            fontSize: { xs: 24, sm: 28 },
            color: 'primary.main',
            transition: 'transform 0.3s ease-in-out'
          }} 
        />
        <Typography
          variant="subtitle1"
          component="div"
          sx={{
            fontWeight: 600,
            fontSize: { xs: '0.875rem', sm: '1rem' },
            display: { xs: 'none', sm: 'block' },
            color: 'text.primary',
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap'
          }}
        >
          Team Maker
        </Typography>
      </Box>
    </Link>
  );
};

export default Logo;