import React from 'react';
import { Box, Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import FilterMenu from './FilterMenu';
import AdsCard from './AdsCard';

const AdsList = ({ ads }) => (
  <Container maxWidth="xl">
    <Grid container flexDirection="column" alignItems="center">
      <Grid container justifyContent="center" alignItems="center">
        <Grid>
          <h1 style={{ fontSize: '26px', color: '#1976d2' }}>Ads list</h1>
        </Grid>
        <Grid>
          <Box sx={{ ml: '20px' }}>
            <FilterMenu />
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        maxWidth="1080px"
        minWidth="540px"
      >
        {ads.map((ad) => (
          <AdsCard ad={ad} key={ad.id} />
        ))}
      </Box>
    </Grid>
  </Container>
);

export default AdsList;
