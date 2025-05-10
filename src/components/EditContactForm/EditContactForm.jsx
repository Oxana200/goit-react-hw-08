import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { editContact } from '../../redux/contacts/contactsOperations';
import toast from 'react-hot-toast';
import css from './EditContactForm.module.css';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  number: Yup.string().required('Required'),
});

const EditContactForm = ({ contact, onClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
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
      {({ errors, touched }) => (
        <Form className={css.form}>
          <label>
            Name:
            <Field name="name" />
            {touched.name && errors.name && (
              <div className={css.error}>{errors.name}</div>
            )}
          </label>
          <label>
            Number:
            <Field name="number" />
            {touched.number && errors.number && (
              <div className={css.error}>{errors.number}</div>
            )}
          </label>
          <div className={css.actions}>
            <button type="submit">Save</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default EditContactForm;
