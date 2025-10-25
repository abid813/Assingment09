// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { login, googleLogin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const friendlyFirebaseError = (message) => {
    if (!message) return "Login failed. Please try again.";
    if (message.includes("user-not-found"))
      return "User not found. Please sign up first.";
    if (message.includes("wrong-password")) return "Wrong password. Try again.";
    if (message.includes("invalid-email")) return "Invalid email address.";
    return message;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(email, password);
      toast.success("✅ Login successful!", {
        onClose: () => navigate(from, { replace: true }), 
      });
    } catch (err) {
      const msg = friendlyFirebaseError(err.message || "Login failed");
      setError(msg);
      toast.error(`❌ ${msg}`);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setError("");
    setLoading(true);
    try {
      await googleLogin();
      toast.success("✅ Logged in with Google!", {
        onClose: () => navigate(from, { replace: true }),
      });
    } catch (err) {
      const msg = friendlyFirebaseError(err.message || "Google login failed");
      setError(msg);
      toast.error(`❌ ${msg}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-12 p-6 bg-slate-900 text-white rounded shadow">
      <h2 className="text-2xl  font-bold  text-center mb-2 
      underline underline-offset-6">Login</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {/* Email */}
        <input
          className="border p-2 rounded font-semibold  "
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Password */}
        <div className="relative">
          <input
            className="border p-2 text-sa rounded w-full pr-10"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span
            className="absolute right-3 top-2.5 cursor-pointer select-none text-gray-600"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>

        {/* Forgot Password */}
        <div className="flex items-center justify-between text-sm">
          <Link
            to={`/forgot?email=${encodeURIComponent(email)}`}
            className="text-white hover:underline  cursor-pointer font-bold text-[15px]"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm">{error}</p>}

        {/* Login Button */}
        <button
          type="submit"
          className={`mt-2 bg-blue-600 font-bold  cursor-pointer text-[18px] text-white py-2 rounded ${
            loading ? "opacity-60" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      {/* Google Login */}
      <button
        onClick={handleGoogle}
        className="mt-4 w-full font-bold  cursor-pointer hover:underline text-white py-2 rounded"
        disabled={loading}
      >
        {loading ? "Please wait..." : "Continue with Google"}
      </button>

      {/* Signup Redirect */}
      <p className="mt-4 text-center text-sm text-[17px] font-bold">
        Don’t have an account?{" "}
        <Link to="/signup" className="text-blue-500 font-bold text-[18px] hover:underline">
          Sign up
        </Link>
      </p>

      {/* Toast Container */}
      <ToastContainer position="top-center" autoClose={800} />
    </div>
  );
};

export default Login;
