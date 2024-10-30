import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/ProductSlice"; // Update the path as necessary
import commentReducer from "./features/CommentSlice"; // Update the path as necessary

const rootReducer = combineReducers({
  products: productReducer,
  comments: commentReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
