import React from "react";
import Hero from "./assets/Component/about/About";
import Courses from "./assets/Component/card/Card";
import About from "./assets/Component/hero/Hero";
import "./App.css";

const courses = [
  {
    title: "Web Design Strategy",
    level: "Intermediate",
    duration: "1 hour 33 min",
    rating: 5,
    enrolled: "Enroll Now",
    imgSrc: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    title: "Software Development",
    level: "Intermediate",
    duration: "1 hour 05 min",
    rating: 4.5,
    enrolled: "Enroll Now",
    imgSrc: "logo1.jpg",
  },
  {
    title: "Graphics Design",
    level: "Intermediate",
    duration: "3 hour 40 min",
    rating: 5,
    enrolled: "Enroll Now",
    imgSrc: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    title: "Digital Marketing",
    level: "Intermediate",
    duration: "2 hour 35 min",
    rating: 4.5,
    enrolled: "Enroll Now",
    imgSrc: "https://randomuser.me/api/portraits/women/4.jpg",
    featured: true,
  },
];

function App() {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="logo">EduSphere</div>
        <nav>
          <ul className="nav">
            <li>Class</li>
            <li>subject</li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button className="btn-outline">Sign in</button>
          <button className="btn-primary">Sign up</button>
        </div>
      </header>

      {/* Hero */}
      <Hero />

      {/* Courses */}
      <Courses cards={courses} />

      {/* About */}
      <About />

      {/* Footer */}
      <footer className="footer">© 2025 EduSphere. All rights reserved.</footer>
    </div>
  );
}

export default App;
