import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router"; // Use react-router-dom
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
  return (
    <div>
      <Header></Header>

      {/* Main content area */}
      <main className="min-h-screen">
        <Outlet></Outlet>
      </main>

      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default Root;
