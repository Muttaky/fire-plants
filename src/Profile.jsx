import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "react-router"; // Use react-router-dom for consistency
import { toast } from "react-toastify";

const Profile = () => {
  // 1. Context Access using use() hook
  let { user, updateUser, setUser } = use(AuthContext);
  let navigate = useNavigate();

  // Set initial values for form fields from user object, with fallbacks
  const initialName = user?.displayName || "";
  const initialPhoto = user?.photoURL || "";
  const initialEmail = user?.email || "Email Not Available";

  // 2. Update Handler
  let update = (e) => {
    e.preventDefault();
    let form = e.target;
    let name = form.name.value.trim();
    let photo = form.photo.value.trim();

    // Check if there are actual changes
    if (name === initialName && photo === initialPhoto) {
      toast.info("No changes detected.");
      return;
    }

    // Call Firebase/Auth provider function to update profile
    updateUser({ displayName: name, photoURL: photo })
      .then(() => {
        // Manually update the user state in the context
        setUser({ ...user, displayName: name, photoURL: photo });
        toast.success("Profile updated successfully!");
        navigate("/profile");
      })
      .catch((error) => {
        // Handle errors (e.g., photo URL invalid, permission denied)
        toast.warning(`Update failed: ${error.message}`);
      });
  };

  // Fallback while user is loading
  if (!user) {
    return (
      <div className="pt-24 text-center text-xl">
        <span className="loading loading-spinner loading-lg"></span> Loading
        profile...
      </div>
    );
  }

  return (
    // Main container centered and max-width restricted
    <div className="pt-20 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-base-200 rounded-xl shadow-xl p-8">
        {/* User Information Section (Center Aligned) */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="avatar mb-6">
            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src={
                  user.photoURL ||
                  "https://via.placeholder.com/150?text=No+Photo"
                }
                alt={`${user.displayName || "User"}'s Profile`}
              />
            </div>
          </div>

          <h1 className="text-4xl font-bold mb-1 text-primary">
            {user.displayName || "User Name Not Set"}
          </h1>
          <p className="py-2 text-lg text-gray-600">{initialEmail}</p>
        </div>

        {/* --- Profile Update Form Section --- */}
        <div className="divider text-xl font-semibold">Update Information</div>

        {/* Form Container (Symmetrical and Centered) */}
        <div className="flex justify-center">
          <div className="card w-full max-w-md bg-base-100 shadow-lg">
            <form onSubmit={update} className="card-body">
              {/* Name Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <br />
                <input
                  type="text"
                  className="input input-bordered"
                  placeholder="Enter New Name"
                  name="name"
                  defaultValue={initialName}
                  required
                />
              </div>

              {/* Photo URL Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <br />
                <input
                  type="url"
                  className="input input-bordered"
                  placeholder="Enter New Photo URL"
                  name="photo"
                  defaultValue={initialPhoto}
                />
              </div>

              {/* Submit Button (Centered, full width within card) */}
              <div className="form-control mt-6">
                <button type="Submit" className="btn btn-primary btn-lg">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
