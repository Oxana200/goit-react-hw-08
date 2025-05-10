import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';
import { selectFilter } from '../../redux/filters/selectors';
import Contact from '../Contact/Contact';

import { Box, Typography } from '@mui/material';

const ContactList = () => {
  const contacts = useSelector(selectContacts) || [];
  const filter = useSelector(selectFilter) || '';

  const normalizedFilter = filter.toLowerCase();

  const visibleContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(normalizedFilter) ||
      contact.number.includes(normalizedFilter)
  );

  if (visibleContacts.length === 0) {
    return (
      <Typography variant="body1" align="center" sx={{ mt: 4 }}>
        No contacts found.
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
        mt: 4,
        justifyContent: 'center',
      }}
    >
      {visibleContacts.map(contact => (
        <Box key={contact.id} sx={{ flex: '1 1 300px', maxWidth: 400 }}>
          <Contact contact={contact} />
        </Box>
      ))}
    </Box>
  );
};

export default ContactList;


