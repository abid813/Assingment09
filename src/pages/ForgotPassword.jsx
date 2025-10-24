// src/pages/ForgotPassword.jsx
import React, { useState, useEffect } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import app from "../Firebase/firebase";

const ForgotPassword = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const emailFromLogin = queryParams.get("email") || ""; // Login পেজ থেকে ইমেইল আসলে নেবে

  const [email, setEmail] = useState(emailFromLogin);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (emailFromLogin) setEmail(emailFromLogin);
  }, [emailFromLogin]);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("Please enter your email first.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      alert("✅ Password reset email sent! Please check your Gmail.");
      window.open("https://mail.google.com", "_blank"); // Gmail খুলে দিবে
      navigate("/login"); // Login পেজে ফেরত নিয়ে যাবে
    } catch (err) {
      setMessage("❌ Failed to send reset email: " + err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded shadow text-center">
      <h2 className="text-2xl font-bold mb-4">Reset Your Password</h2>

      <form onSubmit={handleResetPassword} className="flex flex-col gap-3 text-left">
        <label className="font-medium">Email Address</label>
        <input
          className="border p-2 rounded"
          type="email"
          placeholder="Enter your registered email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {message && <p className="text-sm text-red-500">{message}</p>}

        <button className="bg-blue-600 text-white py-2 rounded mt-2">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
