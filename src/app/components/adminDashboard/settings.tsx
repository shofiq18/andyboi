/* eslint-disable react/jsx-no-comment-textnodes */


"use client";
import { useState } from "react";

export function SettingsPage() {
  const [name, setName] = useState<string>('Admin User');
  const [email, setEmail] = useState<string>('admin@gmail.com');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
        <p className="text-gray-600 mb-8">Manage your admin panel settings</p>

        {/* Profile Settings */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Profile Settings</h2>
          <p className="text-gray-600 mb-4">Update your admin profile information</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Your Profile Picture</label>
            <div className="w-24 h-24 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50">
              <input type="file" accept="image/*" className="hidden" />
              <span className="text-xs text-gray-500 text-center px-2">Upload your photo</span>
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Security</h2>

          <div className="max-w-md space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">New Password</label>
              <input
                type="password"
                placeholder="Write here"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Confirm Password</label>
              <input
                type="password"
                placeholder="Write here"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
            Save & Change
          </button>
        </div>
      </div>
    </div>
  );
}
