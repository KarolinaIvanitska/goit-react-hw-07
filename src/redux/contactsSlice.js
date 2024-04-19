import { createSlice } from "@reduxjs/toolkit";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const initialState = {
  contacts: initialContacts,
};

const slice = createSlice({
  name: "contacts",
  initialState,
  selectors: {
    selectContacts: (state) => state.contacts,
  },
  reducers: {
    addNewContact: (state, { payload }) => {
      state.contacts.push(payload);
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter((item) => item.id !== payload);
    },
  },
});

export const contactsReducer = slice.reducer;
export const { addNewContact, deleteContact } = slice.actions;
export const { selectContacts } = slice.selectors;
