import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
          <Col md={7} className="home-header">
  {/* Replace the text with the transparent picture */}
  <div style={{ textAlign: "center" }}>
    <img
      src={require("../../Assets/pic.png")} // Adjust the path to your image
      alt="Transparent"
      style={{
        maxWidth: "100%",
        height: "auto",
        opacity: 0.8, // Set transparency
      }}
    />
  </div>
</Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
