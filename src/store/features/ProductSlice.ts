import { IProduct } from "./../../types/Product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  products: IProduct[];
}

const initialState: ProductState = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<IProduct[]>) {
      state.products = action.payload;
    },
    addProduct(state, action: PayloadAction<IProduct>) {
      state.products.push(action.payload);
    },
    removeProduct(state, action: PayloadAction<number>) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    updateProduct(state, action: PayloadAction<IProduct>) {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
  },
});

export const { setProducts, addProduct, removeProduct, updateProduct } =
  productsSlice.actions;

export default productsSlice.reducer;
