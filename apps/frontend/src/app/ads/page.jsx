'use client';

import React, { useState, useEffect } from 'react';
import { Box, Container } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import Grid from '@mui/material/Unstable_Grid2';
import 'react-toastify/dist/ReactToastify.css';
import AdsList from '../components/AdsList';
import Loader from '../components/Loader';
import FiltersForm from '../components/FiltersForm';

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
    let searchString = '';
    Object.keys(filters).forEach((prop) => {
      if (filters[prop]) {
        searchString += `${prop.toString()}=${filters[prop]}&`;
      }
    });
    searchString = searchString.slice(0, -1);
    fetchAds(searchString, setLoading, setAds);
  }, [filters]);

  return (
    <>
      <Container maxWidth="xl" sx={{ mt: '20px' }}>
        <Grid container flexDirection="column" alignItems="center">
          <Grid container justifyContent="center" alignItems="center">
            <Grid>
              <h1 style={{ fontSize: '26px', color: '#1976d2' }}>Ads list</h1>
            </Grid>
            <Grid>
              <Box sx={{ ml: '20px' }}>
                <FiltersForm setFilters={setFilters} />
              </Box>
            </Grid>
          </Grid>
          {loading ? <Loader /> : <AdsList ads={ads} />}
        </Grid>
      </Container>
      <ToastContainer />
    </>
  );
};

export default Page;
