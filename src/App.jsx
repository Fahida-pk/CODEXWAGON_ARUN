import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Services from "./pages/Services/Services.jsx";
import ServiceShowcase from "./pages/Services Showcase/Services Showcase.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import OurStoryPage from "./Modal/OurStoryPage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import LiveChat from "./components/Chat/LiveChat.jsx";

import ScrollPopup from "./components/ScrollPopup/ScrollPopup.jsx";

import './index.css';

function App() {
  return (
    <div className="app">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ourstory" element={<OurStoryPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/HowWeWork" element={<ServiceShowcase />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
       <ScrollPopup />

      <Footer />
      <LiveChat />
    </div>
  );
}

export default App;
