import { createSlice } from '@reduxjs/toolkit';
import {
    fetchContacts,
    addContact,
    deleteContact,
    editContact,
} from './contactsOperations';
import { logout } from '../auth/authOperations';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: [],
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.fulfilled, (_, action) => {
                return action.payload;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                return state.filter(contact => contact.id !== action.payload);
            })
            .addCase(editContact.fulfilled, (state, action) => {
                return state.map(contact =>
                    contact.id === action.payload.id ? action.payload : contact
                );
            })
            .addCase(logout.fulfilled, () => []);
    },
});

export default contactsSlice.reducer;
