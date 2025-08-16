
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ScheduleIcon from '@mui/icons-material/Schedule';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import GradeIcon from '@mui/icons-material/Grade';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import CampaignIcon from '@mui/icons-material/Campaign';

const sidebarItems = [
  { text: 'Dashboard', icon: <DashboardIcon /> }, 
  { text: 'Schedule', icon: <ScheduleIcon /> },
  { text: 'Courses', icon: <AutoStoriesIcon /> },
  { text: 'Gradebook', icon: <GradeIcon /> },
  { text: 'Performance', icon: <LeaderboardIcon /> },
  { text: 'Announcement', icon: <CampaignIcon /> },
];

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 250,
        height: '100vh',
        backgroundColor: '#00294d', 
        color: 'rgba(255, 255, 255, 0.7)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h5" sx={{ p: 2, fontWeight: 'bold', color: 'white' }}>
        Coligo
      </Typography>
      <List>
        {sidebarItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              sx={{
                '&:hover': {
                  backgroundColor: '#ffffff', 
                  color: '#00294d', 
                  '& .MuiListItemIcon-root': {
                    color: '#00294d', 
                  },
                },
              }}
            >
              <ListItemIcon sx={{ color: 'inherit', minWidth: '40px' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;