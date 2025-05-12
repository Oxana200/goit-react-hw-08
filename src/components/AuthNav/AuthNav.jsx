import { NavLink } from 'react-router-dom';

import { Stack, Button } from '@mui/material';

const AuthNav = () => {
  return (
    <div className={css.authNav}>
      <Stack direction="row" spacing={2}>
        <Button
          component={NavLink}
          to="/register"
          className={css.link}
          color="inherit"
        >
          Register
        </Button>
        <Button
          component={NavLink}
          to="/login"
          className={css.link}
          color="inherit"
        >
          Login
        </Button>
      </Stack>
    </div>
  );
};

export default AuthNav;
