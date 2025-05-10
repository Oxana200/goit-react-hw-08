// components/ContactList/ContactList.jsx
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/contactsSelectors';
import { selectFilter } from '../../redux/filters/filterSelectors';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter).toLowerCase();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter) ||
    contact.number.includes(filter)
  );

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

