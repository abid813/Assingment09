// src/pages/ServiceDetails.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import servicesData from "../data/services.json";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ServiceDetails = () => {
  const { id } = useParams(); // route param
  const serviceId = Number(id);
  const service = servicesData.find(s => s.serviceId === serviceId);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  if (!service) return <div className="p-8 text-center">Service not found.</div>;

  const handleBook = (e) => {
    e.preventDefault();
    toast.success("Booking successful — we will contact you soon!");
    setName("");
    setEmail("");
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">{service.serviceName}</h2>

      <img src={service.image} alt={service.serviceName} className="w-full h-64 object-cover rounded mb-4" />

      <div className="space-y-2 text-gray-700">
        <p><strong>Provider:</strong> {service.providerName}</p>
        <p><strong>Provider Email:</strong> {service.providerEmail}</p>
        <p><strong>Category:</strong> {service.category}</p>
        <p><strong>Price:</strong> ${service.price}</p>
        <p><strong>Rating:</strong> ⭐ {service.rating}</p>
        <p><strong>Slots Available:</strong> {service.slotsAvailable}</p>
        <p className="mt-2">{service.description}</p>
      </div>

      <form onSubmit={handleBook} className="mt-6 flex flex-col gap-3">
        <input className="border p-2 rounded" type="text" placeholder="Your Name" value={name} onChange={e=>setName(e.target.value)} required />
        <input className="border p-2 rounded" type="email" placeholder="Your Email" value={email} onChange={e=>setEmail(e.target.value)} required />
        <button className="bg-blue-600 text-white py-2 rounded">Book Now</button>
      </form>
<ToastContainer position="top-center" autoClose={2000} />


    </div>
  );
};

export default ServiceDetails;
