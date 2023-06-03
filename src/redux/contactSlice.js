import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsInitialState=[];

const contactsSlice = createSlice({
name: 'contacts',
initialState:contactsInitialState,
reducers:{
        addContact:{
       reducer (state, action) {
    state.push(action.payload);
        },
    prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
            },
        };
      },
},
deleteContact (state, action) {return state.filter(contact=>contact.id!==action.payload)},
// deleteContact(state, action){
// const index = state.findIndex(task => task.id === action.payload);
//       state.splice(index, 1);
// },

}
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;