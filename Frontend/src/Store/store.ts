// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import favorites from "./slices/favoriteSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favorites,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
