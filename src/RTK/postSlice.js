import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = { postsUpload: [], error: null };

// fetch Data
export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await fetch("http://localhost:3009/blogPosts");
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// post Data
export const postposts = createAsyncThunk(
  "posts/postposts",
  async (item, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await fetch("http://localhost:3009/blogPosts", {
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

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fetch Data
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.postsUpload = [...action.payload];
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.error = action.payload;
    });
    // Post Data
    builder.addCase(postposts.fulfilled, (state, action) => {
      state.postsUpload.push(action.payload);
    });
    builder.addCase(postposts.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export default postSlice.reducer;
