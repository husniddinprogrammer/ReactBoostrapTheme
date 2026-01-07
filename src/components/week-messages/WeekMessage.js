import React from 'react';
import './WeekMessage.scss';
import { Container, Row, Col, Card, Badge } from "react-bootstrap";

const sidePosts = [
    {
        category: "Lifestyle",
        color: "danger",
        title: "The pros and cons of business agency",
        author: "Samuel",
        date: "Jan 22, 2022",
        img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    },
    {
        category: "Sports",
        color: "primary",
        title: "5 reasons why you shouldn't startup",
        author: "Dennis",
        date: "Mar 07, 2022",
        img: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
    },
    {
        category: "Business",
        color: "success",
        title: "Five unbelievable facts about money",
        author: "Bryan",
        date: "Jun 17, 2022",
        img: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e",
    },
    {
        category: "Technology",
        color: "warning",
        title: "Around the web: 20 fabulous infographics about business",
        author: "Jacqueline",
        date: "Nov 11, 2022",
        img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
];

export default function WeekMessage() {
    return (
        <Container className="my-5">
            <h4 className="fw-bold"><i className='bi bi-bookmark-star me-2'></i> Last week top highlights</h4>
            <p className="text-muted mb-4">
                Check last week's top highlights, news, stories and headline news
            </p>

            <Row className="g-4">
                {/* Main card */}
                <Col lg={8}>
                    <Card className="text-white border-0">
                        <Card.Img
                            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
                            style={{ height: 400, objectFit: "cover" }}
                        />
                        <Card.ImgOverlay className="d-flex flex-column justify-content-end">
                            <div className="mb-2">
                                <Badge bg="primary" className="me-2">Business</Badge>
                                <Badge bg="secondary">Sponsored</Badge>
                            </div>
                            <h2 className="fw-bold">
                                Never underestimate the influence of social media
                            </h2>
                            <small>by Carolyn · Jan 26, 2022 · 3 min read</small>
                        </Card.ImgOverlay>
                    </Card>
                </Col>

                {/* Side list */}
                <Col lg={4}>
                    <div className="d-flex flex-column gap-3">
                        {sidePosts.map((post, i) => (
                            <div key={i} className="d-flex gap-3">
                                <img
                                    src={post.img}
                                    alt=""
                                    width={80}
                                    height={80}
                                    style={{ objectFit: "cover", borderRadius: 8 }}
                                />
                                <div>
                                    <Badge bg={post.color} className="mb-1">
                                        {post.category}
                                    </Badge>
                                    <h6 className="fw-semibold mb-1">{post.title}</h6>
                                    <small className="text-muted">
                                        <Card.Img
                                            variant="left"
                                            src={post.img}
                                            style={{ height: 30, width: 30, objectFit: "cover" }}
                                            className="rounded-circle"></Card.Img>  &nbsp;
                                        by {post.author} · {post.date}
                                    </small>
                                </div>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
