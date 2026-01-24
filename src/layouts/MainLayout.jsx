import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Navbar />
      <main style={{ flex: 1, overflow: "hidden" }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}