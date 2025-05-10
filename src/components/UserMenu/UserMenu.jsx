import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/authOperations';
import { selectUser } from '../../redux/auth/selectors';

import { Box, Typography, Button } from '@mui/material';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: { xs: 'flex-end', sm: 'center' },
        gap: 1,
        textAlign: 'right',
      }}
    >
      <Typography
        variant="body1"
        noWrap
        sx={{
          fontWeight: 500,
          fontSize: '0.95rem',
          color: '#fff',
          maxWidth: 200,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        Welcome, {user.name}
      </Typography>
      <Button
        variant="contained"
        size="small"
        color="inherit"
        onClick={() => dispatch(logout())}
        sx={{ color: '#1976d2', fontWeight: 600 }}
      >
        Logout
      </Button>
    </Box>
  );
};

export default UserMenu;
