import { NavLink } from 'react-router-dom';

import { Stack, Button } from '@mui/material';

const AuthNav = () => {
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Button
          component={NavLink}
          to="/register"
          color="inherit"
        >
          Register
        </Button>
        <Button
          component={NavLink}
          to="/login"
          color="inherit"
        >
          Login
        </Button>
      </Stack>
    </div>
  );
};

export default AuthNav;
