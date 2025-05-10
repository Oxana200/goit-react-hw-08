import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filters/filtersSlice';
import { TextField, Box } from '@mui/material';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Box sx={{ mt: 2 }}>
      <TextField
        label="Пошук за ім’ям або номером"
        type="text"
        variant="outlined"
        fullWidth
        onChange={handleChange}
      />
    </Box>
  );
};

export default Filter;

