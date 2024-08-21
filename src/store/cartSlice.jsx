import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [], counter: 1 };

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        increaseItem(state) {
            state.counter += 1;
        },
        decreaseItem(state) {
            state.counter -= 1;
        },
        addItemToCart(state, action) {
            const existingItemIndex = state.items.findIndex((item) => item.id === action.payload.id);
            if (existingItemIndex >= 0) {
                state.items[existingItemIndex].quantity += state.counter;
            } else {
                state.items.push({ ...action.payload, quantity: state.counter });
            }
            state.counter = 1;
        },
        removeItemFromCart(state, action) {
            const existingItemIndex = state.items.findIndex((item) => item.id === action.payload.id);
            if (existingItemIndex >= 0) {
                if (state.items[existingItemIndex].quantity > 1) {
                    state.items[existingItemIndex].quantity -= 1;
                } else {
                    state.items.splice(existingItemIndex, 1);
                }
            }
        },
        deleteItemFromCart(state, action) {
            const existingItemIndex = state.items.findIndex((item) => item.id === action.payload.id);
            if (existingItemIndex >= 0) {
                state.items.splice(existingItemIndex, 1);
            }
        },
        increaseItemCount(state, action) {
            const existingItemIndex = state.items.findIndex((item) => item.id === action.payload.id);
            if (existingItemIndex >= 0) {
                state.items[existingItemIndex].quantity += 1;
            }
        },
        clearCart(state) {
            state.items = [];
            state.counter = 1;
        },
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
