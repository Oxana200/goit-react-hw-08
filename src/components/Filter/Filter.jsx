// components/Filter/Filter.jsx
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filters/filtersSlice';
import { selectFilter } from '../../redux/filters/filterSelectors';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={css.filterContainer}>
      <label className={css.label}>Find contacts by name or number</label>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Search..."
      />
    </div>
  );
};

export default Filter;
