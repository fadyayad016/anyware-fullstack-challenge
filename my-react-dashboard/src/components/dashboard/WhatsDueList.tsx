import { Box, Button, Typography, Link, CircularProgress } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useSelector } from 'react-redux';
import React, { useState } from 'react'; 
import type { RootState } from '../../store';
import { useTranslation } from 'react-i18next';

const WhatsDueList = () => {
  const { t } = useTranslation();
  const { items: dueItems, status, error } = useSelector((state: RootState) => state.whatsDue);

  const [showAll, setShowAll] = useState(false);

  const handleToggleShowAll = (event: React.MouseEvent) => {
    event.preventDefault();
    setShowAll(!showAll);
  };

  const dueItemsToDisplay = showAll ? dueItems : dueItems.slice(0, 2);

  let content;

  if (status === 'loading') {
    content = (
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
        <CircularProgress />
      </Box>
    );
  } else if (status === 'succeeded') {
    content = (
      <>
        {dueItemsToDisplay.map((item) => (
          <Box key={item._id} sx={{ mb: 2, border: '1px solid #eee', p: 2, borderRadius: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <AssignmentIcon color="primary" sx={{ mr: 1.5 }} />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>{item.title}</Typography>
                <Typography variant="body2" color="text.secondary">{`Course: ${item.course}`}</Typography>
                <Typography variant="body2" color="text.secondary">{`Topic: ${item.topic}`}</Typography>
                <Typography variant="body2" color="text.secondary">{`Due to: ${item.date}`}</Typography>
              </Box>
            </Box>
            <Button 
              variant="outlined" 
              size="small" 
              fullWidth 
              sx={{ textTransform: 'none', fontWeight: 'bold' }}
            >
              {item.type === 'Quiz' ? 'Start Quiz' : 'Solve Assignment'}
            </Button>
          </Box>
        ))}
      </>
    );
  } else if (status === 'failed') {
    content = <Typography color="error">Error: {error}</Typography>;
  }

  return (
    <Box sx={{ backgroundColor: 'white', p: 2, borderRadius: 2, height: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6">{t('whatsDue')}</Typography>
        {dueItems.length > 2 && (
          <Link href="#" onClick={handleToggleShowAll} underline="hover" sx={{ color: 'text.secondary' }}>
            {showAll ? 'Show Less' : t('allLink')}
          </Link>
        )}
      </Box>
      
      {content}
    </Box>
  );
};

export default WhatsDueList;