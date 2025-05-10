import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { editContact } from '../../redux/contacts/operations';
import toast from 'react-hot-toast';

import { TextField, Box } from '@mui/material';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  number: Yup.string().required('Required'),
});

const EditContactForm = ({ contact, onClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = values => {
    dispatch(editContact({ id: contact.id, ...values }))
      .unwrap()
      .then(() => {
        toast.success('Контакт оновлено!');
        onClose();
      })
      .catch(() => {
        toast.error('Помилка при оновленні контакту.');
      });
  };

  return (
    <Formik
      initialValues={{ name: contact.name, number: contact.number }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ errors, touched, handleChange, handleSubmit, values }) => (
        <Box
          component="form"
          id="edit-form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}
        >
          <TextField
            label="Name"
            name="name"
            value={values.name}
            onChange={handleChange}
            error={Boolean(touched.name && errors.name)}
            helperText={touched.name && errors.name}
            fullWidth
          />
          <TextField
            label="Number"
            name="number"
            value={values.number}
            onChange={handleChange}
            error={Boolean(touched.number && errors.number)}
            helperText={touched.number && errors.number}
            fullWidth
          />
        </Box>
      )}
    </Formik>
  );
};

export default EditContactForm;
