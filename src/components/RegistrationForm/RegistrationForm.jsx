import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { register } from '../../redux/auth/authOperations';
import toast from 'react-hot-toast';
import css from './RegistrationForm.module.css';

import { Box, TextField, Button, Paper, Container, Typography } from '@mui/material';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
    if (name === 'name') setName(value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await dispatch(register({ name, email, password })).unwrap();
      toast.success('Реєстрація успішна!');
    } catch (error) {
      if (error === 'Request failed with status code 400') {
        toast.error('Користувач із таким email уже існує.');
      } else {
        toast.error('Помилка при реєстрації. Спробуйте ще раз.');
      }
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ p: 4, mt: 6 }}>
        <Typography variant="h6" align="center" gutterBottom>
        Sign up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} className={css.form}>
          <TextField
            fullWidth
            margin="normal"
            label="Name"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
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
          Sign up
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default RegistrationForm;
