import React from "react";
import "./ToggleSection.css";

const techs = [
  { name: "PHP", img: "/images/php.png" },
  { name: "React", img: "/images/react.png.png" },
  { name: "Python", img: "/images/python.png" },
  { name: "Google Cloud", img: "/images/googlecloud.png" },
  { name: "AWS", img: "/images/aws.png" },
  { name: "Azure", img: "/images/azure.png" },
  { name: "Angular", img: "/images/mongoDB.png" },
  { name: "Node.js", img: "/images/node.png" },
  { name: "Next.js", img: "/images/Next.js.png" },
  { name: "Yii Framework", img: "/images/yii.png" },
];

export default function TechnologiesSection() {
  return (
    <section className="technologies-section">
      <h2>
        Technologies <span>We Used</span>
      </h2>
      <div className="tech-grid">
        {techs.map((t, i) => (
          <div className="tech-card" key={i}>
            <img src={t.img} alt="Technology logo" />
          </div>
        ))}
      </div>
    </section>
  );
}