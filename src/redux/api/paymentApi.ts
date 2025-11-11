// redux/api/paymentApi.ts

import baseApi from "./baseApi";

// Types
export interface CreatePaymentRequest {
  planId: string;
  email: string;
}

export interface PaymentResponse {
  success: boolean;
  message: string;
  data: {
    approvalUrl: string;
    orderId: string;
    paymentId: string;
  };
}

// redux/api/paymentApi.ts
export interface CapturePaymentRequest {
  paymentId: string;  // ← NOT orderId
}

export interface CapturePaymentResponse {
  success: boolean;
  message: string;
  data: {
    paymentId: string;
    status: string;
    transactionId: string;
  };
}

// Inject endpoints into baseApi
export const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Create PayPal Payment Session
    createPayment: builder.mutation<PaymentResponse, CreatePaymentRequest>({
      query: (body) => ({
        url: "/payments/create",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Payment"],
    }),

    // Capture Payment (after user approves on PayPal)
    capturePayment: builder.mutation<
      CapturePaymentResponse,
      CapturePaymentRequest
    >({
      query: (body) => ({
        url: "/payments/capture",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Payment"],
    }),

    // Get Payment Status
    getPaymentStatus: builder.query<unknown, string>({
      query: (paymentId) => `/payments/${paymentId}`,
      providesTags: (result, error, paymentId) => [
        { type: "Payment", id: paymentId },
      ],
    }),
    getMyPayments: builder.query({
      query: () => ({
        url: "/payments/my",
        method: "GET",
      }),
      providesTags: ["Payment"],
    }),

    // paymentCapture: builder.mutation({
    //   query: (body) => ({
    //     url: "/payments/capture",
    //     method: "POST",
    //     body: body,
    //   }),
    // }),

    paymentCapture: builder.mutation<CapturePaymentResponse, CapturePaymentRequest>({
  query: (body) => ({
    url: '/payments/capture',
    body,
  }),
  invalidatesTags: ["Payment"],
}),
  }),
});

export const {
  useCreatePaymentMutation,
  useCapturePaymentMutation,
  useGetPaymentStatusQuery,
  useGetMyPaymentsQuery,
} = paymentApi;
