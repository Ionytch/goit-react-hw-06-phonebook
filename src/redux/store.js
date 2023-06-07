import { configureStore } from '@reduxjs/toolkit';
// import { legacy_createStore as createStore } from 'redux';
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import { rootReducer } from './reducer';

import { contactsReducer } from './contactSlice';
import { filtersReducer } from './filterSlice';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';


export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filtersReducer,
    },
     middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export const persistor = persistStore(store);
// const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhancer);