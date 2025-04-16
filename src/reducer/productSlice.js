import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { productMain } from "@/data/products";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
//     const response = await axios.get("YOUR_POS_API_ENDPOINT_HERE");
    // return response.data; // assuming API returns an array of products
    return productMain;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    error: null,
    products: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
