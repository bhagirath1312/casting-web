"use client";
import { useState } from "react";
import Navbar from "../../components/navbar";

export default function Signup() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-md mx-auto mt-10 bg-white p-6 shadow-md rounded-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Create an Account</h2>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} className="w-full p-2 border rounded mb-4" />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border rounded mb-4" />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full p-2 border rounded mb-4" />
        <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Sign Up</button>
      </div>
    </div>
  );
}