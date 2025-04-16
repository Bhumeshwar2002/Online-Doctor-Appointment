import React from "react";

const DoctorProfile = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen p-6 bg-white text-gray-800">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <p><strong>Name:</strong> Dr. {user?.name}</p>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Specialization:</strong> {user?.specialization || "Not provided"}</p>
      </div>
    </div>
  );
};

export default DoctorProfile;