import * as React from 'react';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { useState } from 'react';
import ImageCarousel from './ImageCarousel';

const AdDetails = ({ ad }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  React.useEffect(() => {
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
    <Grid
      sx={{
        padding: '40px',
        height: '100vh',
        margin: '0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Grid>
        <Card
          sx={{
            maxWidth: '100%',
          }}
        >
          <ImageCarousel ad={ad} />
        </Card>
      </Grid>
      <Grid>
        <Box
          id="title-container"
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="body1" component="div">
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
          sx={{
            mt: '5px',
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="body1" component="div">
            {ad.city_name}
          </Typography>
          <Typography sx={{ ml: '20px' }} variant="body1" component="div">
            {ad.price || '0.00'}
          </Typography>
        </Box>
        <Box
          id="city-price-container"
          sx={{
            mt: '40px',
            width: '100%',
          }}
        >
          <Typography
            variant="body1"
            component="div"
            dangerouslySetInnerHTML={{ __html: ad.description }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default AdDetails;
