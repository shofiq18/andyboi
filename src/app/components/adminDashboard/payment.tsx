
"use client";
import { Search } from "lucide-react";

export function PaymentsPage() {
  const payments = [
    {
      user: 'John Doe',
      email: 'johndoe@gmail.com',
      amount: '$29',
      method: 'Stripe',
      date: '14-09-2025'
    },
    {
      user: 'Danil Bar',
      email: 'danilbar@gmail.com',
      amount: '$29',
      method: 'PayPal',
      date: '15-09-2025'
    },
    {
      user: 'Ando Roy',
      email: 'andoroy@gmail.com',
      amount: '$29',
      method: 'Stripe',
      date: '16-09-2025'
    }
  ];

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Payments</h1>
        <p className="text-gray-600 mb-6">View payment history and transaction details</p>

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
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">User</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Email</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Amount</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Method</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Date</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr key={index} className="border-b border-gray-200 last:border-b-0">
                  <td className="px-6 py-4 text-gray-900">{payment.user}</td>
                  <td className="px-6 py-4 text-gray-900">{payment.email}</td>
                  <td className="px-6 py-4 text-gray-900">{payment.amount}</td>
                  <td className="px-6 py-4 text-gray-900">{payment.method}</td>
                  <td className="px-6 py-4 text-gray-900">{payment.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}