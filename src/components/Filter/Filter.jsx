import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filters/filtersSlice';
import { getFilter } from '../../redux/filters/filterSelectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <label>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </label>
  );
};

export default Filter;
