import React, { useState } from 'react';

const PasswordManager = () => {
  // State for form inputs
  const [previousPassword, setPreviousPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(''); // For success/error messages

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(''); // Clear previous messages

    // Basic validation (you'd replace this with actual API calls and robust validation)
    if (newPassword.length < 8) {
      setMessage('New password must be at least 8 characters long.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setMessage('New password and confirm password do not match.');
      return;
    }
    // In a real application, you'd send `previousPassword`, `newPassword` to your backend
    console.log('Attempting to change password...');
    console.log('Previous:', previousPassword);
    console.log('New:', newPassword);

    // Simulate an API call
    setTimeout(() => {
      setMessage('Password changed successfully!');
      // Clear form fields on success
      setPreviousPassword('');
      setNewPassword('');
      setConfirmPassword('');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-xl w-full max-w-md">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 text-center">
          Password Manager
        </h1>

        {/* User Information Section */}
        <div className="bg-gray-50 p-4 rounded-md mb-6">
          <p className="text-gray-700 text-sm sm:text-base mb-1">
            <strong className="font-medium text-gray-800">ID:</strong> 1573
          </p>
          <p className="text-gray-700 text-sm sm:text-base mb-1">
            <strong className="font-medium text-gray-800">Name:</strong> CCTV Nepal Pvt Ltd
          </p>
          <p className="text-gray-700 text-sm sm:text-base">
            <strong className="font-medium text-gray-800">Email:</strong> janampandey2@gmail.com
          </p>
        </div>

        {/* Password Change Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="previousPassword" className="block text-gray-700 text-sm font-medium mb-2">
              Previous Password
            </label>
            <input
              type="password"
              id="previousPassword"
              className="shadow-sm appearance-none border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out"
              placeholder="Enter your previous password"
              value={previousPassword}
              onChange={(e) => setPreviousPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="newPassword" className="block text-gray-700 text-sm font-medium mb-2">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              className="shadow-sm appearance-none border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out"
              placeholder="Minimum 8 characters"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-medium mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="shadow-sm appearance-none border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out"
              placeholder="Re-enter your new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {message && (
            <p className={`text-center mb-4 ${message.includes('success') ? 'text-green-600' : 'text-red-600'} text-sm font-medium`}>
              {message}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 ease-in-out text-base sm:text-lg"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordManager;