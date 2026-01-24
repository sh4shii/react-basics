import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./context/AuthContext";

// DEFINE ALL ROUTES IN IT
export default function App() {
  return (
    <AuthProvider>
      {/* <AdminProvider> */}
        <AppRoutes />
     {/* </AdminProvider> */}
    </AuthProvider>
  );
}