import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItem: [],
    addsidecart: false,
   
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
    increase: (state,action)=>{
      state.cartItem.map(item =>{
        if(item.title == action.payload.title){
            item.quantity++
        }
      })
    },
    decrease: (state,action)=>{
      state.cartItem.map((item,index) =>{
        if(item.title == action.payload.title){
          if(item.quantity > 1){
            item.quantity--
          }else{
            state.cartItem.splice(index,1)
          }
        }
      })
    },
    remove: (state,action)=>{
      state.cartItem.map((item,index) =>{
        if(action.payload.title == item.title){
          state.cartItem.splice(index,1)
        }
      })
    },
    sidecart: (state,action)=>{
      state.addsidecart = action.payload
      console.log(state.addsidecart,action.payload);
    },
  },
})


export const { addtocart,increase,decrease,remove,sidecart} = cartSlice.actions

export default cartSlice.reducer