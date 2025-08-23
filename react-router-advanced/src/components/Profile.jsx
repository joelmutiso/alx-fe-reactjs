import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../App';

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

      <Outlet />
    </div>
  );
};

export default Profile;
