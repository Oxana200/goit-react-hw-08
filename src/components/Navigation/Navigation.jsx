import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

import { Stack, Button } from '@mui/material';

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <Stack direction="row" spacing={2}>
        <Button
          component={NavLink}
          to="/"
          className={css.link}
          color="inherit"
        >
          Home
        </Button>
        <Button
          component={NavLink}
          to="/contacts"
          className={css.link}
          color="inherit"
        >
          Contacts
        </Button>
      </Stack>
    </nav>
  );
};

export default Navigation;
