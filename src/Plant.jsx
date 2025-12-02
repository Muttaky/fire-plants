import React, { useState } from "react";
import { useLoaderData } from "react-router"; // Ensure Link/useLoaderData import is from 'react-router-dom'
import { toast } from "react-toastify";

const Plant = () => {
  let plant = useLoaderData();
  const [quantity, setQuantity] = useState(1);

  // Ensure all required fields exist for display safety
  const {
    plantName,
    image,
    price,
    rating,
    description,
    availableStock,
    category,
    careLevel,
    providerName,
  } = plant;

  // --- Handlers ---

  // Handle Buy Now (Placeholder for actual purchase logic)
  const handleBuyNow = () => {
    if (quantity > availableStock) {
      toast.error(
        `Only ${availableStock} units of ${plantName} are available in stock.`
      );
      return;
    }
    if (quantity <= 0) {
      toast.warning("Quantity must be at least 1.");
      return;
    }

    // Simulating the purchase action
    toast.success(
      `Purchased ${quantity} x ${plantName} for $${(price * quantity).toFixed(
        2
      )}!`
    );
  };

  // Handle Consultation Form Submission
  const handleConsultationSubmit = (e) => {
    e.preventDefault();

    // Simple form validation check
    const name = e.target.name.value;
    const email = e.target.email.value;

    if (!name || !email) {
      toast.warning("Please fill out both Name and Email fields.");
      return;
    }

    // Simulating form submission
    toast.info(`Consultation booked for ${name}. We'll email you at ${email}.`);

    // Clear form fields
    e.target.name.value = "";
    e.target.email.value = "";
  };

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 1. Item Details and Buy Now Section */}
      <section className="bg-base-200 rounded-lg shadow-xl p-8">
        <div className="hero-content flex-col lg:flex-row lg:items-start p-0">
          {/* Image Column */}
          <div className="lg:w-1/2 flex justify-center mb-6 lg:mb-0">
            <img
              src={image}
              alt={plantName}
              className="w-full max-w-md rounded-lg shadow-2xl object-cover h-96"
            />
          </div>

          {/* Details and Action Column */}
          <div className="lg:w-1/2 lg:pl-10">
            <h1 className="text-5xl font-bold mb-3 text-primary">
              {plantName}
            </h1>

            {/* Tags / Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="badge badge-lg badge-secondary text-white p-3">
                Price: ${price}
              </span>
              <span className="badge badge-lg badge-accent text-white p-3">
                Rating: {rating} ★
              </span>
              <span className="badge badge-lg badge-info text-white p-3">
                Stock: {availableStock}
              </span>
              <span className="badge badge-lg badge-success text-white p-3">
                Care Level: {careLevel}
              </span>
              <span className="badge badge-lg badge-ghost p-3">
                Category: {category}
              </span>
            </div>

            <h2 className="text-2xl font-semibold mb-3">About the Plant</h2>
            <p className="py-4 text-lg text-gray-700">{description}</p>

            <p className="text-md text-gray-600 mb-6">
              **Provider:** {providerName}
            </p>

            {/* Buy Now Section (Quantity Input and Button) */}
            <div className="mt-8 pt-6 border-t border-gray-300">
              <h3 className="text-xl font-bold mb-3">Order Now</h3>
              <div className="flex items-center space-x-4">
                {/* Quantity Input */}
                <input
                  type="number"
                  min="1"
                  max={availableStock}
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                  }
                  className="input input-bordered w-24 text-center text-xl"
                />

                {/* Buy Now Button */}
                <button
                  onClick={handleBuyNow}
                  disabled={availableStock <= 0}
                  className="btn btn-primary btn-lg"
                >
                  {availableStock > 0
                    ? `Buy Now ($${(price * quantity).toFixed(2)})`
                    : "Out of Stock"}
                </button>
              </div>
              {availableStock <= 5 && availableStock > 0 && (
                <p className="text-warning text-sm mt-2">
                  Hurry! Only {availableStock} left.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Book Consultation Form Section */}
      <section className="mt-20 text-center">
        <h2 className="text-4xl font-bold mb-10 text-primary">
          Book Expert Consultation 🧑‍🌾
        </h2>
        <div className="flex justify-center">
          <div className="card bg-base-100 w-full max-w-xl shadow-2xl border border-gray-200">
            <form className="card-body" onSubmit={handleConsultationSubmit}>
              {/* Form Fields */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <br />
                <input
                  type="text"
                  className="input input-bordered"
                  placeholder="Your Name"
                  name="name"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <br />
                <input
                  type="email"
                  className="input input-bordered"
                  placeholder="Your Email"
                  name="email"
                  required
                />
              </div>

              {/* Consultation Type Dropdown (Added for context) */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Issue Type</span>
                </label>
                <br />
                <select className="select select-bordered" required>
                  <option value="">Select a Topic</option>
                  <option>Plant Disease/Pests</option>
                  <option>Watering Schedule</option>
                  <option>Re-potting Guidance</option>
                  <option>General Care for {plantName}</option>
                </select>
              </div>

              <div className="form-control mt-6">
                <button type="Submit" className="btn btn-neutral btn-lg">
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plant;
