import React from 'react';
import './FormSection.scss';
import { Container, Row, Col, Form, Button } from "react-bootstrap";


export default function FormSection() {
  return (
    <Container fluid className="newsletter-wrapper py-5">
      <Row className="justify-content-center text-center">
        <Col md={8}>
          <h1 className="newsletter-title">Never miss a story!</h1>
          <p className="newsletter-text">
            Get the freshest headlines and updates sent uninterrupted to your inbox.
          </p>

          <Form className="d-flex justify-content-center mt-4">
            <Form.Control
              type="email"
              placeholder="Enter your email address"
              className="newsletter-input"
            />
            <Button variant="primary" className="newsletter-btn">
              Subscribe
            </Button>
          </Form>

          <small className="text-muted d-block mt-3">
            By subscribing you agree to our <a href="#">Privacy Policy</a>
          </small>
        </Col>
      </Row>
    </Container>
  )
}
