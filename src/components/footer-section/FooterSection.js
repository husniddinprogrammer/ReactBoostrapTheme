import React from 'react';
import './FooterSection.scss';
import { Container, Row, Col, Nav,Badge} from "react-bootstrap";

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function FooterSection() {
  return (
    <footer className="bg-dark text-light mt-5 pt-5 pb-4">
      <Container>
        <Row className="gy-4">
          {/* Brand / About */}
          <Col md={4}>
            <h5 className="fw-bold mb-3">blogzine</h5>
            <p className="text-secondary small">
              The next-generation blog, news, and magazine theme for you to
              start sharing your stories today! This Bootstrap based theme is
              ideal for all types of sites that deliver the news.
            </p>
            <p className="text-secondary small mb-0">©2024 Webestica. All rights reserved</p>
          </Col>


          {/* Navigation */}
          <Col md={3}>
            <h6 className="fw-bold mb-3">Navigation</h6>
            <Nav className="flex-column">
              <Nav.Link className="text-secondary p-0 mb-2">Features</Nav.Link>
              <Nav.Link className="text-secondary p-0 mb-2">Style Guide</Nav.Link>
              <Nav.Link className="text-secondary p-0 mb-2">Contact us</Nav.Link>
              <Nav.Link className="text-secondary p-0 mb-2">Get Theme</Nav.Link>
              <Nav.Link className="text-secondary p-0">Support</Nav.Link>
            </Nav>
          </Col>


          {/* News */}
          <Col md={2}>
            <h6 className="fw-bold mb-3">News</h6>
            <Nav className="flex-column">
              <Nav.Link className="text-secondary p-0 mb-2">Career <Badge bg="danger">2 Job</Badge></Nav.Link>
              <Nav.Link className="text-secondary p-0 mb-2">Technology</Nav.Link>
              <Nav.Link className="text-secondary p-0 mb-2">Startups</Nav.Link>
              <Nav.Link className="text-secondary p-0">Gadgets</Nav.Link>
            </Nav>
          </Col>


          {/* Tags */}
          <Col md={3}>
            <h6 className="fw-bold mb-3">Browse by Tag</h6>
            <div className="d-flex flex-wrap gap-2">
              {[
                "Travel", "Business", "Tech", "Gadgets", "Lifestyle", "Vaccine",
                "Marketing", "Sports", "Covid-19", "Politics"
              ].map(tag => (
                <Badge key={tag} bg="secondary" className="fw-normal px-3 py-2">
                  {tag}
                </Badge>
              ))}
            </div>


            <h6 className="fw-bold mt-4 mb-2">Our Social handles</h6>
            <div className="d-flex gap-3">
              <FaFacebookF />
              <FaTwitter />
              <FaLinkedinIn />
              <FaYoutube />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
