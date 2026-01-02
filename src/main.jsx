import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Pages/Home";
import Collections from "./Pages/Collections";
import WatchDetails from "./Pages/Watch_details";
import AboutUs from "./Pages/About_Us";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Search from "./components/Search";
import Login from "./Pages/Login";
import Filter from "./components/Filter";
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/shop", element: <Collections /> },
  { path: "/watch/:id", element: <WatchDetails /> },
  { path: "/about", element: <AboutUs /> },
  { path: "/contact", element: <Contact /> },
  { path: "/cart", element: <Cart /> },
  { path: "/search", element: <Search /> },
  { path: "/login", element: <Login /> },
  { path: "/filter", element: <Filter /> },
  { path: "*", element: <Home /> }, 
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
