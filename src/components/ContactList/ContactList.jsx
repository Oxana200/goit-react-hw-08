import { useSelector } from 'react-redux';
import { getFilteredContacts } from '../../redux/contacts/selectors';
import Contact from '../Contact/Contact';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <Contact id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

