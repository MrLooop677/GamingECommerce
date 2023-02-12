import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// fetch users
export const fetchFormData = createAsyncThunk(
  "posts/fetchFormData",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await fetch(`http://localhost:3009/contactUsMessages`);
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// delete Data
export const deleteMessage = createAsyncThunk(
  "posts/deleteMessage",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await fetch(`http://localhost:3009/contactUsMessages/${id}`, {
        method: "delete",
      });

      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// post user
export const postForm = createAsyncThunk(
  "posts/postForm",
  async (item, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await fetch("http://localhost:3009/contactUsMessages", {
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
export const contactSlice = createSlice({
  name: "formData",
  initialState: {
    formData: [],
    error: null,
  },
  reducers: {
    deteteMessage(state, action) {
      state.formData = state.formData.filter(
        (product) => product.id !== action.payload
      );
    },
    clearMessage(state) {
      state.formData = [];
    },
  },
  extraReducers: (builder) => {
    // fetch Data

    builder.addCase(fetchFormData.fulfilled, (state, action) => {
      state.formData = action.payload;
    });
    builder.addCase(fetchFormData.rejected, (state, action) => {
      state.error = action.payload;
    });

    // post Data
    builder.addCase(postForm.fulfilled, (state, action) => {
      state.formData.push(action.payload);
    });
    builder.addCase(postForm.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(deleteMessage.fulfilled, (state, action) => {
      state.loading = false;
      state.formData = state.formData.filter(
        (product) => product.id !== action.payload
      );
    });
    builder.addCase(deleteMessage.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { clearMessage, deteteMessage } = contactSlice.actions;

export default contactSlice.reducer;
