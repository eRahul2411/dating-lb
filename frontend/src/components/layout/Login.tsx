import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="bg-white rounded shadow-lg p-8 mb-6">
          <h2 className="text-xl font-medium mb-4">Login to your account</h2>
          <p className="text-gray-600 mb-6">Please fill out the fields below.</p>
          <form>
            <div className="grid gap-4">
              <div>
                <label htmlFor="email" className="block text-gray-700">Email Address</label>
                <input type="email" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Enter your email" />
              </div>

              <div>
                <label htmlFor="password" className="block text-gray-700">Password</label>
                <input type="password" name="password" id="password" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Enter your password" />
              </div>

              <div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">Login</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

