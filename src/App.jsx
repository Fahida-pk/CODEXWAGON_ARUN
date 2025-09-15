import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Services from "./pages/Services/Services.jsx";
import OurStoryPage from "./Modal/OurStoryPage.jsx";
import Footer from "./components/Footer/Footer.jsx";
// import ChatBot from "./components/Chat/LiveChat.jsx"; // ❌ Collect.chat ഉപയോഗിക്കുന്നതിനാൽ ഒഴിവാക്കി
import OurApproach from "./pages/OurApproach/OurApproach.jsx";
import CareerBanner from "./pages/Career/Career.jsx";
import NavContact from "./components/navcontact/navcontact.jsx";
import ScrollPopup from "./components/ScrollPopup/ScrollPopup.jsx";

import "./index.css";

function App() {
  return (
    <div className="app">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ourstory" element={<OurStoryPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/our-approach" element={<OurApproach />} />
          <Route path="/career" element={<CareerBanner />} />
          <Route path="/contact" element={<NavContact />} />
        </Routes>
      </main>

      {/* Common components */}
      <ScrollPopup />
      <Footer />

      {/* Collect.chat widget auto-loads from index.html */}
    </div>
  );
}

export default App;
