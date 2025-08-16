import { Box, Button, Paper, Typography } from '@mui/material';
import examIllustration from '../../assets/images.png';
import { useTranslation } from 'react-i18next'; 

const ExamsTimeCard = () => {
  const { t } = useTranslation();

  return (
    <Paper elevation={2} sx={{ p: 3, borderRadius: 2, backgroundColor: '#eef5ff' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexDirection: { xs: 'column', md: 'row' } }}>
        
        <Box sx={{ flex: 1, flexBasis: { md: '60%' } }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{t('examsTime.title')}</Typography>
          <Typography variant="body1" sx={{ my: 1 }}>
            {t('examsTime.description')}
          </Typography>
          <Button variant="contained" sx={{ mt: 1, backgroundColor: '#00c1a4', '&:hover': { backgroundColor: '#00a78e' } }}>
            {t('examsTime.button')}
          </Button>
        </Box>

        <Box sx={{ flex: 1, flexBasis: { md: '40%' }, textAlign: 'center' }}>
          <Box
            component="img"
            src={examIllustration}
            alt="Exams Illustration"
            sx={{  width: '100%' }}
          />
        </Box>
        
      </Box>
    </Paper>
  );
};

export default ExamsTimeCard;