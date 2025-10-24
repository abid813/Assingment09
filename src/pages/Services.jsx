import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Winter Jacket Cleaning",
      description: "Professional dry cleaning service for jackets, coats, and sweaters.",
      image: "https://i.ibb.co/7r7pY5s/jacket-clean.jpg",
    },
    {
      id: 2,
      title: "Heater Maintenance",
      description: "Expert technicians to inspect and repair your home heating systems.",
      image: "https://i.ibb.co/F7D7zvB/heater.jpg",
    },
    {
      id: 3,
      title: "Blanket Wash & Dry",
      description: "Fast and hygienic blanket washing and drying service for winter.",
      image: "https://i.ibb.co/qd4c3CZ/blanket.jpg",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center underline underline-offset-8 mb-8">
        Winter Care Services
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3">{service.description}</p>
              <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
