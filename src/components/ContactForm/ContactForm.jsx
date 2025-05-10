import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/contactsOperations';
import { selectContacts } from '../../redux/contacts/contactsSelectors';
import { useState } from 'react';
import toast from 'react-hot-toast';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

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
      })
      .catch(() => toast.error('Не вдалося додати контакт.'));
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="number"
        placeholder="Phone"
        value={number}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
