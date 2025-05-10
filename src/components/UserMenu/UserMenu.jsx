import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/authOperations';
import { selectUser } from '../../redux/auth/authSelectors';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.userMenu}>
      <p className={css.userName}>Welcome, {user.name}</p>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default UserMenu;
