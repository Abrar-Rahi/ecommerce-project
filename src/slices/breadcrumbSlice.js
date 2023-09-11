import { createSlice } from '@reduxjs/toolkit'

export const breadcrumbSlice = createSlice({
  name: 'breadcrumbSlice',
  initialState: {
    name: "",
    
  },
  reducers: {
    pagename: (state,action) => {
      state.previousname = state.currentname
        state.currentname = action.payload
        
        
    },
   
    
  },
})


export const { pagename} = breadcrumbSlice.actions

export default breadcrumbSlice.reducer