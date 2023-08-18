import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const url = 'https://course-api.com/react-useReducer-cart-project'
const initialState = {
  cartItems: [],
  amount: 6,
  total: 0,
  isLoading: true,
}

export const getCartItems = createAsyncThunk(
  'cart/getCartItems',
  async (thunkAPI) => {
    try {
      const resp = await axios(url)
      return resp.data
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong')
    }
  }
)

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = []
    },
    removeItem: (state, action) => {
      const itemId = action.payload
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
    },
    increase: (state, action) => {
      const itemId = action.payload
      const selectedItem = state.cartItems.find((item) => item.id === itemId)
      selectedItem.amount = selectedItem.amount + 1
    },
    decrease: (state, action) => {
      const itemId = action.payload
      const selectedItem = state.cartItems.find((item) => item.id === itemId)
      if (selectedItem.amount < 1) {
        selectedItem.amount = 0
      } else selectedItem.amount = selectedItem.amount - 1
    },
    calculateTotal: (state) => {
      let amount = 0
      let total = 0
      state.cartItems.forEach((item) => {
        amount += item.amount
        total += item.amount * item.price
      })
      state.amount = amount
      state.total = total
    },
  },
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true
    },
    [getCartItems.fulfilled]: (state, action) => {
      state.isLoading = false
      state.cartItems = action.payload
    },
    [getCartItems.rejected]: (state) => {
      state.isLoading = false
    },
  },
})
// console.log(cartSlice)
export const {
  clearCart,
  removeItem,
  increase,
  decrease,
  calculateTotal,
  isLoading,
} = cartSlice.actions
export default cartSlice.reducer
