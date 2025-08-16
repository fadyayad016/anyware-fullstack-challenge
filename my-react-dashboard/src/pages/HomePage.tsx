import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../features/auth/authSlice'; 

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(login()); 
    navigate('/dashboard'); 
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Typography variant="h3">Welcome to the Dashboard</Typography>
      <Button variant="contained" sx={{ mt: 2 }} onClick={handleLogin}>
        Login to View Dashboard
      </Button>
    </Box>
  );
};

export default HomePage;