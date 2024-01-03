import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
      console.log(action.payload);
    },
    removeUser(state, action) {
      // console.log(action.payload);
      // let removedata = state.indexOf(action.payload)
      // state.splice(removedata,1)
      state.splice(action.payload,1)
    },
    deleteUsers(state, action) {
      // console.log(action.payload);
      // return state =[];
      return [];
    },
  },
});
console.log(userSlice.actions);
export default userSlice.reducer;
export const { addUser,removeUser, deleteUsers} = userSlice.actions;
