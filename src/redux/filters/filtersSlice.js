import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
    name: 'filters',
    initialState: '',
    reducers: {
        setFilter: (_, action) => action.payload,
        resetFilter: () => '', // ⬅️ очищення після додавання
    },
});

export const { setFilter, resetFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
