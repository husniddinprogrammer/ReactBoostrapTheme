import './SponsoredMessages.scss';
import { Container, Row, Col, Badge } from 'react-bootstrap';

const sponsored = [
    {
        category: "Lifestyle",
        color: "danger",
        title: "The pros and cons of business agency",
        author: "Samuel",
        date: "Jan 22, 2022",
        img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    },
    {
        category: "Technology",
        color: "warning",
        title: "Around the web: 20 fabulous infographics about business",
        author: "Jacqueline",
        date: "Oct 11, 2022",
        img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
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
        category: "Marketing",
        color: "info",
        title: "7 common mistakes everyone makes while traveling",
        author: "Samuel",
        date: "Jul 22, 2022",
        img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
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
        category: "Photography",
        color: "secondary",
        title: "5 investment doubts you should clarify",
        author: "Judy",
        date: "Sep 30, 2022",
        img: "https://media.istockphoto.com/id/610259354/photo/young-woman-using-dslr-camera.jpg?s=612x612&w=0&k=20&c=gjAR4JiqA8lkGQzssSrXxo3yl-cwr5j7Hy47cy-10c4=",
    },
];

export default function SponsoredMessages() {
    return (
        <Container className='my-5'>
            <h5 className="fw-bold mb-3">📢 Sponsored news</h5>
            <Row className="g-4">
                {sponsored.map((post, i) => (
                    <Col key={i} md={6}>
                        <div className="d-flex gap-3">
                            <img
                                src={post.img}
                                alt=""
                                width={90}
                                height={90}
                                style={{ objectFit: "cover", borderRadius: 8 }}
                            />
                            <div>
                                <Badge bg={post.color} className="mb-1">
                                    {post.category}
                                </Badge>
                                <h6 className="fw-semibold mb-1">{post.title}</h6>
                                <small className="text-muted">
                                    by {post.author} · {post.date}
                                </small>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>

        </Container>
    )
}
