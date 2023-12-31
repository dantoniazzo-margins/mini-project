import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "@/entities/user/model/interfaces/user";

interface usersProps {
  allUsers: IUser[];
  failureMessage: string;
}
const initialState = {} as usersProps;

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.allUsers = action.payload;
    },
    setFailure: (state, action) => {
      state.failureMessage = action.payload;
    },
  },
});

export const { setUsers, setFailure } = usersSlice.actions;

export const lastSnapshot = (state: any) => state.items;

export default usersSlice.reducer;
