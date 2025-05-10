import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filters/slice';
import { TextField, Box } from '@mui/material';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Box sx={{ mt: 2 }}>
      <TextField
        label="Search by name or number"
        type="text"
        variant="outlined"
        fullWidth
        onChange={handleChange}
      />
    </Box>
  );
};

export default Filter;

