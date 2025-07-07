import { createSlice } from "@reduxjs/toolkit"

interface IInitialState {
    isUserExist:boolean,
    user:any|null,
}



const initialState:IInitialState = {
    isUserExist:false,
    user:null
} 



export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
   setUser:(state,actions)=>{
    const payload =  actions  //User basic info it could be null
    state.user =  payload
    state.isUserExist =  !!payload   //payload not null set true or set false
   }
}
})

export const {setUser} =  authSlice.actions

export default authSlice.reducer