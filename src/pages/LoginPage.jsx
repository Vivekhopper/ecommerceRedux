import React, { useState } from "react";

function Login({ setModelOpen }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Implement login logic here
    console.log("Login with", { email, password });
    setModelOpen(false); // Close modal after login
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md w-80 mx-auto">
      <h2 className="text-2xl font-bold mb-6">Login</h2>
      <input
        type="email"
        placeholder="Email"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 mb-4"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 mb-6"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition duration-300"
      >
        Log In
      </button>
      <button
        onClick={() => setModelOpen(false)}
        className="w-full bg-gray-300 text-gray-800 py-3 rounded-md hover:bg-gray-400 transition duration-300 mt-4"
      >
        Cancel
      </button>
    </div>
  );
}

export default Login;
