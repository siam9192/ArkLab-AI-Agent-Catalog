import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth.slice";

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
