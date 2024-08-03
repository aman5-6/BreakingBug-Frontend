// store.js

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

// Comment: Resolved the shorthand property initializer by changing '=' to ':'.
