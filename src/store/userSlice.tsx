import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { IUser, IUsers } from "../types";

const initialState: IUsers = {
  users: [],
};

export const fetchUsers = createAsyncThunk<IUser[]>(
  'user/fetchUsers',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data as IUser[];
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<IUser[]>) => {
      state.users = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  }
});

export const { setUsers } = userSlice.actions;
export default userSlice.reducer;
