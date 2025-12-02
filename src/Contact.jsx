import React from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";

const Contact = () => {
  // Handler for the contact form submission
  const handleContactSubmit = (e) => {
    e.preventDefault();

    // Basic form cleanup and success message simulation
    const name = e.target.name.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    if (name && subject && message) {
      toast.success(
        `Thank you, ${name}! Your message about "${subject}" has been sent.`
      );

      // Clear the form fields
      e.target.reset();
    } else {
      toast.warning("Please fill out all required fields.");
    }
  };

  return (
    <div className="pt-20 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="text-center py-10">
        <h1 className="text-5xl font-extrabold text-primary mb-3">
          Get in Touch with GreenNest
        </h1>
        <p className="text-xl text-gray-600">
          We'd love to hear from you! Send us a message or visit our location.
        </p>
      </header>

      <div className="grid grid-cols-1  gap-12">
        {/* 1. Contact Information and Form Column */}
        <div>
          {/* Contact Information */}
          <section className="mb-10 p-6 bg-base-100 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-secondary">
              Our Details
            </h2>
            <div className="space-y-3 text-lg">
              <p>
                <strong className="font-semibold">Email:</strong>{" "}
                support@greennest.com
              </p>
              <p>
                <strong className="font-semibold">Phone:</strong> +1 (555)
                123-4567
              </p>
              <p>
                <strong className="font-semibold">Address:</strong> 141 Green
                Street, Suite 100, Plantopia, USA
              </p>
              <p>
                <strong className="font-semibold">Hours:</strong> Mon - Fri,
                9:00 AM - 5:00 PM
              </p>
            </div>
          </section>

          {/* Contact Form */}
          <section className="p-6 bg-base-100 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-primary">
              Send Us a Message
            </h2>
            <form onSubmit={handleContactSubmit}>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Your Name *</span>
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Email Address *</span>
                </label>
                <br />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Subject *</span>
                </label>
                <br />
                <input
                  type="text"
                  placeholder="I need help with..."
                  name="subject"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mb-6">
                <label className="label">
                  <span className="label-text">Message *</span>
                </label>
                <br />
                <textarea
                  placeholder="How can we assist you?"
                  name="message"
                  className="textarea textarea-bordered h-32"
                  required
                ></textarea>
              </div>

              <div className="form-control">
                <button type="submit" className="btn btn-primary btn-lg">
                  Submit Message
                </button>
              </div>
            </form>
          </section>
        </div>

        {/* 2. Map Column */}
      </div>
    </div>
  );
};

export default Contact;
