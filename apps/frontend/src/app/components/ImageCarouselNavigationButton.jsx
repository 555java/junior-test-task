import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';

export default function ImageCarouselNavigateButton({ direction, onClick }) {
  if (direction === 'forward') {
    return (
      <IconButton
        onClick={onClick}
        sx={{
          height: '30px',
          width: '30px',
          borderRadius: '50%',
          bgcolor: '#eeeeee',
          position: 'absolute',
          top: '45%',
          right: '5px',
          padding: '0',
        }}
      >
        <NavigateNextOutlinedIcon />
      </IconButton>
    );
  }
  if (direction === 'backward') {
    return (
      <IconButton
        onClick={onClick}
        sx={{
          height: '30px',
          width: '30px',
          borderRadius: '50%',
          bgcolor: '#eeeeee',
          position: 'absolute',
          top: '45%',
          left: '5px',
          padding: '0',
        }}
      >
        <NavigateBeforeOutlinedIcon />
      </IconButton>
    );
  }
  return null;
}
