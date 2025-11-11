"use client";
import { Button } from "@/components/ui/button";
import {
  useCapturePaymentMutation,
  useGetMyPaymentsQuery,
} from "@/redux/api/paymentApi";
import { Payment } from "@/types/payment";
import { Search } from "lucide-react";
import Link from "next/link";

export function MyPaymentsPage() {
  const { data, isLoading } = useGetMyPaymentsQuery({});

  const [capturePayment, { isLoading: captureLoading }, ] =
    useCapturePaymentMutation(); // <-- correct hook name

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  const payments: Payment[] = data?.data ?? [];

const handleRetry = async (paymentId: string) => {
  console.log("Retrying payment with ID:", paymentId); // ← Check this!

  try {
    const res = await capturePayment({ paymentId }).unwrap();
    console.log("Success:", res);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Capture failed:", error);
  }
};

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Payments</h1>
        <p className="text-gray-600 mb-6">
          View payment history and transaction details
        </p>

        {/* Search Bar */}
        <div className="mb-6 relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by customer, email, or order ID"
            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Table */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-white border-b border-gray-200">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">
                  Trans ID
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">
                  Amount
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">
                  Method
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">
                  Generate Type
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">
                  Paid At
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">
                  Status
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">
                  Action{" "}
                </th>
              </tr>
            </thead>
            <tbody>
              {payments &&
                payments.map((payment, index: number) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 last:border-b-0"
                  >
                    <td className="px-6 py-4 text-gray-900">
                      {payment.transactionId}
                    </td>
                    <td className="px-6 py-4 text-gray-900">
                      {payment.amount}
                    </td>
                    <td className="px-6 py-4 text-gray-900">
                      {payment.method}
                    </td>
                    <td className="px-6 py-4 text-gray-900">{payment.type}</td>
                    <td className="px-6 py-4 text-gray-900">
                      {payment.createdAt}
                    </td>
                    <td className="px-6 py-4 text-gray-900">
                      {payment.status}
                    </td>
                    <td className="px-6 py-4 text-gray-900">
                      {payment.status === "SUCCESS" ? (
                        <Button size={"sm"} variant={"outline"}>
                          <Link
                            href={`/create-story?storyId=${payment.storyId}`}
                          >
                            Generate
                          </Link>
                        </Button>
                      ) : (
                        <Button
                          disabled={captureLoading}
                          size={"sm"}
                          variant={"outline"}
                          onClick={() => handleRetry(payment.id)}
                        >
                          Retry
                        </Button>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
