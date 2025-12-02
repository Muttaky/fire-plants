import React, { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router"; // Use react-router-dom

const Plants = () => {
  // 1. Get initial data from the loader
  const initialPlants = useLoaderData();

  // 2. State for controlling the displayed list (after filtering/sorting)
  const [displayedPlants, setDisplayedPlants] = useState(initialPlants);
  // 3. State for the current sorting method
  const [sortOrder, setSortOrder] = useState("none"); // 'asc', 'desc', 'none'
  // 4. State for the current filter category
  const [filterCategory, setFilterCategory] = useState("All");

  // Find all unique categories for the filter dropdown
  const allCategories = [
    "All",
    ...new Set(initialPlants.map((plant) => plant.category || "Other")),
  ];

  // 5. useEffect to apply filtering and sorting whenever dependencies change
  useEffect(() => {
    let currentPlants = [...initialPlants];

    // --- Filtering Logic ---
    if (filterCategory !== "All") {
      currentPlants = currentPlants.filter(
        (plant) => plant.category === filterCategory
      );
    }

    // --- Sorting Logic ---
    if (sortOrder !== "none") {
      currentPlants.sort((a, b) => {
        const priceA = parseFloat(a.price);
        const priceB = parseFloat(b.price);

        if (sortOrder === "asc") {
          return priceA - priceB;
        } else {
          return priceB - priceA;
        }
      });
    }

    setDisplayedPlants(currentPlants);
  }, [initialPlants, sortOrder, filterCategory]); // Depend on initial data, sort order, and filter category

  // Function to handle price sorting change
  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  // Function to handle category filtering change
  const handleFilterChange = (category) => {
    setFilterCategory(category);
    // Reset sort when filter changes, optional but often useful
    setSortOrder("none");
  };

  return (
    <div className="pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center my-10 text-primary">
        All Items
      </h1>

      {/* Filter and Sort Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 p-4 bg-base-200 rounded-lg shadow-sm">
        {/* Filtering Dropdown */}
        <div className="form-control w-full md:w-auto mb-4 md:mb-0">
          <label className="label">
            <span className="label-text">Filter by Category:</span>
          </label>
          <select
            className="select select-bordered"
            value={filterCategory}
            onChange={(e) => handleFilterChange(e.target.value)}
          >
            {allCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Sorting Dropdown */}
        <div className="form-control w-full md:w-auto">
          <label className="label">
            <span className="label-text">Sort by Price:</span>
          </label>
          <select
            className="select select-bordered"
            value={sortOrder}
            onChange={handleSortChange}
          >
            <option value="none">Default (Unsorted)</option>
            <option value="asc">Price: Low to High (Ascending)</option>
            <option value="desc">Price: High to Low (Descending)</option>
          </select>
        </div>
      </div>

      {/* Display Cards in a Responsive Grid (4 per row on XL) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pb-20">
        {displayedPlants.length === 0 && (
          <div className="col-span-full text-center py-10 text-xl text-gray-500">
            No plants found matching your criteria.
          </div>
        )}

        {displayedPlants.map((plant) => (
          // Card Container to ensure similar height
          <div key={plant.plantId} className="h-full">
            <div className="card bg-base-100 h-full shadow-lg border border-gray-100 flex flex-col">
              {/* Image Section */}
              <figure className="px-5 pt-5 flex-shrink-0 h-56">
                <img
                  src={plant.image}
                  alt={plant.plantName}
                  className="rounded-xl w-full h-full object-cover"
                />
              </figure>

              {/* Card Body */}
              <div className="card-body items-center text-center flex-grow">
                <h2 className="card-title text-2xl mb-1">{plant.plantName}</h2>

                {/* Short Description (Important for equal height) */}
                <p className="text-sm text-gray-500 mb-3 flex-grow max-h-20 overflow-hidden">
                  {plant.description
                    ? plant.description.substring(0, 100) + "..."
                    : "Description not available."}
                </p>

                <div className="flex justify-between w-full px-2 mt-auto">
                  <div className="badge badge-secondary text-primary p-4">
                    Price: ${plant.price}
                  </div>
                  <div className="badge badge-accent p-4">
                    Rating: {plant.rating}
                  </div>
                </div>

                {/* View Details Button */}
                <div className="card-actions mt-6">
                  <Link to={`/plants/${plant.plantId}`}>
                    <button className="btn btn-success hover:bg-green-700">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plants;
