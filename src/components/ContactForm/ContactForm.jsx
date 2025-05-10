import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { useState } from 'react';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          value={name}
          name="name"
          required
          onChange={e => setName(e.target.value)}
        />
      </label>

      <label>
        Number
        <input
          type="tel"
          value={number}
          name="number"
          required
          onChange={e => setNumber(e.target.value)}
        />
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
