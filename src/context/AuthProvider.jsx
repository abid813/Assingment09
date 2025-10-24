// src/context/AuthProvider.jsx
import React, { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext"; // named import
import { auth, googleProvider } from "../Firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // User update function
  const updateUserProfile = async (user, name, photoURL) => {
    try {
      await updateProfile(user, { displayName: name, photoURL });
      alert("✅ Profile updated successfully!");
    } catch (error) {
      alert("❌ Failed to update profile: " + error.message);
    }
  };

  const signup = (email, password, name, photoURL) =>
    createUserWithEmailAndPassword(auth, email, password).then((res) =>
      updateProfile(res.user, { displayName: name, photoURL })
    );

  const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
  const googleLogin = () => signInWithPopup(auth, googleProvider);
  const logout = () => signOut(auth);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, loading, signup, login, googleLogin, logout, updateUserProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider; 
