const About = () => {
  return (
    <section className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">About WarmPaws</h1>
      <p className="text-gray-700 mb-6 leading-relaxed">
        Welcome to <strong>WarmPaws</strong> — your trusted partner in keeping pets happy,
        healthy, and stylish during the winter season. We provide a variety of services
        such as grooming, pet clothing, and expert care tips for your furry friends.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-3">Our Mission</h2>
      <p className="text-gray-700 mb-6 leading-relaxed">
        At WarmPaws, our mission is to make your pets feel as comfortable and cared for
        as possible. We believe every pet deserves warmth, comfort, and love — and that’s
        why our products and services are specially tailored for every breed and size.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-3">Why Choose Us?</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Expert grooming and winter care advice.</li>
        <li>Comfortable and stylish pet clothing.</li>
        <li>Friendly and professional team who loves animals.</li>
        <li>Affordable pricing and seasonal offers.</li>
      </ul>

      <p className="mt-8 text-gray-600 italic">
        “Because your pets deserve nothing but the best.”
      </p>
    </section>
  );
};

export default About;
