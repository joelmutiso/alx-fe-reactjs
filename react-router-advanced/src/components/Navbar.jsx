import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import { useAuth } from '../App';

const Navbar = () => {
  const auth = useAuth();
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-gray-800 font-bold text-xl hover:text-gray-600 transition-colors">
              App
            </Link>
            <div className="space-x-4">
              <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                About
              </Link>
              <Link to="/profile" className="text-gray-600 hover:text-gray-900 transition-colors">
                Profile
              </Link>
              <Link to="/posts/1" className="text-gray-600 hover:text-gray-900 transition-colors">
                Blog Post 1
              </Link>
            </div>
          </div>
          <div>
            {auth.user ? <LogoutButton /> : <Link to="/login" className="bg-blue-600 text-white font-semibold py-1.5 px-4 rounded-lg shadow-md hover:bg-blue-700 transition-colors">Sign In</Link>}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
