import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = { products: [], loading: false, error: null, item: {} };

// fetch Data
export const fetchData = createAsyncThunk(
  "posts/fetchData",
  async (query, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await fetch(`http://localhost:3009/products?${query}`);
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// delete Data
export const deleteData = createAsyncThunk(
  "posts/deleteData",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await fetch(`http://localhost:3009/products/${id}`, {
        method: "delete",
      });

      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// post Data
export const postData = createAsyncThunk(
  "posts/postData",
  async (item, thunkApi) => {
    const { rejectWithValue, getState } = thunkApi;
    const { authSlice } = getState();
    item.userId = authSlice.id;
    try {
      const res = await fetch("http://localhost:3009/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });
      return item;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// Detail Data
export const DetailData = createAsyncThunk(
  "posts/DetailData",
  async (itemId, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await fetch(`http://localhost:3009/products/${itemId}`);
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// Edit Data
export const EditlData = createAsyncThunk(
  "posts/EditlData",
  async (item, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await fetch(`http://localhost:3009/products/${item.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });
      return item;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const productSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    clearItem(state) {
      state.item = null;
    },
  },
  extraReducers: (builder) => {
    // fetch Data
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.products = [...action.payload];
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // Post Data
    builder.addCase(postData.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(postData.fulfilled, (state, action) => {
      state.loading = false;
      state.products.push(action.payload);
    });
    builder.addCase(postData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    //delete Data
    builder.addCase(deleteData.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteData.fulfilled, (state, action) => {
      state.loading = false;
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    });
    builder.addCase(deleteData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // DetailData Data
    builder.addCase(DetailData.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(DetailData.fulfilled, (state, action) => {
      state.loading = false;
      state.item = action.payload;
    });
    builder.addCase(DetailData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // EditlData Data
    builder.addCase(EditlData.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(EditlData.fulfilled, (state, action) => {
      state.loading = false;
      state.item = action.payload;
    });
    builder.addCase(EditlData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
export const { clearItem } = productSlice.actions;

export default productSlice.reducer;
