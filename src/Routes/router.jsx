// src/router/router.jsx
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Register from "../pages/Register";
import ServiceDetails from "../pages/ServiceDetails";
import ProtectedRoute from "../components/ProtectedRoute";
import ForgotPassword from "../pages/ForgotPassword"; // ✅ ঠিক করা import

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/services", element: <Services /> },
      { path: "/profile", element: <Profile /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/register", element: <Register /> },
      { path: "/forgot", element: <ForgotPassword /> }, // ✅ Forgot Password রাউট যোগ করা হলো
      {
        path: "/service/:id",
        element: (
          <ProtectedRoute>
            <ServiceDetails />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
