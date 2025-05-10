import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { login } from '../../redux/auth/authOperations';
import toast from 'react-hot-toast';
import css from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await dispatch(login({ email, password })).unwrap();
      toast.success('Вхід успішний!');
    } catch (error) {
      if (error === 'Request failed with status code 400') {
        toast.error('Невірна пошта або пароль.');
      } else {
        toast.error('Помилка входу. Спробуйте пізніше.');
      }
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
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
      <button type="submit">Увійти</button>
    </form>
  );
};

export default LoginForm;
