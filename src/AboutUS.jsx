import React from "react";
import { Link } from "react-router"; // Use Link for navigation

const AboutUS = () => {
  return (
    <div className="pt-20 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero/Title Section */}
      <header className="text-center py-16 bg-base-200 rounded-lg shadow-md mb-12">
        <h1 className="text-5xl font-extrabold text-primary mb-3">
          Our Story at GreenNest
        </h1>
        <p className="text-xl text-gray-600">
          Nurturing homes, one plant at a time.
        </p>
      </header>

      <div className="space-y-16">
        {/* 1. Mission and Vision Section */}
        <section className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-4 text-secondary">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              GreenNest was founded on the simple belief that **indoor plants
              should thrive, not just survive**. Our mission is to connect plant
              lovers with the highest quality, healthiest indoor plants and
              provide the expert guidance—from care tutorials to personal
              consultations—necessary to keep their green friends flourishing
              through every season.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We aim to simplify the world of plant care, making it accessible
              and enjoyable for everyone, from beginners to experienced
              collectors.
            </p>
          </div>
          <div className="lg:w-1/2">{/* Placeholder Image/Icon */}</div>
        </section>

        <hr />

        {/* 2. Our Values Section (The Team/Culture Context) */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-10 text-primary">
            The GreenNest Commitment
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {/* Value 1: Quality */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <svg
                className="w-10 h-10 text-success mx-auto mb-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l2.6 7.8h8.4l-6.8 4.8 2.6 7.8L12 18.4l-6.8 4.8 2.6-7.8L3 9.8h8.4z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-600">
                We source plants responsibly and use sustainable, eco-friendly
                packaging and practices in all our operations.
              </p>
            </div>

            {/* Value 2: Education */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <svg
                className="w-10 h-10 text-success mx-auto mb-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 3L1 12h3v8h14v-8h3L12 3zm0 13c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-2">Expertise</h3>
              <p className="text-gray-600">
                Our team comprises certified horticulturists and disease experts
                dedicated to providing accurate, practical advice.
              </p>
            </div>

            {/* Value 3: Community */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <svg
                className="w-10 h-10 text-success mx-auto mb-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-2">Support</h3>
              <p className="text-gray-600">
                We're here every step of the way, offering responsive customer
                service and hassle-free support.
              </p>
            </div>
          </div>
        </section>

        <hr />

        {/* 3. Call to Action/Next Step */}
        <section className="text-center bg-primary text-white p-10 rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Green Journey?
          </h2>
          <p className="mb-6 text-lg">
            Explore our full collection or get in touch with our experts today.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/plants"
              className="btn btn-secondary text-primary btn-lg"
            >
              Shop Our Plants
            </Link>
            <Link
              to="/contact"
              className="btn btn-outline border-white text-white hover:bg-white hover:text-primary btn-lg"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUS;
