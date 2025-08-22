import React from "react";
import "./BlogsSection.css";

const blogPosts = [
  {
    image: "/images/blog1.jpg",
    title: "From Concept to Launch: A Step-by-Step Guide",
    excerpt: "It starts with an idea. The idea could be for a cafe, a startup, or a retail shop. But before...",
    date: "June 16, 2025",
    link: "#"
  },
  {
    image: "/images/blog2.jpg",
    title: "Common Web Development Mistakes to Avoid",
    excerpt: "Visitors leave your site for every additional second it takes to load. Every confusing form field...",
    date: "June 13, 2025",
    link: "#"
  },
  {
    image: "/images/blog3.jpg",
    title: "Facebook Ads Best Practices: How to Get More Leads",
    excerpt: "Bad ads cost you money. Great ads make you money. Many businesses run Facebook ads but...",
    date: "April 23, 2025",
    link: "#"
  },
  {
    image: "/images/blog4.jpg",
    title: "Google Ads vs Facebook Ads: Which Works Best?",
    excerpt: "Online advertising is important for businesses striving to increase their visibility and...",
    date: "April 23, 2025",
    link: "#"
  }
];

export default function BlogsSection() {
  return (
    <section className="blogs-section">
      <div className="container">
        <h2 className="section-title">Our <span>Blogs</span></h2>
        <p className="section-subtitle">Excellent customer service is our foundation</p>

        <div className="blogs-grid">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-card">
              <img src={post.image} alt={post.title} className="blog-image" />
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>
              <div className="blog-footer">
                <a href={post.link} className="read-more">READ MORE</a>
                <span className="blog-date">{post.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="view-more-container">
          <a href="#" className="view-more-btn">VIEW MORE</a>
        </div>
      </div>
    </section>
  );
}
