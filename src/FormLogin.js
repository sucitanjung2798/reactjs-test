import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const FormLogin = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = async () => {
    if (userName === "user" && password === "password") {
      try {
        const response = await axios.get(
          "http://universities.hipolabs.com/search?country=Indonesia"
        );
        console.log("Data Universitas:", response.data);
        history.push("/landing-page");
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      alert("Login gagal. Coba lagi");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cyan-400">
      <div className="max-w-2xl w-full p-4 bg-white rounded-lg shadow-lg">
        <h2 className="text-4xl font-semibold text-center">Login</h2>
        <form className="mt-8 mb-8 px-4 bg-white rounded-lg shadow-md">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              type="text"
              id="username"
              name="username"
              placeholder="Your username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              type="password"
              id="password"
              name="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
            type="button"
            onClick={handleLogin}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormLogin;
