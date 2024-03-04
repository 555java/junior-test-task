/* eslints-disable react-hooks/exhaustive-deps */
/* eslints-disable no-nested-ternary */

'use client';

import React, { useCallback, useState, useEffect } from 'react';
import { Button, Box, CircularProgress } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdsList from './components/AdsList';

const fetchAds = async (query, setLoading, setAds) => {
  try {
    setLoading(true);
    const response = await fetch(`/api/ads?${query}`);
    const adsData = await response.json();
    if (adsData.results) {
      setAds(adsData.results);
    } else {
      throw Error(adsData);
    }
  } catch (err) {
    setAds([]);
    toast.error(`Error fetching ads. Please try again later.`);
  } finally {
    setLoading(false);
  }
};
const Page = () => {
  const [ads, setAds] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    fetchAds('minPrice=10000', setLoading, setAds);
  }, []);

  return (
    <div>
      <Box alignContent="center">
        <Button onClick={fetchAds} variant="outlined">
          Send an API request
        </Button>
        {loading ? (
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
        ) : (
          <AdsList ads={ads} />
        )}
      </Box>
      <ToastContainer />
    </div>
  );
};

export default Page;
