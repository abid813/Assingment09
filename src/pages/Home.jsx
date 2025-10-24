// src/pages/Home.jsx
import React from "react";
import servicesData from "../data/services.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import pet1 from "../assets/pet1.jpg"
import pet3 from "../assets/pet3.jpg"
import pet2 from "../assets/pet2.jpg"

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-4">

      {/* 🐾 Hero Slider Section */}
      <section className="mt-6">
        <Swiper
          navigation={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          modules={[Navigation, Autoplay]}
          className="rounded-xl overflow-hidden"
        >
          <SwiperSlide>
            <div className="relative flex  justify-center items-center">
              <img
                src={pet1}
                alt="Winter Coat for Dogs"
                className="w-[800px] h-[450px] object-cover "
              />
              <div className="absolute inset-0 b-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-4">
                <h2 className="text-white p-2 rounded-full text-3xl md:text-5xl font-bold  mb-3">
                  Keep Your Pets Warm This Winter 
                </h2>
                <p className="text-lg text-white  md:text-xl max-w-2xl">
                  Cozy coats, gentle grooming, and expert tips — everything your furry friend needs.
                </p>
                <button className="font-bold  mt-10 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg ">
                  Explore Services
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative">
              <img
                src={pet3}
                alt="Winter Grooming"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0  flex flex-col justify-center items-center text-center text-white px-4">
                
                {/* <p className="text-lg md:text-xl max-w-2xl">
                  Moisturizing paw balm and safe winter shampoos to protect their skin and paws.
                </p> */}
                <button className="mt-5 font-bold
                 bg-yellow-500
                  hover:bg-yellow-600 text-2xl m
                   text-white px-6 py-2 rounded-lg 
                 ">
                  Book Grooming Now
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative">
              <img
                src={pet2}
                alt="Pet Blanket"
                className="w-[1000px] h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-3">
                  Snuggle Up with Cozy Blankets 🐾
                </h2>
                <p className="text-lg md:text-xl max-w-2xl">
                  Give your pets the comfort of soft, warm blankets during chilly nights.
                </p>
                <button className="mt-5 bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg font-semibold">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* 🧊 Popular Winter Care Services Section */}
      <section className="mt-10">
  <h2 className="text-2xl font-bold mb-6 text-center">Popular Winter Care Services</h2>

  <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-[1400px] mx-auto px-4">
    {servicesData.map((service) => (
      <article
        key={service.serviceId}
        className="bg-white rounded-lg shadow flex flex-col hover:shadow-lg transition"
      >
        {/* RESPONSIVE IMAGE WITH FIXED ASPECT RATIO */}
        <div className="w-full relative overflow-hidden rounded-[10px] pb-[75%]">
          {/* pb-[75%] gives 4:3 aspect ratio */}
          <img
            src={service.image}
            alt={service.serviceName}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="p-4 flex flex-col gap-2 flex-1">
          <h3 className="font-semibold text-lg line-clamp-2">{service.serviceName}</h3>
          <p className="text-sm text-gray-500">{service.category}</p>
          <p className="mt-1 font-bold text-blue-600">${service.price}</p>
          <p className="text-yellow-500 mt-1">⭐ {service.rating}</p>

          <Link
  to={`/service/${service.serviceId}`}
  className="mt-auto bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-sm text-center"
>
  View Details
</Link>
        </div>
      </article>
    ))}
  </div>
</section>


      {/* 🐶 Winter Care Tips Section */}
      <section className="mt-12 bg-blue-50 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-800">Winter Care Tips for Pets</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 max-w-2xl mx-auto">
          <li>Keep pets warm with cozy clothing or blankets.</li>
          <li>Provide nutritious meals to boost immunity.</li>
          <li>Check paws regularly for cracks or ice.</li>
          <li>Limit outdoor time during extreme cold.</li>
        </ul>
      </section>

    {/* 👩‍⚕️ Expert Vets Section */}
<section className="mt-12 mb-12">
  <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">
    Meet Our Expert Vets
  </h2>

  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
    {[
      { name: "Dr. Sarah", role: "Canine Specialist", img: "https://i.ibb.co/Kj63DZd9/petex1.jpg" },
      { name: "Dr. Arifa", role: "Nutrition Expert", img: "https://i.ibb.co/Hf2jPGk3/petex2.jpg" },
      { name: "Dr. Khalid", role: "Grooming Specialist", img: "https://i.ibb.co/jvHXJQf5/petex3.jpg" },
      { name: "Dr. Omor", role: "Pet Behaviorist", img: "https://i.ibb.co/vG8PMWr/pet5.jpg" },
    ].map((vet, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center hover:shadow-lg hover:scale-105 transition-transform duration-300"
      >
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-200 shadow-sm">
          <img
            src={vet.img}
            alt={vet.name}
            className="w-full h-full object-cover"
          />
        </div>

        <h3 className="mt-4 font-semibold text-lg text-gray-800">{vet.name}</h3>
        <p className="text-gray-500 text-sm">{vet.role}</p>
      </div>
    ))}
  </div>
</section>


    </div>
  );
};

export default Home;
