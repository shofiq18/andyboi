







import baseApi from "./baseApi";

type AuthSuccessResponse = {
  success: boolean;
  message: string;
};

type UserRegistrationBase = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type UserResponse = {
  success: boolean;
  message?: string;
  data: {
    id: string;
    name: string;
    email: string;
    role?: string;
  };
};

type LoginRequest = {
  email: string;
  password: string;
};

type LoginResponse = {
  token: string;
  success: boolean;
  message?: string;
  data: {
    user: {
      id: string;
      name: string;
      email: string;
      role?: string;
    };
    accessToken: string;
    refreshToken?: string;
  };
};

type GuestSessionResponse = {
  success: boolean;
  message: string;
  data: {
    guestSession: string;
  };
};

type ResetPasswordResponse = {
  success: boolean;
  message: string;
};

type ResetPasswordMutationArg = {
  userId: string;
  password: string;
  token: string;
};

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMe: builder.query<UserResponse, void>({
      query: () => ({
        url: "/auth/me",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    
    signIn: builder.mutation<LoginResponse, LoginRequest>({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    
    signUp: builder.mutation<AuthSuccessResponse, UserRegistrationBase>({
      query: (body) => ({
        url: "/users/create",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),

    createGuestSession: builder.mutation<GuestSessionResponse, void>({
      query: () => ({
        url: "/users/guest-session",
        method: "POST",
      }),
      invalidatesTags: ["User"],
    }),
    
    verifyEmail: builder.mutation<
      AuthSuccessResponse,
      { email: string; otp: string }
    >({
      query: (body) => ({
        url: "/auth/verify-otp",
        method: "POST",
        body,
      }),
    }),
    
    resendCode: builder.mutation<AuthSuccessResponse, { email: string }>({
      query: (body) => ({
        url: "/auth/send-otp",
        method: "POST",
        body,
      }),
    }),
    
    forgetPassword: builder.mutation<AuthSuccessResponse, { email: string }>({
      query: (body) => ({
        url: "/auth/forgot-password",
        method: "POST",
        body,
      }),
    }),
    
    logout: builder.mutation<AuthSuccessResponse, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      invalidatesTags: ["User"],
    }),
    
    resetPassword: builder.mutation<
      ResetPasswordResponse,
      ResetPasswordMutationArg
    >({
      query: ({ password, token }) => ({
        url: "/auth/reset-password",
        method: "POST",
        body: { 
          newPassword: password,
          confirmPassword: password
        },
        headers: {
          Authorization: `${token}`,
        },
      }),
    }),
  }),
});

export const {
  useGetMeQuery,
  useSignInMutation,
  useSignUpMutation,
  useCreateGuestSessionMutation,
  useLogoutMutation,
  useVerifyEmailMutation,
  useResendCodeMutation,
  useForgetPasswordMutation,
  useResetPasswordMutation, // ← Don't forget to export this!
} = authApi;