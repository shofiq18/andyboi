// types/payment.ts
/** ----------------------------------------------------------------------
 *  Capture-payment request / response
 * ---------------------------------------------------------------------- */
export interface CapturePaymentRequest {
  /** The PayPal `orderId` (or `paymentId` – whatever your backend expects) */
//   orderId?: string;
  /** If the backend uses `paymentId` instead of `orderId` */
  paymentId?: string;
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

/** ----------------------------------------------------------------------
 *  Payment record (as returned by GET /payments/my)
 * ---------------------------------------------------------------------- */
export interface Payment {
  /** Unique DB id of the payment record */
  id: string;

  /** PayPal / gateway transaction id */
  transactionId: string;

  /** Amount in the smallest currency unit (e.g. cents) */
  amount: number;

  /** Payment method – e.g. "paypal", "card" */
  method: string;

  /** What the payment was generated for – e.g. "STORY", "PLAN" */
  type: string;

  /** ISO-8601 timestamp when the payment was created */
  createdAt: string;

  /** Current status – "PENDING", "SUCCESS", "FAILED", … */
  status: string;

  /** Optional – the story that this payment unlocks */
  storyId?: string;
}

/** ----------------------------------------------------------------------
 *  Response shape of the `getMyPayments` query
 * ---------------------------------------------------------------------- */
export interface GetMyPaymentsResponse {
  success: boolean;
  message?: string;
  data: Payment[];
}