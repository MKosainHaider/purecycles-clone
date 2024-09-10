import React, { useState } from 'react';
import NavBar from '../components/NavBar'; 
import Footer from '../components/Footer'; 

const Profile = () => {
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: '', // For password change
    newPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    // Handle profile update logic
    console.log('Updated Profile:', userData);
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    // Handle password change logic
    console.log('Password Change:', userData.newPassword);
  };

  return (
    <div className="bg-white">
      {/* Adding NavBar */}
      <NavBar />

      <div className="container max-w-2xl p-8 mx-auto mt-10 bg-gray-100 shadow-md">
        <h1 className="mb-6 text-3xl font-bold">Profile Page</h1>

        {/* Profile Info Section */}
        <form onSubmit={handleUpdateProfile}>
          <h2 className="mb-4 text-xl font-semibold">Update Profile</h2>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <button
            type="submit"
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded"
          >
            Update Profile
          </button>
        </form>

        {/* Password Change Section */}
        <form onSubmit={handleChangePassword} className="mt-8">
          <h2 className="mb-4 text-xl font-semibold">Change Password</h2>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold" htmlFor="password">
              New Password
            </label>
            <input
              type="password"
              id="password"
              name="newPassword"
              value={userData.newPassword}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <button
            type="submit"
            className="px-4 py-2 font-bold text-white bg-green-500 rounded"
          >
            Change Password
          </button>
        </form>
      </div>

      {/* Adding Footer */}
      <Footer />
    </div>
  );
};

export default Profile;
