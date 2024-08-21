import { createSlice } from '@reduxjs/toolkit';

const initialState = { isCartShown: false };

const uiSlice = createSlice({
    name: 'ui',
    initialState: initialState,
    reducers: {
        showCart(state) {
            state.isCartShown = true;
        },
        hideCart(state) {
            state.isCartShown = false;
        },
    },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
