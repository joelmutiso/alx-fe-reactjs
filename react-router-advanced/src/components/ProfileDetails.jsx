import React from 'react';

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

export default ProfileDetails;