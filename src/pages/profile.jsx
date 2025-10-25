// src/pages/Profile.jsx
import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const Profile = () => {
  const { user, updateUserProfile } = useAuth();
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  if (!user) return <div className="p-8 text-center">Please login to view profile.</div>;

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateUserProfile(user, name, photo);
    setEditing(false);
  };

  return (
    <div className="max-w-6/12 max-h-106  mx-auto mt-60
    p-6 bg-slate-900 text-white rounded shadow text-center">
      <img
        src={
          user.photoURL ||
          `https://ui-avatars.com/api/?name=${encodeURIComponent(
            user.displayName || user.email
          )}`
        }
        alt={user.displayName}
        className="w-28 h-28 rounded-full mx-auto object-cover"
      />
      <h3 className="mt-4 text-xl font-semibold">
        {user.displayName || "No Name"}
      </h3>
      <p className="text-white">{user.email}</p>

      {!editing ? (
        <button
          onClick={() => setEditing(true)}
          className="mt-4  bg-blue-600 text-white py-2 px-4 rounded"
        >
          Update Profile
        </button>
      ) : (
        <form onSubmit={handleUpdate} className="mt-4 space-y-3 text-left">
          <input
            className="w-full border p-2 rounded"
            type="text"
            placeholder="Enter new name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="w-full border p-2 rounded"
            type="text"
            placeholder="Enter new photo URL"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
          <div className="flex gap-2 justify-center">
            <button
              type="submit"
              className="bg-green-600 text-white py-2 px-4 rounded"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setEditing(false)}
              className="bg-gray-500 text-white py-2 px-4 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Profile;
