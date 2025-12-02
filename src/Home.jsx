import React from "react";
import { Link, useLoaderData } from "react-router"; // Ensure Link import is from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Home = () => {
  let plants = useLoaderData();
  // Assuming plants array is long enough for slicing
  let featuredPlants = plants.slice(0, 4);
  let plantOfTheWeek = plants[1] || {}; // Fallback for safety

  return (
    // Add top padding to account for the sticky navbar height
    <div className="pt-0">
      {/* Global Container for Side Margins */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Hero/Carousel Section (Height 60-70% - h-[65vh] used) */}
        <section className="my-10 h-[65vh] overflow-hidden rounded-lg shadow-xl">
          <div className=" h-full">
            <Swiper spaceBetween={0} slidesPerView={1} className="h-full">
              {/* Slide 1 */}
              <SwiperSlide className="relative h-full">
                <img
                  src="/c1.png"
                  alt="Indoor plants in a bright room"
                  className="w-full h-full object-cover"
                />
                <h2 className="absolute bottom-0 text-white p-5 bg-black bg-opacity-60 w-full text-xl sm:text-2xl">
                  GreenNest is built for plant lovers who want to nurture and
                  decorate their homes with healthy indoor plants.
                </h2>
              </SwiperSlide>

              {/* Slide 2 */}
              <SwiperSlide className="relative h-full">
                <img
                  src="/c2.png"
                  alt="A person watering a plant"
                  className="w-full h-full object-cover"
                />
                <h2 className="absolute bottom-0 text-white p-5 bg-black bg-opacity-60 w-full text-xl sm:text-2xl">
                  The platform allows users to explore plant care guides, buy
                  plants, and book expert consultations.
                </h2>
              </SwiperSlide>

              {/* Slide 3 */}
              <SwiperSlide className="relative h-full">
                <img
                  src="/c3.png"
                  alt="A clean, green living space"
                  className="w-full h-full object-cover"
                />
                <h2 className="absolute bottom-0 text-white p-5 bg-black bg-opacity-60 w-full text-xl sm:text-2xl">
                  Ensuring a greener and healthier living space during any
                  season.
                </h2>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        {/* 2. Featured Items Section (Top Rated/All Items Preview - 4 Cards) */}
        <section className="text-center my-20">
          <h1 className="text-4xl font-bold mb-10 text-primary">
            Featured Indoor Plants
          </h1>

          {/* 4-Card Grid, Equal Height Cards, Short Description */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {featuredPlants.map((plant) => (
              <div key={plant.plantId} className="h-full">
                <div className="card bg-base-100 h-full shadow-lg border border-gray-100 flex flex-col">
                  <figure className="px-5 pt-5 flex-shrink-0 h-56">
                    {" "}
                    {/* Fixed image height */}
                    <img
                      src={plant.image}
                      alt={plant.plantName}
                      className="rounded-xl w-full h-full object-cover"
                    />
                  </figure>
                  <div className="card-body items-center text-center flex-grow">
                    <h2 className="card-title text-2xl mb-1">
                      {plant.plantName}
                    </h2>

                    {/* Short Description (no Lorem Text) */}
                    <p className="text-sm text-gray-500 mb-3 flex-grow">
                      {plant.description.substring(0, 100)}...
                    </p>

                    <div className="flex justify-between w-full px-2 mt-auto">
                      <div className="badge badge-secondary text-primary p-4">
                        Price: ${plant.price}
                      </div>
                      <div className="badge badge-accent p-4">
                        Rating: {plant.rating}
                      </div>
                    </div>

                    <div className="card-actions mt-6">
                      <Link to={`/plants/${plant.plantId}`}>
                        <button className="btn btn-success hover:bg-green-700">
                          See More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Link to="/plants" className="btn btn-primary mt-12 btn-lg">
            View All Items
          </Link>
        </section>

        {/* 3. Plant Care Tips Section (Categories/Blog Section) */}
        <section className="text-center my-20">
          <h1 className="text-4xl font-bold mb-10 text-primary">
            Essential Care Tips
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tip 1 */}
            <div className="card bg-base-100 shadow-lg h-full">
              <figure className="px-10 pt-10">
                <img
                  src="/watar.png"
                  alt="Watering Can"
                  className="rounded-xl h-48 object-contain"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Watering Schedule</h2>
                <p>
                  Learn the proper frequency and technique for watering specific
                  plant species.
                </p>
              </div>
            </div>

            {/* Tip 2 */}
            <div className="card bg-base-100 shadow-lg h-full">
              <figure className="px-10 pt-10">
                <img
                  src="/sun.png"
                  alt="Sunlight"
                  className="rounded-xl h-48 object-contain"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Optimal Sunlight</h2>
                <p>
                  Identify the best spot in your home for maximum plant growth
                  and health.
                </p>
              </div>
            </div>

            {/* Tip 3 */}
            <div className="card bg-base-100 shadow-lg h-full">
              <figure className="px-10 pt-10">
                <img
                  src="/ferti.png"
                  alt="Fertilizer"
                  className="rounded-xl h-48 object-contain"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Organic Fertilizing</h2>
                <p>
                  Discover natural and organic methods to feed and nourish your
                  plants seasonally.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Promotional / Plant of the Week Section */}
        {plantOfTheWeek.plantName && (
          <section className="my-20">
            <h1 className="text-4xl font-bold text-center mb-10 text-primary">
              Plant of the Week: {plantOfTheWeek.plantName}
            </h1>
            <div className="hero bg-base-200 rounded-lg shadow-xl p-8">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                  src={plantOfTheWeek.image}
                  className="max-w-sm rounded-lg shadow-2xl w-full lg:w-1/2"
                  alt={plantOfTheWeek.plantName}
                />
                <div className="lg:w-1/2">
                  <h2 className="text-5xl font-bold mb-4">
                    {plantOfTheWeek.plantName}
                  </h2>
                  <p className="py-6">{plantOfTheWeek.description}</p>
                  <Link
                    to={`/plants/${plantOfTheWeek.plantId}`}
                    className="btn btn-primary"
                  >
                    Discover More
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 5. Experts / Team Section */}
        <section className="text-center my-20">
          <h1 className="text-4xl font-bold mb-10 text-primary">
            Meet Our Green Experts
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Expert 1 */}
            <div className="card bg-base-100 shadow-lg h-full">
              <figure className="px-10 pt-10">
                <img
                  src="/e1.png"
                  alt="Expert Jacob"
                  className="rounded-full w-32 h-32 object-cover"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3>Jacob</h3>
                <h2 className="card-title text-secondary">Disease Expert</h2>
              </div>
            </div>

            {/* Expert 2 */}
            <div className="card bg-base-100 shadow-lg h-full">
              <figure className="px-10 pt-10">
                <img
                  src="/e2.png"
                  alt="Expert Martin"
                  className="rounded-full w-32 h-32 object-cover"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3>Martin</h3>
                <h2 className="card-title text-secondary">Species Expert</h2>
              </div>
            </div>

            {/* Expert 3 */}
            <div className="card bg-base-100 shadow-lg h-full">
              <figure className="px-10 pt-10">
                <img
                  src="/e3.png"
                  alt="Expert Haris"
                  className="rounded-full w-32 h-32 object-cover"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3>Haris</h3>
                <h2 className="card-title text-secondary">
                  Fertilizer Specialist
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Newsletter/Call to Action Section */}
        <section className="my-20">
          <div className="hero bg-secondary text-primary rounded-lg p-10 shadow-xl">
            <div className="hero-content text-center">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-bold mb-4">
                  Join Our Green Community!
                </h2>
                <p className="mb-5 text-lg">
                  Subscribe for exclusive tips, offers, and new plant arrivals.
                </p>
                <div className="flex justify-center flex-col sm:flex-row">
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    className="input input-bordered w-full sm:max-w-xs mr-2 mb-2 sm:mb-0 text-gray-800"
                  />
                  <button className="btn btn-primary text-secondary">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>{" "}
      {/* End of Global Container */}
      {/* Footer will be outside the container, placed by Root.jsx */}
    </div>
  );
};

export default Home;
