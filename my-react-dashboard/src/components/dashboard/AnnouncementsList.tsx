import { Box, Avatar, Typography, Link, CircularProgress, Divider } from '@mui/material';
import { useSelector } from 'react-redux';
import React, { useState } from 'react'; // 1. Import useState
import type { RootState } from '../../store';
import { useTranslation } from 'react-i18next';

const AnnouncementsList = () => {
  const { t } = useTranslation();
  const { items: announcements, status, error } = useSelector((state: RootState) => state.announcements);

  // 2. Add a state to track if we should show all announcements
  const [showAll, setShowAll] = useState(false);

  // 3. Create a handler to toggle the state
  const handleToggleShowAll = (event: React.MouseEvent) => {
    event.preventDefault();
    setShowAll(!showAll); // Toggle the boolean value
  };

  // 4. Decide which announcements to display based on the state
  const announcementsToDisplay = showAll ? announcements : announcements.slice(0, 4);

  let content;

  if (status === 'loading') {
    content = (
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
        <CircularProgress />
      </Box>
    );
  } else if (status === 'succeeded') {
    content = (
      <Box>
        {announcementsToDisplay.map((item, index) => (
          <Box key={item._id}>
            <Box sx={{ display: 'flex', alignItems: 'center', py: 2, gap: 3 }}>
              {/* Author Block */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, width: '250px', flexShrink: 0 }}>
                <Avatar src={item.avatarUrl} alt={item.author} />
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    {item.author}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.role}
                  </Typography>
                </Box>
              </Box>

              {/* Content Block */}
              <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
                {item.content}
              </Typography>

            </Box>
            {/* Show the divider only if it's not the last item being displayed */}
            {index < announcementsToDisplay.length - 1 && <Divider />}
          </Box>
        ))}
      </Box>
    );
  } else if (status === 'failed') {
    content = <Typography color="error">Error: {error}</Typography>;
  }

  return (
    <Box sx={{ backgroundColor: 'white', p: 3, borderRadius: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
        <Box>
          <Typography variant="h6">{t('announcements')}</Typography>
          <Typography variant="body2" color="text.secondary">We educate warriors! Keep updated :)</Typography>
        </Box>
        {/* 5. Only show the link if there are more than 4 announcements */}
        {announcements.length > 4 && (
          <Link href="#" onClick={handleToggleShowAll} underline="hover" sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
            {/* Change the text based on the state */}
            {showAll ? 'Show Less' : t('allLink')}
          </Link>
        )}
      </Box>
      {content}
    </Box>
  );
};

export default AnnouncementsList;