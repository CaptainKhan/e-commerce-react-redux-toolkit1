import { createSlice } from '@reduxjs/toolkit'


export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        amount: 0,
        totalAmount: 0,
        totalPrice: 0,
    },
    reducers: {
        addToCart(state, action) {
            try {
                const { id, title, price, image } = action.payload;
                const item = state.cart.find((item) => item.id === id);
                if (item) {
                    item.amount += 1;
                    state.totalAmount += 1;
                    state.totalPrice += price;
                } else {
                    const newItem = { id, title, price, image, amount: 1 };
                    state.cart = [...state.cart, newItem];
                    state.totalAmount += 1;
                    state.totalPrice += price;
                }
            } catch (err) {
                return err;
            }
        }
    },
})

export const { addToCart} = cartSlice.actions;
export default cartSlice.reducer;