import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ritika Binjola </span>
            from <span className="purple"> Delhi, India.</span>
            <br />
            Ritika Binjola is a self-motivated and independent software developer with a strong foundation in programming and problem-solving. Currently pursuing a B.Tech in Computer Science at Sharda University, she has excelled in technical domains, showcasing proficiency in Python, JavaScript, Java, and tools like Git and cloud-based platforms
            <br />
           
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ritika Binjolat</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
