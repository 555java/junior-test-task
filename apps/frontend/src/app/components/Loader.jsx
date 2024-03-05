'use client';

import React from 'react';
import { CircularProgress } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

const Loader = () => (
  <Grid
    container
    direction="column"
    justifyContent="center"
    alignItems="center"
    sx={{
      height: '100vh',
    }}
  >
    <Grid>
      <CircularProgress />
    </Grid>
  </Grid>
);
export default Loader;
