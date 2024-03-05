import * as React from 'react';
import { Grid } from '@mui/material';

import CardMedia from '@mui/material/CardMedia';

import ImageCarouselNavigateButton from './ImageCarouselNavigationButton';

const ImageCarousel = ({ ad }) => {
  const [imageCount, setImageCount] = React.useState(0);
  const numberOfImages = ad.images.length;
  return (
    <Grid sx={{ position: 'relative' }}>
      {imageCount + 1 < numberOfImages ? (
        <ImageCarouselNavigateButton
          direction="forward"
          onClick={() => {
            if (imageCount + 1 < numberOfImages) {
              setImageCount(imageCount + 1);
            } else {
              setImageCount(imageCount);
            }
          }}
        />
      ) : null}
      {imageCount !== 0 ? (
        <ImageCarouselNavigateButton
          direction="backward"
          onClick={() => {
            if (imageCount > 0) {
              setImageCount(imageCount - 1);
            } else {
              setImageCount(imageCount);
            }
          }}
        />
      ) : null}

      <CardMedia
        component="img"
        image={ad.images[imageCount].image}
        sx={{
          height: '30vh',
          boxSizing: 'border-box',
        }}
        alt={ad.title}
      />
    </Grid>
  );
};
export default ImageCarousel;
