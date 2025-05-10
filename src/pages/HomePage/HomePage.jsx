import { Container, Typography, Box, Paper } from '@mui/material';

const HomePage = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: 'calc(100vh - 120px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: { xs: 2, sm: 4 },
        }}
      >
        <Paper
          elevation={4}
          sx={{
            width: '100%',
            textAlign: 'center',
            p: { xs: 3, sm: 5 },
            borderRadius: 3,
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{
              fontSize: { xs: '1.8rem', sm: '2.4rem' },
              fontWeight: 600,
            }}
          >
            Welcome to the Contact Book
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ fontSize: { xs: '1rem', sm: '1.2rem' } }}
          >
            Keep your contacts safe and organized.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default HomePage;
