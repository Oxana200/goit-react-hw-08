import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { FaUser, FaPhone } from 'react-icons/fa';

const formatPhone = number => number.replace(/\s*(x|ext)\s*\d+$/i, '').trim();

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div>
      <p><FaUser /> {name}</p>
      <p><FaPhone /> {formatPhone(number)}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Contact;
