import React from 'react';
import { ShoppingCart, BookOpen, DollarSign, Users } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    {
      label: 'Pending Story',
      value: '248',
      icon: ShoppingCart,
      bgColor: 'bg-gray-50'
    },
    {
      label: 'Total Stories',
      value: '1,429',
      icon: BookOpen,
      bgColor: 'bg-gray-50'
    },
    {
      label: 'Revenue',
      value: '$4,231',
      icon: DollarSign,
      bgColor: 'bg-gray-50'
    },
    {
      label: 'Active Users',
      value: '573',
      icon: Users,
      bgColor: 'bg-gray-50'
    }
  ];

  const activities = [
    {
      title: 'Story generated',
      user: 'Jane Smith',
      time: '15 minutes ago'
    },
    {
      title: 'Payment received',
      user: 'Bob Wilson',
      time: '1 hour ago'
    },
    {
      title: 'New user registered',
      user: 'Alice Brwn',
      time: '2 minutes ago'
    }
  ];

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.bgColor} rounded-lg p-6 border border-gray-200`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-600">{stat.label}</span>
                <stat.icon className="w-5 h-5 text-gray-400" />
              </div>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
          
          <div className="space-y-6">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="flex items-start justify-between pb-6 border-b border-gray-200 last:border-b-0 last:pb-0"
              >
                <div>
                  <h3 className="text-base font-medium text-gray-900 mb-1">
                    {activity.title}
                  </h3>
                  <p className="text-sm text-gray-600">{activity.user}</p>
                </div>
                <span className="text-sm text-gray-500 whitespace-nowrap ml-4">
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}