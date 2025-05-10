import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsOperations';
import Modal from '../Modal/Modal';
import EditContactForm from '../EditContactForm/EditContactForm';
import toast from 'react-hot-toast';
import css from './Contact.module.css';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleDelete = () => {
    dispatch(deleteContact(contact.id))
      .unwrap()
      .then(() => toast.success('Контакт видалено!'))
      .catch(() => toast.error('Помилка видалення контакту'));
    setIsDeleteModalOpen(false);
  };

  return (
    <li className={css.contactItem}>
      <p className={css.contactText}>
        {contact.name}: {contact.number}
      </p>

      <div className={css.buttons}>
        <button onClick={() => setIsEditModalOpen(true)}>Edit</button>
        <button onClick={() => setIsDeleteModalOpen(true)}>Delete</button>
      </div>

      {isDeleteModalOpen && (
        <Modal onClose={() => setIsDeleteModalOpen(false)}>
          <p>Are you sure you want to delete this contact?</p>
          <div className={css.modalActions}>
            <button onClick={handleDelete}>Yes</button>
            <button onClick={() => setIsDeleteModalOpen(false)}>Cancel</button>
          </div>
        </Modal>
      )}

      {isEditModalOpen && (
        <Modal onClose={() => setIsEditModalOpen(false)}>
          <EditContactForm contact={contact} onClose={() => setIsEditModalOpen(false)} />
        </Modal>
      )}
    </li>
  );
};

export default Contact;
