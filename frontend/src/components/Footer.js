import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#BAFF29" }}>
      <Container>
        <Row>
          <Col className="text-center py-3">
            &copy; Copyright 2021, ElectroShop
            <div>
              <i className="fab fa-facebook-square fa-2x"></i>
              <i className="fab fa-twitter-square fa-2x"></i>
              <i className="fab fab fa-linkedin fa-2x"></i>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
