import React from 'react';
import "./TopMessages.scss";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";

const posts = [
    {
        category: "Sports",
        color: "danger",
        title: "Skills that you can learn from business",
        author: "Joan",
        date: "Aug 15, 2022",
        img: "https://blogzine.webestica.com/assets/images/blog/4by3/07.jpg",
    },
    {
        category: "Marketing",
        color: "success",
        title: "10 tell-tale signs you need to get a new business",
        author: "Bryan",
        date: "Jun 01, 2022",
        img: "https://blogzine.webestica.com/assets/images/blog/4by3/08.jpg",
    },
    {
        category: "Photography",
        color: "primary",
        title: "This is why this year will be the year of startups",
        author: "Samuel",
        date: "Dec 07, 2022",
        img: "https://blogzine.webestica.com/assets/images/blog/4by3/09.jpg",
    },
    {
        category: "Technology",
        color: "warning",
        title: "Best Pinterest Boards for learning about business",
        author: "Dennis",
        date: "Sep 07, 2022",
        img: "https://blogzine.webestica.com/assets/images/blog/4by3/11.jpg",
    },
];

export default function TopMessages() {
    return (
        <Container className="my-5">
            <h4 className="fw-bold mb-1">📢 Today's top highlights</h4>
            <p className="text-muted mb-4">
                Latest breaking news, pictures, videos, and special reports
            </p>

            <Row className="g-4">
                {posts.map((post, i) => (
                    <Col key={i} md={6} lg={3}>
                        <Card className="h-100 shadow-sm border-0">
                            <div style={{ position: "relative" }}>
                                <Card.Img
                                    variant="top"
                                    src={post.img}
                                    style={{ height: 180, objectFit: "cover" }}
                                />
                                <Badge
                                    bg={post.color}
                                    style={{ position: "absolute", top: 10, left: 10 }}
                                >
                                    {post.category}
                                </Badge>
                            </div>
                            <Card.Body>
                                <Card.Title className="fs-6 fw-semibold">
                                    {post.title}
                                </Card.Title>
                            </Card.Body>
                            <Card.Footer className="bg-white border-0 text-muted small">
                                <Card.Img 
                                    variant="left"
                                    src={post.img}
                                    style={{ height: 30, width: 30, objectFit: "cover" }}
                                    className="rounded-circle"></Card.Img>  &nbsp;
                                by {post.author} · {post.date}
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}
