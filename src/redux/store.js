import { configureStore } from '@reduxjs/toolkit';
// import { legacy_createStore as createStore } from 'redux';
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import { rootReducer } from './reducer';

import { contactsReducer } from './contactSlice';
import { filtersReducer } from './filterSlice';


export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filtersReducer,
    },
});



// const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhancer);