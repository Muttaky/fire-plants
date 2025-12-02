import React from "react";
import { useRouteError, Link } from "react-router";

const ErrorPage = () => {
  // Access the error object provided by React Router
  const error = useRouteError();

  // Determine the error status and message
  let status = error?.status || 404;
  let title = "Page Not Found";
  let message =
    "We're sorry, the page you requested doesn't seem to exist. It might have been moved or deleted.";

  if (status === 401) {
    title = "Unauthorized Access";
    message = "You do not have permission to view this page.";
  } else if (status === 404) {
    title = "404 - Plant Not Found";
    message =
      "We couldn't find the specific item or page you were looking for. Perhaps the plant was sold out or the link is incorrect.";
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-100 px-4">
      <div className="max-w-xl text-center p-10 bg-base-200 rounded-2xl shadow-2xl">
        {/* Error Status Code */}
        <h1 className="text-9xl font-extrabold text-error opacity-70 mb-4">
          {status}
        </h1>

        {/* Title and Message */}
        <h2 className="text-4xl font-bold mb-4 text-primary">{title}</h2>
        <p className="text-lg text-gray-700 mb-8">{message}</p>

        {/* Suggestions / Call to Action */}
        <div className="space-y-4">
          <p className="text-md text-gray-600 font-semibold">
            Here are some helpful links:
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link to="/" className="btn btn-primary btn-lg">
              🏠 Go to Homepage
            </Link>
            <Link to="/plants" className="btn btn-outline btn-lg">
              🛒 View All Items
            </Link>
          </div>
        </div>

        {/* Optional: Displaying the specific route path that caused the error */}
        {error.statusText || error.message ? (
          <div className="mt-8 pt-4 border-t border-gray-300">
            <p className="text-sm text-gray-500">
              **Route Attempted:**{" "}
              <code className="bg-gray-300 p-1 rounded text-sm">
                {error.data || "Unknown Path"}
              </code>
            </p>
            <p className="text-sm text-gray-500 mt-1">
              **Error Details:**{" "}
              <code className="bg-gray-300 p-1 rounded text-sm">
                {error.statusText || error.message}
              </code>
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ErrorPage;
