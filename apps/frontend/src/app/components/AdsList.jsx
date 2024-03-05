import React from 'react';
import { Alert, Box } from '@mui/material';

import AdsCard from './AdsCard';

const AdsList = ({ ads }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      mt: '20px',
    }}
    maxWidth="1080px"
    minWidth="540px"
  >
    {ads.length === 0 ? (
      <Alert severity="info" sx={{ mt: '20px' }}>
        Nothing found for this search
      </Alert>
    ) : (
      ads.map((ad) => <AdsCard ad={ad} key={ad.id} />)
    )}
  </Box>
);

export default AdsList;
