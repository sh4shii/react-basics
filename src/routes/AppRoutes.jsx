import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "../layouts/MainLayout";

// import Home from "../pages/Home"
// Lazy-loaded pages
const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Profile = lazy(() => import("../pages/Profile"));
const Settings = lazy(() => import("../pages/Settings"));
const NotFound = lazy(() => import("../pages/NotFound"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Routes>

        {/* Layout applied to ALL pages */}
        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/*Nested routing Protected Routes */}
          {/* no path only element -> kind of virtual routing */}
          <Route element={<ProtectedRoute />}>

            <Route path="/dashboard" element={<Dashboard />}>

              {/* /dashboard/profile */}
              <Route path="profile" element={<Profile />} />
              {/* /dashboard/settings */}
              <Route path="settings" element={<Settings />} />

            </Route>

            {/* admin routes */}
            {/* <AdminProvider> */}
                {/* <Route path="/admin" element={<Admin />} /> */}
            {/* </AdminProvider> */}


          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>

    </Suspense>
  );
}
