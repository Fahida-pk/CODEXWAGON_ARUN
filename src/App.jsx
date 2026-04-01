import { Routes, Route, useLocation } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import Home from "./pages/Home/Home.jsx";
import Services from "./pages/Services/Services.jsx";
import OurStoryPage from "./Modal/OurStoryPage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import WebDevelopment from "./components/Services/web.jsx";
import OurApproach from "./pages/OurApproach/OurApproach.jsx";
import CareerBanner from "./pages/Career/Career.jsx";
import NavContact from "./components/navcontact/navcontact.jsx";
import ScrollPopup from "./components/ScrollPopup/ScrollPopup.jsx";
import Login from "./pages/login/Login.jsx"; // ✅ correct path

import "./index.css";

function App() {
  const location = useLocation(); // ✅ detect current route

  return (
    <GoogleOAuthProvider clientId="215524937212-jeb6llfahvkjdch569uvh1lgiol6fde4.apps.googleusercontent.com">
      <div className="app">
        <main>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/ourstory" element={<OurStoryPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/our-approach" element={<OurApproach />} />
            <Route path="/career" element={<CareerBanner />} />
            <Route path="/contact" element={<NavContact />} />
            <Route path="/services/web" element={<WebDevelopment />} />

            {/* ✅ LOGIN ROUTE */}
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>

        {/* ✅ Hide footer & popup in login page */}
        {location.pathname !== "/login" && <ScrollPopup />}
        {location.pathname !== "/login" && <Footer />}
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;