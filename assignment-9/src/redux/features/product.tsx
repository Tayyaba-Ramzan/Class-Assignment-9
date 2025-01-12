import { products } from "@/app/utils/mock";
import { Product } from "@/app/utils/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Product[] = products;

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

export const {} = productSlice.actions;

export default productSlice.reducer;