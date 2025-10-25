import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Winter Jacket Cleaning",
      description: "Professional dry cleaning service for jackets, coats, and sweaters.",
      image: "https://i.postimg.cc/7Lry1ksg/dog-in-coat.jpg",
    },
    {
      id: 2,
      title: "Heater Maintenance",
      description: "Expert technicians to inspect and repair your home heating systems.",
      image: "https://i.ibb.co.com/21y30Lz2/Whats-App-Image-2025-10-25-at-02-46-29-ea60c282.jpg",
    },
    {
      id: 3,
      title: "Blanket Wash & Dry",
      description: "Fast and hygienic blanket washing and drying service for winter.",
      image: "https://i.ibb.co.com/RGZPtJ7Q/Whats-App-Image-2025-10-25-at-02-57-15-1195ed12.jpg",
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
