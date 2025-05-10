import { useDispatch, useSelector } from 'react-redux';
import { addContact, fetchContacts } from '../../redux/contacts/contactsOperations';
import { selectContacts } from '../../redux/contacts/contactsSelectors';
import { resetFilter } from '../../redux/filters/filtersSlice';
import { useState } from 'react';
import toast from 'react-hot-toast';
import css from './ContactForm.module.css';

import { Box, TextField, Button, Paper, Container, Typography } from '@mui/material';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts) || [];

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isExist = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExist) {
      toast.error(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, number }))
      .unwrap()
      .then(() => {
        toast.success('Контакт додано!');
        setName('');
        setNumber('');
        dispatch(resetFilter());
        dispatch(fetchContacts());
      })
      .catch(() => toast.error('Не вдалося додати контакт.'));
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h6" align="center" gutterBottom>
          Додати контакт
        </Typography>
        <Box component="form" onSubmit={handleSubmit} className={css.form}>
          <TextField
            fullWidth
            margin="normal"
            label="Ім’я"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Телефон"
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            required
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
            Додати
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default ContactForm;
