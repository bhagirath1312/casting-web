"use client";
import Navbar from '../../components/navbar';

export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-lg mx-auto mt-10 bg-white p-6 shadow-md rounded-md">
        <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> johndoe@example.com</p>
      </div>
    </div>
  );
}