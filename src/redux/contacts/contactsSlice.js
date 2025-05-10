import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';
import { logout } from '../auth/authOperations';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, state => {
                state.isLoading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.items = payload;
            })
            .addCase(fetchContacts.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
            .addCase(addContact.fulfilled, (state, { payload }) => {
                state.items.push(payload);
            })
            .addCase(deleteContact.fulfilled, (state, { payload }) => {
                state.items = state.items.filter(contact => contact.id !== payload.id);
            })
            .addCase(logout.fulfilled, state => {
                state.items = [];
                state.isLoading = false;
                state.error = null;
            });
    },
});

export default contactsSlice.reducer;
