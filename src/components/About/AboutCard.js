import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Muhammad Azeem </span>
            from <span className="purple"> London, United Kingdom.</span>
            <br />
            I am currently looking for role as a software developer.
            <br />
            I have completed Bachelor  (BSc honours) in computer Science from London South 
            Bank University.
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
            "Build not just for users—build for change."{" "}
          </p>
          <footer className="blockquote-footer">AZEEM</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
