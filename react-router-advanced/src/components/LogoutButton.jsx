import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../App';

const LogoutButton = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  const handleLogout = () => {
    auth.signOut(() => {
      navigate('/');
    });
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-600 text-white font-semibold py-1.5 px-4 rounded-lg shadow-md hover:bg-red-700 transition-colors"
    >
      Sign Out
    </button>
  );
};

export default LogoutButton;
