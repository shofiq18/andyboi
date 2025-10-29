












// // feature/user/userSlice.ts
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import Cookies from "js-cookie";

// export interface UserProfile {
//   id: string;
//   name: string;
//   email: string;
//   role?: string;
// }

// interface UserState {
//   user: UserProfile | null;
//   accessToken: string | null;
//   refreshToken: string | null;
// }

// const initialState: UserState = {
//   user: null,
//   accessToken: null,
//   refreshToken: null,
// };

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     setCredentials: (
//       state,
//       action: PayloadAction<{
//         user: UserProfile;
//         accessToken: string;
//         refreshToken?: string;
//       }>
//     ) => {
//       state.user = action.payload.user;
//       state.accessToken = action.payload.accessToken;
//       state.refreshToken = action.payload.refreshToken ?? null;

//       Cookies.set("accessToken", action.payload.accessToken, {
//         secure: process.env.NODE_ENV === "production",
//         sameSite: "strict",
//         expires: 7,
//       });
//     },

//     logout: (state) => {
//       state.user = null;
//       state.accessToken = null;
//       state.refreshToken = null;
//       Cookies.remove("accessToken");
//     },
//   },
// });

// export const { setCredentials, logout } = userSlice.actions;
// export default userSlice.reducer;


// feature/user/userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role?: string;
}

interface UserState {
  user: UserProfile | null;
  accessToken: string | null;
  refreshToken: string | null;
  guestSession: string | null; // NEW
  isGuest: boolean; // NEW
}

const initialState: UserState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  guestSession: null,
  isGuest: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{
        user: UserProfile;
        accessToken: string;
        refreshToken?: string;
      }>
    ) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken ?? null;
      state.guestSession = null;
      state.isGuest = false;

      Cookies.set("accessToken", action.payload.accessToken, {
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        expires: 7,
      });
    },

    // NEW: Set Guest Session
    setGuestSession: (state, action: PayloadAction<{ guestSession: string }>) => {
      state.guestSession = action.payload.guestSession;
      state.isGuest = true;
      state.user = {
        id: action.payload.guestSession,
        name: "Guest",
        email: "guest@example.com",
        role: "GUEST",
      };
      state.accessToken = null;
      state.refreshToken = null;
      Cookies.remove("accessToken");
    },

    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.guestSession = null;
      state.isGuest = false;
      Cookies.remove("accessToken");
    },
  },
});

export const { setCredentials, setGuestSession, logout } = userSlice.actions;
export default userSlice.reducer;