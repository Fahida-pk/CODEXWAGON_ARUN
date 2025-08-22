import React from "react";
import "./Clients.css";

const clients = [
  { name: "BYD", logo: "/images/BYD-Logo.png" },
  { name: "Indel Money", logo: "/images/indel.png" },
  { name: "UFC Gym", logo: "/images/ufc1.png" },
  { name: "GEMS", logo: "/images/gemslogo.png" },
  { name: "Jayalakshmi", logo: "/images/jayalakshmi1.png" },
  { name: "Ford", logo: "/images/ford.png" },
  { name: "Muthoot", logo: "/images/muthoot.png" },
  { name: "Wipro", logo: "/images/wipro1.png" },
  { name: "Synthite", logo: "/images/synthite.png" },
  { name: "BharatBenz", logo: "/images/bharatbenz.png" },
 
];

export default function Clients() {
  return (
    <section className="clients-section">
      <h2>Happy Clients</h2>
      <h1>Our Network of Trusted Collaborative Brands</h1>
      <h3>Forging Lasting Connections Through Trust, Innovation, and Dedication</h3>

      <div className="clients-grid">
  {clients.slice(0, 10).map((client, index) => (
    <div key={index} className="client-card">
      <img src={client.logo} alt={client.name} />
    </div>
  ))}

  <div className="last-row">
    {clients.slice(10).map((client, index) => (
      <div key={index} className="client-card">
        <img src={client.logo} alt={client.name} />
      </div>
    ))}
  </div>
</div>

      <div className="see-all-container">
        <button className="see-all-btn">See All Clients</button>
      </div>
    </section>
  );
}
