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

  const playerImage = validateImageUrl(player.playerImage);
  const clubImage = validateImageUrl(player.clubImage);
  const countryImage = validateImageUrl(player.countryImage);

  return (
    <Card 
      onClick={onClick}
      sx={{ 
        width: 240,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 3
        },
        borderRadius: 2,
        backgroundColor: 'background.paper'
      }}
    >
      {/* Player Image Section */}
      <Box sx={{ height: 200, position: 'relative', bgcolor: 'grey.100' }}>
        {playerImage ? (
          <CardMedia
            component="img"
            image={playerImage}
            alt={player.playerName || 'Player'}
            sx={{ 
              height: '100%',
              objectFit: 'cover'
            }}
            onError={(e) => {
              e.target.src = '/api/placeholder/200/200';
            }}
          />
        ) : (
          <Box sx={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <PersonIcon sx={{ fontSize: 64, color: 'grey.400' }} />
          </Box>
        )}
      </Box>

      {/* Content Section */}
      <CardContent sx={{ p: 2, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Player Name */}
        <Typography 
          variant="h6"
          sx={{
            fontWeight: 600,
            mb: 1.5,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}
        >
          {player.playerName || 'Unknown Player'}
        </Typography>

        {/* Club Info */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          mb: 1.5,
          gap: 1 
        }}>
          {clubImage && (
            <Box
              component="img"
              src={clubImage}
              alt={player.clubName || 'Club'}
              sx={{ 
                width: 24,
                height: 24,
                objectFit: 'contain'
              }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          )}
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}
          >
            {player.clubName || 'Unknown Club'}
          </Typography>
        </Box>

        {/* Position and Age */}
        <Box sx={{ 
          display: 'flex',
          flexWrap: 'wrap',
          gap: 1,
          mb: 'auto'
        }}>
          <Chip
            label={player.mainPosition || 'Unknown'}
            size="small"
            color="primary"
            variant="outlined"
          />
          
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center',
            gap: 0.5
          }}>
            {countryImage && (
              <Box
                component="img"
                src={countryImage}
                alt="Country"
                sx={{ 
                  width: 20,
                  height: 14,
                  objectFit: 'cover'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            )}
            <Typography variant="body2" color="text.secondary">
              Age: {player.ageAtThisTime || 'N/A'}
            </Typography>
          </Box>
        </Box>

        {/* Market Value */}
        <Typography 
          variant="subtitle1"
          color="primary"
          sx={{ 
            mt: 2,
            fontWeight: 600,
            textAlign: 'right'
          }}
        >
          {formatMarketValue(
            player.marketValueAtThisTime,
            player.marketValueAtThisTimeCurrency,
            player.marketValueAtThisTimeNumeral
          )}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default React.memo(PlayerCard);