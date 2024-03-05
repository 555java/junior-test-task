'use client';

import React, { useState, useEffect } from 'react';

import { Alert } from '@mui/material';
import AdDetails from '../../components/AdDetails';
import Loader from '../../components/Loader';

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
  if (loading) {
    return <Loader />;
  }
  if (!ad) {
    return (
      <Alert severity="error">Something went wrong with loading the ad.</Alert>
    );
  }
  return <AdDetails ad={ad} />;
};

export default Page;
