/* eslint-disable no-nested-ternary */

'use client';

import React, { useState, useEffect, Fragment, useCallback } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Grid from '@mui/material/Unstable_Grid2';
import { Alert, CircularProgress } from '@mui/material';
import AdDetails from '../../components/AdDetails';

const fetchAd = async (id, setLoading, setAd) => {
  try {
    setLoading(true);
    const response = await fetch(`/api/ads/${id}`);
    const adData = await response.json();
    if (adData.id) {
      setAd(adData);
    } else {
      throw Error(adData);
    }
  } catch (err) {
    setAd(null);
  } finally {
    setLoading(false);
  }
};

const Page = ({ params }) => {
  const [ad, setAd] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAd(params.id, setLoading, setAd);
  }, [params.id]);
  return (
    <>
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
      ) : ad === null ? (
        <Alert severity="error">
          Something went wrong with loading the ad.
        </Alert>
      ) : (
        <AdDetails ad={ad} />
      )}
      <ToastContainer />
    </>
  );
};

export default Page;
