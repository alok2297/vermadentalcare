import React from 'react'
export const Login = () => {
  return (
    <div className="flex items-center justify-center bg-gradient-to-b from-gray-100 to-white">
      <div className="w-full max-w-md lg:my-10 sm:my-1 bg-white/20 backdrop-blur-md p-8 md:rounded-2xl sm:rounded-none lg:shadow-lg sm:shadow-none">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Welcome Back</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-4 text-right">
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
        <div className="mt-6 flex flex-col gap-3">
          <button className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition">
            Continue with Google
          </button>
          <button className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition">
            Continue with Facebook
          </button>
        </div>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
}
