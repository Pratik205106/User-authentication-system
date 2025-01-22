import React from 'react';

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="p-8 bg-white shadow-lg rounded-lg w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create Your Account
        </h1>
        <form className="space-y-6">
          <div className="grid gap-2">
            <label htmlFor="first-name" className="font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="first-name"
              className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
              placeholder="Enter your first name"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="middle-name" className="font-medium text-gray-700">
              Middle Name
            </label>
            <input
              type="text"
              id="middle-name"
              className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
              placeholder="Enter your middle name"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="last-name" className="font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="last-name"
              className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
              placeholder="Enter your last name"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="password" className="font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
              placeholder="Create a password"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="confirm-password" className="font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
              placeholder="Confirm your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-md hover:from-purple-600 hover:to-pink-600 focus:ring-4 focus:ring-purple-300 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center text-gray-500 mt-4">
          Already have an account?{' '}
          <a href="#" className="text-purple-500 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
