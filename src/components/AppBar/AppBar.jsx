import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

import {
  AppBar as MuiAppBar,
  Toolbar,
  Box,
  Container,
  useMediaQuery,
  useTheme,
} from '@mui/material';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <MuiAppBar position="static" color="primary" sx={{ mb: 4 }}>
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'stretch' : 'center',
            justifyContent: 'space-between',
            gap: 1,
            py: isMobile ? 1.5 : 1,
          }}
        >
          <Navigation />
          <Box sx={{ ml: isMobile ? 0 : 'auto', alignSelf: isMobile ? 'flex-end' : 'center' }}>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Box>
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
};

export default AppBar;
