import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import breadcrumbSlice from './slices/breadcrumbSlice'
import cartSlice from './slices/cartSlice'
export default configureStore({
  reducer: {
    breadcrumb : breadcrumbSlice,
    cart : cartSlice,
    abrar : counterReducer
  },
})