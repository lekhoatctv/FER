import { useState } from 'react';
import { Container, Row, Col, Card, Badge, Button, Modal as BootstrapModal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import ThemeToggle from './ThemeToggle';
import ListOfOrchids from '../data/ListOfOrchids';
import './Natural.css';

const Natural = () => {
    const [naturalOrchids] = useState(ListOfOrchids.filter(orchid => orchid.isNatural));
    const [show, setShow] = useState(false);
    const [selectedOrchid, setSelectedOrchid] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = (orchid) => {
        setSelectedOrchid(orchid);
        setShow(true);
    };

    return (
        <>
            <Navigation />
            <div className="natural-page">
                <ThemeToggle />

                <Container fluid className="py-4">
                    <Row className="mb-4">
                        <Col>
                            <div className="text-center">
                                <h1 className="display-4 fw-bold text-success mb-3">
                                    🌿 Natural Orchids Collection
                                </h1>
                                <p className="lead text-muted">
                                    Discover {naturalOrchids.length} beautiful natural orchid species in their pure form
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        {naturalOrchids.map(orchid => (
                            <Col key={orchid.id} xs={12} sm={6} lg={4} xl={3} className="mb-4">
                                <Card className="h-100 shadow-sm orchid-card-bootstrap">
                                    <div className="position-relative">
                                        <Card.Img
                                            variant="top"
                                            src={orchid.image}
                                            alt={orchid.name}
                                            style={{ height: '200px', objectFit: 'cover' }}
                                        />
                                        {orchid.isSpecial && (
                                            <Badge
                                                bg="warning"
                                                className="position-absolute top-0 start-0 m-2"
                                            >
                                                ⭐ Special
                                            </Badge>
                                        )}
                                    </div>

                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title className="text-success fw-bold">
                                            {orchid.name}
                                        </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted fst-italic">
                                            {orchid.category}
                                        </Card.Subtitle>

                                        <div className="mb-3">
                                            <small className="text-muted d-block">
                                                <strong>Origin:</strong> {orchid.origin}
                                            </small>
                                            <small className="text-muted d-block">
                                                <strong>Colors:</strong> {orchid.color}
                                            </small>
                                            <small className="text-muted d-block">
                                                <strong>Rating:</strong> ⭐ {orchid.rating}/5.0
                                            </small>
                                        </div>

                                        <div className="mt-auto d-grid gap-2">
                                            <Button
                                                variant="outline-primary"
                                                size="sm"
                                                onClick={() => handleShow(orchid)}
                                            >
                                                Quick View
                                            </Button>
                                            <Button
                                                as={Link}
                                                to={`/detail/${orchid.id}`}
                                                variant="success"
                                                size="sm"
                                            >
                                                Full Details
                                            </Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>

                {/* Bootstrap Modal */}
                <BootstrapModal show={show} onHide={handleClose} size="lg" centered>
                    <BootstrapModal.Header closeButton>
                        <BootstrapModal.Title className="text-success">
                            {selectedOrchid?.name}
                        </BootstrapModal.Title>
                    </BootstrapModal.Header>
                    <BootstrapModal.Body>
                        {selectedOrchid && (
                            <Row>
                                <Col md={6}>
                                    <img
                                        src={selectedOrchid.image}
                                        alt={selectedOrchid.name}
                                        className="img-fluid rounded"
                                    />
                                </Col>
                                <Col md={6}>
                                    <h5 className="text-muted fst-italic mb-3">
                                        {selectedOrchid.category} Family
                                    </h5>

                                    <div className="mb-3">
                                        <p><strong>Origin:</strong> {selectedOrchid.origin}</p>
                                        <p><strong>Colors:</strong> {selectedOrchid.color}</p>
                                        <p><strong>Rating:</strong> ⭐ {selectedOrchid.rating}/5.0</p>
                                        <p>
                                            <strong>Type:</strong>
                                            <Badge bg={selectedOrchid.isNatural ? 'success' : 'info'} className="ms-2">
                                                {selectedOrchid.isNatural ? '🌿 Natural' : '🧪 Hybrid'}
                                            </Badge>
                                        </p>
                                    </div>

                                    <p className="text-muted">
                                        This beautiful {selectedOrchid.name} is a natural orchid species
                                        from {selectedOrchid.origin}. Known for its stunning {selectedOrchid.color.toLowerCase()}
                                        blooms, it represents the pure beauty of nature's creation.
                                    </p>
                                </Col>
                            </Row>
                        )}
                    </BootstrapModal.Body>
                    <BootstrapModal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button
                            as={Link}
                            to={`/detail/${selectedOrchid?.id}`}
                            variant="success"
                            onClick={handleClose}
                        >
                            View Full Details
                        </Button>
                    </BootstrapModal.Footer>
                </BootstrapModal>
            </div>
        </>
    );
};

export default Natural;