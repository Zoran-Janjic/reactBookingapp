// Import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";

// Import the CSS file for global styles
import "./index.css";

// Import RouterProvider and createBrowserRouter for setting up routing
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Import the layout components
import RootLayout from "./layouts/root-layout";
import DashboardLayout from "./layouts/dashboard-layout";

// Import the page components
import IndexPage from "./routes/general/index";
import ContactPage from "./routes/general/ContactUs";
import SignInPage from "./routes/auth/sign-in";
import SignUpPage from "./routes/auth/sign-up";
import DashboardPage from "./routes/dashboard/dashboard";
import AdminDashboardPage from "./routes/dashboard/AdminDashboardPage";

/**
 * Create a router with routes configuration.
 * The structure defines the routes and their respective components.
 *
 * The main structure includes a RootLayout which serves as the base layout
 * for the primary routes: IndexPage, ContactPage, SignInPage, and SignUpPage.
 *
 * A nested structure includes DashboardLayout which serves as the base layout
 * for the dashboard-specific routes, with DashboardPage as the main component.
 */
const router = createBrowserRouter([
  {
    element: <RootLayout />, // Root layout component wrapping general routes
    children: [
      { path: "/", element: <IndexPage /> }, // Route for the homepage
      { path: "/contact", element: <ContactPage /> }, // Route for the contact page
      { path: "/sign-in/*", element: <SignInPage /> }, // Route for the sign-in page
      { path: "/sign-up/*", element: <SignUpPage /> }, // Route for the sign-up page
      {
        element: <DashboardLayout />, // Dashboard layout component for dashboard routes
        path: "dashboard",
        children: [
          { path: "", element: <DashboardPage /> }, // Route for the dashboard page
          { path: "admin", element: <AdminDashboardPage /> },
        ],
      },
    ],
  },
]);

/**
 * Render the React application into the root DOM element.
 *
 * The RouterProvider component is used to inject the router configuration
 * into the React component tree, enabling client-side routing.
 *
 * React.StrictMode is a wrapper component that helps with highlighting
 * potential problems in the application, such as deprecated APIs or side effects.
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
