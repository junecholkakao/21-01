import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItem(state, action) {
      const newItem = action.payload
      const existingItem = state.items.find(item=>item.id===newItem.id)
      if (!existingItem) {
        state.items.push({id: newItem.id, name: newItem.name, price: newItem.price, quantity: 1, totalPrice: newItem.price})
      } else {
        existingItem.quantity++
        existingItem.totalPrice += existingItem.price
      }
      state.totalQuantity++
    },
    removeItem(state, action) {
      const id = action.payload
      const existingItem = state.items.find(item=>item.id === id)
      
      if (!existingItem) return

      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item=>item.id !== id)
      } else {
        existingItem.quantity--
        existingItem.totalPrice -= existingItem.price
      }
      state.totalQuantity--
    }
  }
})

export const cartActions = cartSlice.actions
export default cartSlice