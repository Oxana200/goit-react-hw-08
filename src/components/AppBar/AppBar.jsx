import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';

import { AppBar as MuiAppBar, Toolbar, Box } from '@mui/material';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <MuiAppBar position="static" color="primary" sx={{ mb: 4 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Navigation />
        <Box>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
