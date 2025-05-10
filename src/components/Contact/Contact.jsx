import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import Modal from '../Modal/Modal';
import EditContactForm from '../EditContactForm/EditContactForm';
import toast from 'react-hot-toast';

import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';

import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';

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
    <>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <PersonIcon fontSize="small" />
            {contact.name}
          </Typography>
          <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <PhoneIcon fontSize="small" />
            {contact.number}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'flex-end', px: 2 }}>
          <Button variant="outlined" size="small" onClick={() => setIsEditModalOpen(true)}>
            Edit
          </Button>
          <Button variant="contained" color="error" size="small" onClick={() => setIsDeleteModalOpen(true)}>
            Delete
          </Button>
        </CardActions>
      </Card>

      <Dialog open={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)}>
        <DialogTitle>Delete confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Are you sure you want to delete this contact?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsDeleteModalOpen(false)} color="inherit">
          Cancel
          </Button>
          <Button onClick={handleDelete} variant="contained" color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {isEditModalOpen && (
        <Modal
          onClose={() => setIsEditModalOpen(false)}
          onSave={() => document.getElementById('edit-form')?.requestSubmit()}
        >
          <EditContactForm contact={contact} onClose={() => setIsEditModalOpen(false)} />
        </Modal>
      )}
    </>
  );
};

export default Contact;
