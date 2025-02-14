// src/submodule/ui/PlayerCard/PlayerCard.jsx
import { Card, CardContent, CardMedia, Typography, Box, Chip } from '@mui/material';

const PlayerCard = ({ player, onClick }) => {
  return (
    <Card 
      onClick={onClick}
      sx={{ 
        cursor: 'pointer',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.02)'
        }
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={player.playerImage}
        alt={player.playerName}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" noWrap>
          {player.playerName}
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, gap: 1 }}>
          <img 
            src={player.clubImage} 
            alt={player.clubName}
            style={{ width: 20, height: 20 }}
          />
          <Typography variant="body2" color="text.secondary" noWrap>
            {player.clubName}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, gap: 1 }}>
          <img 
            src={player.countryImage} 
            alt="Country"
            style={{ width: 20, height: 15 }}
          />
          <Typography variant="body2" color="text.secondary">
            Age: {player.ageAtThisTime}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Chip 
            label={player.mainPosition}
            size="small"
            color="primary"
            variant="outlined"
          />
          <Typography variant="body2" fontWeight="bold">
            {player.marketValueAtThisTime}{player.marketValueAtThisTimeCurrency}{player.marketValueAtThisTimeNumeral}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PlayerCard;