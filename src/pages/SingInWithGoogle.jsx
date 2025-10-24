import React, { useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../Firebase/firebase';

const SingInWithGoogle = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    if (loading) return; // যদি আগের popup চলছে, নতুনটি না চালাও
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User:", result.user);
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={handleGoogleLogin}
        disabled={loading}  // popup চললে বাটন disable
        className='px-6 py-3 bg-blue-500 text-white rounded-lg'
      >
        {loading ? "Loading..." : "Login with Google"}
      </button>
    </div>
  );
};

export default SingInWithGoogle;