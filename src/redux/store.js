import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './contacts/contacts-slice';

export const store = configureStore({
    reducer: rootReducer,
});

// import { configureStore } from '@reduxjs/toolkit';
// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import rootReducer from '../contacts/contactsSlice';

// const persistConfig = {
//     key: 'root',
//     storage,
//     whitelist: ['contacts'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//     reducer: persistedReducer,
//     middleware: getDefaultMiddleware =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [
//                     FLUSH,
//                     REHYDRATE,
//                     PAUSE,
//                     PERSIST,
//                     PURGE,
//                     REGISTER,
//                 ],
//             },
//         }),
// });
// export const persistor = persistStore(store);