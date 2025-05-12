import { NavLink } from 'react-router-dom';

import { Stack, Button } from '@mui/material';

const Navigation = () => {
  return (
    <nav>
      <Stack direction="row" spacing={2}>
        <Button
          component={NavLink}
          to="/"
          color="inherit"
        >
          Home
        </Button>
        <Button
          component={NavLink}
          to="/contacts"
          color="inherit"
        >
          Contacts
        </Button>
      </Stack>
    </nav>
  );
};

export default Navigation;
