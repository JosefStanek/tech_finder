import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    useremail: "",
    isLogged: false,
  },
  reducers: {
    login: (state, actions) => {
      state.useremail = actions.payload;
      state.isLogged = true;
    },
    logout: (state) => {
      state.useremail = "";
      state.isLogged = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
