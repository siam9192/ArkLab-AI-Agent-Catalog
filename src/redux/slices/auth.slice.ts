import { createSlice } from "@reduxjs/toolkit";

interface IUser
  extends Partial<{
    image: string;
    name: string;
    email: string;
  }> {}

interface IInitialState {
  isUserExist: boolean;
  user: IUser | null;
}

const initialState: IInitialState = {
  isUserExist: false,
  user: null,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setUser: (state, actions) => {
      const payload = actions.payload; //User basic info it could be null
      state.user = payload;
      state.isUserExist = true; //payload not null set true or set false
    },
    resetUser: (state) => {
      state.user = null;
      state.isUserExist = false;
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
