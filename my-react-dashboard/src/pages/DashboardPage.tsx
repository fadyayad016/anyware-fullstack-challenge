import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../store';
import { fetchAnnouncements } from '../features/dashboard/announcementsSlice';
import { fetchQuizzes } from '../features/dashboard/whatsDueSlice';
import { logout } from '../features/auth/authSlice';
import Sidebar from '../layouts/Sidebar/Sidebar';
import Header from '../layouts/Header/Header';
import ExamsTimeCard from '../components/dashboard/ExamsTimeCard';
import AnnouncementsList from '../components/dashboard/AnnouncementsList';
import WhatsDueList from '../components/dashboard/WhatsDueList';


const DashboardPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchAnnouncements());
    dispatch(fetchQuizzes());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1, 
          backgroundColor: '#f4f7fc',
          // 1. Make this a vertical flex container
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* 2. Place Header outside the scrollable area */}
        {/* We apply horizontal and top padding here */}
        <Box sx={{ px: 3, pt: 3 }}>
          <Header handleLogout={handleLogout} />
        </Box>

        {/* 3. Wrap the content that needs to scroll in a new Box */}
        <Box
          sx={{
            flexGrow: 1, // Allows this box to fill the remaining vertical space
            overflowY: 'auto', // Makes only this box scrollable
            p: 3, // Apply padding to the scrollable content area
          }}
        >
          <Box sx={{ my: 3 }}>
            <ExamsTimeCard />
          </Box>

          <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', md: 'row' } }}>
            <Box sx={{ flex: 1, flexBasis: { md: '65%' } }}>
              <AnnouncementsList />
            </Box>
            <Box sx={{ flex: 1, flexBasis: { md: '35%' } }}>
              <WhatsDueList />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardPage;