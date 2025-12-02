import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Root";
import Home from "./Home";
import Plants from "./Plants";
import Profile from "./Profile";
import Plant from "./Plant";
import Login from "./Login";
import Register from "./Register";
import AuthProvider from "./AuthProvider";
import Private from "./Private";
import AboutUS from "./AboutUS";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage"; // Import the new component

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      { index: true, loader: () => fetch("/plants2.json"), Component: Home },
      {
        path: "/plants",
        loader: () => fetch("/plants.json"),
        Component: Plants,
      },
      {
        path: "/plants/:plantsId",
        loader: async ({ params }) => {
          let res = await fetch("/plants.json");
          let plants = await res.json();
          let plantsId = parseInt(params.plantsId);
          let plant = plants.find((a) => a.plantId === plantsId);
          return plant;
        },
        Component: Plant,
      },
      {
        path: "/profile",
        element: (
          <Private>
            <Profile></Profile>
          </Private>
        ),
      },
      {
        path: "/contact",
        element: (
          <Private>
            <Contact></Contact>
          </Private>
        ),
      },
      { path: "/login", Component: Login },
      { path: "/register", Component: Register },
      { path: "/about", Component: AboutUS },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
