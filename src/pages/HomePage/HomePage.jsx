import { Container, Typography, Box, Paper } from '@mui/material';

const HomePage = () => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          height: 'calc(100vh - 120px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Paper elevation={3} sx={{ p: 5, textAlign: 'center' }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome to the Contact Book
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Keep your contacts safe and organized.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default HomePage;
