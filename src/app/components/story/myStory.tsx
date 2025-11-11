

"use client";

import React from 'react';
import { Search } from 'lucide-react';

import Link from 'next/link';
import { useGetMyStoriesQuery } from '@/redux/api/storyApi';

interface Story {
  id: string;
  title: string;
  wordLimit: number;
  price: number;
  generateCount: number;
  status: 'COMPLETE' | 'PENDING' | 'FAIL';
  createdAt: string;
  updatedAt: string;
  userId: string;
  guestId: string | null;
  isPaid: boolean;
}

export function MyStoryPage() {
  const { data, isLoading } = useGetMyStoriesQuery({});
  const stories: Story[] = data?.data ?? [];

  const getStatusColor = (status: string) => {
    const s = status.toUpperCase();
    switch (s) {
      case 'COMPLETE':
        return 'text-green-600 bg-green-50 border-green-300';
      case 'PENDING':
        return 'text-yellow-600 bg-yellow-50 border-yellow-300';
      case 'FAIL':
        return 'text-red-600 bg-red-50 border-red-300';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-300';
    }
  };

  if (isLoading) {
    return <div className="p-8 text-center">Loading stories...</div>;
  }

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
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Title</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Length</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Status</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Price</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Generate Count</th>
              </tr>
            </thead>
            <tbody>
              {stories.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                    No stories found.
                  </td>
                </tr>
              ) : (
                stories.map((story) => (
                  <tr key={story.id} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <Link
                        href={`/preview-story?storyId=${story.id}`}
                        className="text-green-400 hover:underline font-medium"
                      >
                        {story.title}
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-gray-900">{story.wordLimit}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm border ${getStatusColor(
                          story.status
                        )}`}
                      >
                        {story.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-900">${story.price}</td>
                    <td className="px-6 py-4 text-gray-900">{story.generateCount}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}