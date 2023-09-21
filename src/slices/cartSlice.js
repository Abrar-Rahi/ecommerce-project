import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItem: [],
   
  },
  reducers: {
    addtocart: (state,action) => {

        if(state.cartItem.length == 0){ 
            state.cartItem.push(action.payload)        
        }else{
            let arr = []
            state.cartItem.map(item=>{
                if(item.title == action.payload.title){
                    item.quantity = item.quantity + 1
                    arr.push(item.title)
              }
             })
               if(arr.indexOf(action.payload.title) == -1){
                  state.cartItem.push(action.payload) 
                }

        }
      
       
      
    },
   
    
  },
})


export const { addtocart} = cartSlice.actions

export default cartSlice.reducer