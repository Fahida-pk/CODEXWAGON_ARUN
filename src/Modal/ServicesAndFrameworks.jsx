import React from "react";
import { Lightbulb, Users, Target, Code } from "lucide-react";
import "./ServicesAndFrameworks.css"; // CSS import

const services = [
  {
    icon: <Users size={60} className="icon" />,
    title: "Team Formation",
    desc: "Collective efforts lie at the foundation of every project as we draw on expert skills.",
  },
  {
    icon: <Target size={60} className="icon" />,
    title: "Meet Objectives",
    desc: "Helping 100s of businesses meet their specific goals in a time-bound fashion.",
  },
  {
    icon: <Code size={60} className="icon" />,
    title: "Deployment",
    desc: "Drawing on meticulous research and industry insights, our experts deploy tailor-made strategies.",
  },
  {
    icon: <Lightbulb size={60} className="icon" />,
    title: "Analyzing Ideas",
    desc: "We kick things off by clearly laying out your core ideas and then proceed to realize them.",
  },
];

export default function CustomerServiceSection() {
  return (
    <section className="customer-section">
      <div className="heading">
        <h2>
          Excellent Customer <br />
          <span>Service Is Our Foundation</span>
        </h2>
      </div>

      <div className="cards">
        {services.map((item, index) => (
          <div key={index} className="card">
            {item.icon}
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
