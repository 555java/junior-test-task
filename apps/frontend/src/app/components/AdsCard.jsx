import React, { useState, useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  CardActionArea,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const AdsCard = ({ ad }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favoriteAds = JSON.parse(localStorage.getItem('favoriteAds')) || [];
    setIsFavorite(favoriteAds.some((favAd) => favAd.id === ad.id));
  }, [ad.id]);

  const handleFavoriteClick = () => {
    let favoriteAds = JSON.parse(localStorage.getItem('favoriteAds')) || [];
    if (!isFavorite) {
      favoriteAds.push(ad);
      localStorage.setItem('favoriteAds', JSON.stringify(favoriteAds));
      setIsFavorite(true);
    } else {
      favoriteAds = favoriteAds.filter((favAd) => favAd.id !== ad.id);
      localStorage.setItem('favoriteAds', JSON.stringify(favoriteAds));
      setIsFavorite(false);
    }
  };

  return (
    <Card sx={{ width: 250, margin: '10px' }}>
      <CardActionArea href={`/ads/${ad.id}`}>
        <CardMedia
          sx={{ height: 140 }}
          image={ad?.images[0].thumbnail}
          title="product"
        />
        <CardContent sx={{ mt: '40px', padding: '0 16px 16px' }}>
          <Box
            id="title-container"
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Typography
              variant="body1"
              component="div"
              sx={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {ad.title}
            </Typography>
            <IconButton
              sx={{ ml: '20px', padding: 0 }}
              aria-label="add to favorites"
              onClick={handleFavoriteClick}
            >
              {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
          </Box>
          <Box
            id="city-price-container"
            sx={{ mt: '5px', display: 'flex', justifyContent: 'space-between' }}
          >
            <Typography
              variant="body1"
              component="div"
              sx={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {ad.city_name}
            </Typography>
            <Typography variant="body1" component="div">
              {ad.price || '0.00'}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default AdsCard;
