// src/submodule/ui/PlayerCard/PlayerCard.jsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Chip } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const PlayerCard = ({ player, onClick }) => {
  // Validate player object
  if (!player || typeof player !== 'object') {
    return null;
  }

  // Validate and sanitize image URLs
  const validateImageUrl = (url) => {
    if (!url || typeof url !== 'string') return null;
    const trimmedUrl = url.trim();
    return trimmedUrl === '' ? null : trimmedUrl;
  };

  // Format market value
  const formatMarketValue = (value, currency, numeral) => {
    if (!value) return 'N/A';
    return `${value}${currency || ''}${numeral || ''}`;
  };

  // Get validated image URLs
  const playerImage = validateImageUrl(player.playerImage);
  const clubImage = validateImageUrl(player.clubImage);
  const countryImage = validateImageUrl(player.countryImage);

  return (
    <Card 
      onClick={onClick}
      sx={{ 
        cursor: 'pointer',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.02)'
        },
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box sx={{ position: 'relative', pt: '56.25%' /* 16:9 aspect ratio */ }}>
        {playerImage ? (
          <CardMedia
            component="img"
            height="200"
            image={playerImage}
            alt={player.playerName || 'Player'}
            sx={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
            onError={(e) => {
              e.target.src = '/api/placeholder/200/200';
            }}
          />
        ) : (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'grey.200'
            }}
          >
            <PersonIcon sx={{ fontSize: 60, color: 'grey.400' }} />
          </Box>
        )}
      </Box>

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div" noWrap>
          {player.playerName || 'Unknown Player'}
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, gap: 1 }}>
          {clubImage ? (
            <Box
              component="img"
              src={clubImage}
              alt={player.clubName || 'Club'}
              sx={{ 
                width: 20, 
                height: 20,
                objectFit: 'contain'
              }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          ) : null}
          <Typography variant="body2" color="text.secondary" noWrap>
            {player.clubName || 'Unknown Club'}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, gap: 1 }}>
          {countryImage ? (
            <Box
              component="img"
              src={countryImage}
              alt="Country"
              sx={{ 
                width: 20, 
                height: 15,
                objectFit: 'contain'
              }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          ) : null}
          <Typography variant="body2" color="text.secondary">
            Age: {player.ageAtThisTime || 'N/A'}
          </Typography>
        </Box>

        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          mt: 'auto'
        }}>
          <Chip 
            label={player.mainPosition || 'Unknown'}
            size="small"
            color="primary"
            variant="outlined"
          />
          <Typography variant="body2" fontWeight="bold">
            {formatMarketValue(
              player.marketValueAtThisTime,
              player.marketValueAtThisTimeCurrency,
              player.marketValueAtThisTimeNumeral
            )}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default React.memo(PlayerCard);