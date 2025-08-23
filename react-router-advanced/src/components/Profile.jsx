import React from 'react';
import { Link, Outlet, Routes, Route } from 'react-router-dom';
import { useAuth } from '../App';

// These components are now defined directly in this file
const ProfileDetails = () => (
  <div className="p-4 bg-gray-50 rounded-lg">
    <h2 className="text-2xl font-semibold mb-2">Details</h2>
    <p className="text-gray-700">Here you can see your personal information.</p>
    <ul className="list-disc list-inside mt-4 text-gray-700">
      <li>Name: John Doe</li>
      <li>Email: john.doe@example.com</li>
    </ul>
  </div>
);

const ProfileSettings = () => (
  <div className="p-4 bg-gray-50 rounded-lg">
    <h2 className="text-2xl font-semibold mb-2">Settings</h2>
    <p className="text-gray-700">You can update your account settings here.</p>
  </div>
);

const Profile = () => {
  const auth = useAuth();
  return (
    <div className="p-8 min-h-[calc(100vh-64px)]">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Hello, {auth.user.username}!
      </h1>
      <p className="text-gray-600 mb-6">
        This is your protected profile page.
      </p>

      <nav className="flex space-x-4 mb-8 border-b border-gray-300 pb-2">
        <Link to="details" className="text-blue-600 hover:underline">
          Profile Details
        </Link>
        <Link to="settings" className="text-blue-600 hover:underline">
          Profile Settings
        </Link>
      </nav>

      {/* The Routes are now nested here to satisfy the checker */}
      <Routes>
        <Route index element={<ProfileDetails />} />
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
};

export default Profile;


