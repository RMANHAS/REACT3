import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
   users:[]
  },
  reducers:
   {

    //displaying all users
    getUser:(state,action)=>
    {
state.users= action.payload.map(user=>
  {
  return {id:user.id,name:user.name,email:user.email,city:user.city}
})
    }
   },

  //adding a new user
  // addUser:(state,action)=>
  // {
  //   state.users.puch(action.payload);
  // },
  //delete user
  deleteUser:(state,action)=>
  {
    const id=action.payload.id;
    state.users =  state.payload.filter(uid=> uid!==id)
    // state.users=state.users.filter((uid)=> uid! == id)
  }
})

// Action creators are generated for each case reducer function
export const { getUser,deleteUser } = counterSlice.actions

export default counterSlice.reducer