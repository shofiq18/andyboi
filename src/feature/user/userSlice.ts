import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

interface UserProfile {
  id: string;
  name: string;
  email: string;
  role?: string;
}

interface UserState {
  user: UserProfile | null;
  token: string | null;
}

const initialState: UserState = {
  user: null,
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ user: UserProfile; token: string }>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      
      // Note: httpOnly cannot be set from client-side
      Cookies.set("accessToken", action.payload.token, {
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        expires: 7, // 7 days
      });
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      Cookies.remove("accessToken");
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;