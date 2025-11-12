"use client";

import React from 'react';
import { Search, } from 'lucide-react';

// ==================== STORIES PAGE ====================
export function StoriesPage() {
  const stories = [
    {
      user: 'John Doe',
      title: 'The Adventure',
      length: '2,450',
      status: 'Complete',
      date: '14-09-2025'
    },
    {
      user: 'Danil Bar',
      title: 'Love In Paris',
      length: '4,356',
      status: 'Pending',
      date: '15-09-2025'
    },
    {
      user: 'Ando Roy',
      title: 'The Dark Fores',
      length: '3,548',
      status: 'Fail',
      date: '16-09-2025'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Complete':
        return 'text-green-600 bg-green-50 border-green-300';
      case 'Pending':
        return 'text-yellow-600 bg-yellow-50 border-yellow-300';
      case 'Fail':
        return 'text-red-600 bg-red-50 border-red-300';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Stories</h1>
        <p className="text-gray-600 mb-6">Manage user-submitted and generated stories</p>

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
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Title</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Length</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Status</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Date</th>
              </tr>
            </thead>
            <tbody>
              {stories.map((story, index) => (
                <tr key={index} className="border-b border-gray-200 last:border-b-0">
                  <td className="px-6 py-4 text-gray-900">{story.user}</td>
                  <td className="px-6 py-4 text-gray-900">{story.title}</td>
                  <td className="px-6 py-4 text-gray-900">{story.length}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm border ${getStatusColor(story.status)}`}>
                      {story.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-900">{story.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}