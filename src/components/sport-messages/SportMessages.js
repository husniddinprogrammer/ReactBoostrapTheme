import React from 'react';
import './SportMessages.scss';
import { Container, Row, Col, Card, Badge } from "react-bootstrap";

const topSports = [
    {
        category: "Travel",
        color: "danger",
        title: "8 initial problem of startups and their solution",
        author: "Carolyn",
        date: "Feb 28, 2022",
        read: "6 min read",
        img: "https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?w=360",
    },
    {
        category: "Technology",
        color: "warning",
        title: "Business ideas that will boom in upcoming years",
        author: "Billy",
        date: "Jul 19, 2022",
        read: "2 min read",
        img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
];

export default function SportMessages() {
    return (
        <Container className="my-5">
            {/* Header */}
            <h4 className="fw-bold">⚽ Sports update</h4>
            <p className="text-muted mb-4">
                Get the latest sports news and updates from football, tennis, formula one,
                cricket, NBA, and golf with live scores and stats
            </p>


            {/* Top cards */}
            <Row className="g-4 mb-5">
                {topSports.map((item, i) => (
                    <Col key={i} md={6}>
                        <Card className="text-white border-0">
                            <Card.Img
                                src={item.img}
                                style={{ height: 320, objectFit: "cover" }}
                            />
                            <Card.ImgOverlay className="d-flex flex-column justify-content-end">
                                <Badge bg={item.color} className="mb-2 align-self-start">
                                    {item.category}
                                </Badge>
                                <h3 className="fw-bold">{item.title}</h3>
                                <small>
                                    by {item.author} · {item.date} · {item.read}
                                </small>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}
