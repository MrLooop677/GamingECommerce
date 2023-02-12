import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// fetch users
export const fetchUsers = createAsyncThunk(
  "posts/fetchUsers",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await fetch('http://localhost:3009/users');
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// post user
export const postUser = createAsyncThunk(
  "posts/postUser",
  async (item, thunkApi) => {
    const { rejectWithValue, getState } = thunkApi;
    const { authSlice } = getState();
    item.userId = authSlice.id;
    try {
      const res = await fetch("http://localhost:3009/users", {
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
export const authSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    userLogged: JSON.parse(localStorage.getItem("userLogged")),
    isRegistered: false,
  },
  reducers: {
    logIn(state, action) {
      localStorage.setItem("userLogged",JSON.stringify( action.payload.fName))
      state.userLogged = JSON.parse(localStorage.getItem("userLogged"))
    },
    checkOut(state) {
      localStorage.setItem("userLogged",JSON.stringify( null))
      state.userLogged = JSON.parse(localStorage.getItem("userLogged"))

    },
    // logOut(state) {
    //   state.users = null;
    // },
    register(state) {
      state.users = null;
      state.isRegistered = true;
    },
    signIn(state) {
      state.isRegistered = false;
    },
    // closeRegister(state) {
    //   state.isRegistered = false;
    // },
  },
  extraReducers: (builder) => {
    // fetch Data

    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.error = action.payload;
    });

    // post Data
    builder.addCase(postUser.fulfilled, (state, action) => {
      state.users.push(action.payload);
    });
    builder.addCase(postUser.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { logIn, register, signIn, checkOut } = authSlice.actions;

export default authSlice.reducer;
