// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from "react";
import { auth, googleProvider } from "../Firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  updateProfile as firebaseUpdateProfile,
} from "firebase/auth";

// 1️⃣ Create context
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Signup
  const signup = (email, password, name, photoURL) =>
    createUserWithEmailAndPassword(auth, email, password).then((res) =>
      firebaseUpdateProfile(res.user, { displayName: name, photoURL })
    );

  // Login
  const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

  // Google Login
  const googleLogin = () => signInWithPopup(auth, googleProvider);

  // Logout
  const logout = () => signOut(auth);

  // Update Profile
  const updateUserProfile = async (user, name, photoURL) => {
    try {
      await firebaseUpdateProfile(user, { displayName: name, photoURL });
      setUser({ ...user, displayName: name, photoURL }); // UI update
    } catch (error) {
      throw new Error(error.message);
    }
  };

  // Track current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signup,
        login,
        googleLogin,
        logout,
        updateUserProfile, // 2️⃣ এখানে add করলাম
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
