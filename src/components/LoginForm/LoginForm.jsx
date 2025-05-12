import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { login } from '../../redux/auth/operations';
import toast from 'react-hot-toast';

import { Box, TextField, Button, Paper, Container, Typography } from '@mui/material';

const LoginForm = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await dispatch(login({ email, password })).unwrap();
      toast.success('Вхід успішний!');
    } catch (error) {
      if (error === 'Request failed with status code 400') {
        toast.error('Невірна пошта або пароль.');
      } else {
        toast.error('Помилка входу. Спробуйте пізніше.');
      }
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ p: 4, mt: 6 }}>
        <Typography variant="h6" align="center" gutterBottom>
          Login to your account
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
          Log in
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default LoginForm;
