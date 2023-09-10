import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import breadcrumbSlice from './slices/breadcrumbSlice'
export default configureStore({
  reducer: {
    breadcrumb : breadcrumbSlice,
    abrar : counterReducer
  },
})