import { Box, Typography, InputBase, IconButton, Avatar, Tooltip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import { useTranslation } from 'react-i18next';
import userAvatar from '../../assets/talia.webp';

interface HeaderProps {
  handleLogout: () => void;
}

const Header = ({ handleLogout }: HeaderProps) => {
  const { t } = useTranslation();

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        width: '100%' 
      }}
    >
      <Typography variant="h5">{t('welcomeMessage')}</Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Box sx={{ position: 'relative', backgroundColor: '#f4f7fc', borderRadius: '8px' }}>
          <Box sx={{ p: '0 10px', height: '100%', position: 'absolute', display: 'flex', alignItems: 'center' }}>
            <SearchIcon color="action" />
          </Box>
          <InputBase
            placeholder="Search..."
            sx={{ pl: '40px', pr: '10px', py: '5px' }}
          />
        </Box>

        <IconButton sx={{ backgroundColor: '#eef5ff' }}>
          <NotificationsNoneOutlinedIcon />
        </IconButton>
        <IconButton sx={{ backgroundColor: '#eef5ff' }}>
          <MailOutlineIcon />
        </IconButton>
<Avatar alt="User Avatar" src={userAvatar} /> 

        <Tooltip title={t('logoutButton')}>
          <IconButton onClick={handleLogout} sx={{ ml: 1, backgroundColor: '#eef5ff' }}>
            <LogoutIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default Header;