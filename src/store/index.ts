import { configureStore } from "@reduxjs/toolkit";
// import thunkMiddleware from 'redux-thunk';
import postsReducers from "./slices/postsSlice";

export const store = configureStore({
    reducer: {
      posts: postsReducers
    },
    // middleware: [thunkMiddleware],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
