import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"; // Add this import


function News() {
  return (
    <section>
      <Container fluid className="news-section">
        <Row>
          <Col>
            <h1 className="news-heading">Latest News</h1>
            <p>Stay updated with the latest news and updates here.</p>
            {/* Add your news content here */}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default News;