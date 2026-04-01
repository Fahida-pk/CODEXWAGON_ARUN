import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import Home from "./pages/Home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ScrollPopup from "./components/ScrollPopup/ScrollPopup.jsx";

import "./index.css";

// ✅ Protected Route
function ProtectedRoute({ children }) {
  const user = localStorage.getItem("user");

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}

function App() {
  const location = useLocation();

  return (
    <GoogleOAuthProvider clientId="215524937212-jeb6llfahvkjdch569uvh1lgiol6fde4.apps.googleusercontent.com">
      <div className="app">
        <main>
          <Routes>
            {/* ✅ Public */}
            <Route path="/login" element={<Login />} />

            {/* ✅ Protected */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>

        {/* ✅ Hide footer in login */}
        {location.pathname !== "/login" && <ScrollPopup />}
        {location.pathname !== "/login" && <Footer />}
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;