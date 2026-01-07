import React from 'react';
import './TrendTopics.scss';
import { Container, Row, Col, Card } from 'react-bootstrap';

const trending = [
  { title: "Travel", img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429" },
  { title: "Business", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085" },
  { title: "Marketing", img: "https://images.unsplash.com/photo-1556761175-4b46a572b786" },
  { title: "Photography", img: "https://blogzine.webestica.com/assets/images/blog/1by1/thumb/04.jpg" },
];

export default function TrendTopics() {
  return (
    <Container>
        <div className="mt-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="fw-bold">Trending topics</h5>
          <a href="#" className="text-decoration-none small">View all categories</a>
        </div>
        <Row className="g-3">
          {trending.map((item, i) => (
            <Col key={i} xs={6} md={4} lg={3}>
              <Card className="text-white border-0">
                <Card.Img
                  src={item.img}
                  style={{ height: 120, objectFit: "cover" }}
                />
                <Card.ImgOverlay className="d-flex align-items-end p-2">
                  <span className="fw-semibold">{item.title}</span>
                </Card.ImgOverlay>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  )
}
