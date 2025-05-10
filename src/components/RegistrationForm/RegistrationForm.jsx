import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { register } from '../../redux/auth/authOperations';
import toast from 'react-hot-toast';
import css from './RegistrationForm.module.css';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
    if (name === 'name') setName(value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await dispatch(register({ name, email, password })).unwrap();
      toast.success('Реєстрація успішна!');
    } catch (error) {
      if (error === 'Request failed with status code 400') {
        toast.error('Користувач із таким email уже існує.');
      } else {
        toast.error('Помилка при реєстрації. Спробуйте ще раз.');
      }
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Ваше ім’я"
        value={name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Електронна пошта"
        value={email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Пароль"
        value={password}
        onChange={handleChange}
        required
      />
      <button type="submit">Зареєструватися</button>
    </form>
  );
};

export default RegistrationForm;
