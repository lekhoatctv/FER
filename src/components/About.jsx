import { Container, Row, Col, Card, Accordion, Tab, Tabs } from 'react-bootstrap';
import Navigation from './Navigation';
import ThemeToggle from './ThemeToggle';
import './About.css';

const About = () => {
    return (
        <>
            <Navigation />
            <div className="about-page">
                <ThemeToggle />

                <Container fluid className="py-4">
                    {/* Hero Section */}
                    <Row className="mb-5">
                        <Col>
                            <div className="text-center">
                                <h1 className="display-4 fw-bold text-success mb-3">
                                    🌺 About Orchid Gallery
                                </h1>
                                <p className="lead text-muted">
                                    Your premier destination for discovering the world's most beautiful orchids
                                </p>
                            </div>
                        </Col>
                    </Row>

                    {/* Main Content with Tabs */}
                    <Row>
                        <Col>
                            <Tabs defaultActiveKey="story" id="about-tabs" className="mb-4">
                                <Tab eventKey="story" title="Our Story">
                                    <Row>
                                        <Col lg={8} className="mx-auto">
                                            <Card className="shadow-sm">
                                                <Card.Body className="p-4">
                                                    <h3 className="text-success mb-3">🌱 How It All Began</h3>
                                                    <p className="mb-3">
                                                        Welcome to Orchid Gallery, where passion meets beauty in the world of orchids.
                                                        Our journey began with a simple love for these magnificent flowers and has grown
                                                        into a comprehensive platform for orchid enthusiasts worldwide.
                                                    </p>
                                                    <p className="mb-3">
                                                        Founded by a team of botanists and orchid lovers, we've curated one of the most
                                                        extensive collections of orchid species information, bringing together natural
                                                        specimens from around the globe. Each orchid in our gallery represents hours of
                                                        research, careful documentation, and genuine appreciation for nature's artistry.
                                                    </p>
                                                    <p>
                                                        Today, we continue to expand our collection, share knowledge, and inspire others
                                                        to discover the incredible diversity and beauty of orchids. Whether you're a
                                                        beginner or an expert, we're here to support your orchid journey.
                                                    </p>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Tab>

                                <Tab eventKey="mission" title="Our Mission">
                                    <Row>
                                        <Col lg={8} className="mx-auto">
                                            <Card className="shadow-sm">
                                                <Card.Body className="p-4">
                                                    <h3 className="text-success mb-3">🎯 What We Stand For</h3>
                                                    <div className="row">
                                                        <div className="col-md-6 mb-3">
                                                            <div className="d-flex align-items-start">
                                                                <div className="flex-shrink-0 me-3">
                                                                    <div className="bg-success rounded-circle d-flex align-items-center justify-content-center"
                                                                        style={{ width: '40px', height: '40px' }}>
                                                                        <span className="text-white">🌿</span>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <h5>Conservation</h5>
                                                                    <p className="text-muted mb-0">
                                                                        Promoting awareness and conservation of orchid species worldwide.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-3">
                                                            <div className="d-flex align-items-start">
                                                                <div className="flex-shrink-0 me-3">
                                                                    <div className="bg-success rounded-circle d-flex align-items-center justify-content-center"
                                                                        style={{ width: '40px', height: '40px' }}>
                                                                        <span className="text-white">📚</span>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <h5>Education</h5>
                                                                    <p className="text-muted mb-0">
                                                                        Sharing knowledge and expertise about orchid care and cultivation.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-3">
                                                            <div className="d-flex align-items-start">
                                                                <div className="flex-shrink-0 me-3">
                                                                    <div className="bg-success rounded-circle d-flex align-items-center justify-content-center"
                                                                        style={{ width: '40px', height: '40px' }}>
                                                                        <span className="text-white">🤝</span>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <h5>Community</h5>
                                                                    <p className="text-muted mb-0">
                                                                        Building a global community of orchid enthusiasts and experts.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-3">
                                                            <div className="d-flex align-items-start">
                                                                <div className="flex-shrink-0 me-3">
                                                                    <div className="bg-success rounded-circle d-flex align-items-center justify-content-center"
                                                                        style={{ width: '40px', height: '40px' }}>
                                                                        <span className="text-white">✨</span>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <h5>Innovation</h5>
                                                                    <p className="text-muted mb-0">
                                                                        Using technology to make orchid knowledge accessible to everyone.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Tab>

                                <Tab eventKey="features" title="Platform Features">
                                    <Row>
                                        <Col lg={10} className="mx-auto">
                                            <Accordion defaultActiveKey="0">
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header>🌺 Comprehensive Orchid Database</Accordion.Header>
                                                    <Accordion.Body>
                                                        Our platform features detailed information about orchid species from around
                                                        the world. Each entry includes high-quality images, origin details, care
                                                        instructions, and expert ratings to help you learn about these magnificent flowers.
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                                <Accordion.Item eventKey="1">
                                                    <Accordion.Header>🔍 Advanced Search & Filtering</Accordion.Header>
                                                    <Accordion.Body>
                                                        Easily find specific orchids using our advanced search features. Filter by
                                                        origin, color, rating, type (natural vs hybrid), and special characteristics
                                                        to discover exactly what you're looking for.
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                                <Accordion.Item eventKey="2">
                                                    <Accordion.Header>📱 Responsive Design</Accordion.Header>
                                                    <Accordion.Body>
                                                        Access our orchid gallery from any device. Our responsive design ensures
                                                        a beautiful and functional experience whether you're on a desktop, tablet,
                                                        or mobile phone.
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                                <Accordion.Item eventKey="3">
                                                    <Accordion.Header>🌙 Dark Mode Support</Accordion.Header>
                                                    <Accordion.Body>
                                                        Switch between light and dark themes for comfortable viewing in any lighting
                                                        condition. Your preference is automatically saved for future visits.
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                                <Accordion.Item eventKey="4">
                                                    <Accordion.Header>💬 Expert Information</Accordion.Header>
                                                    <Accordion.Body>
                                                        All information is curated by botanical experts and orchid specialists.
                                                        We provide accurate, up-to-date information to help both beginners and
                                                        experienced growers succeed with their orchids.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </Col>
                                    </Row>
                                </Tab>
                            </Tabs>
                        </Col>
                    </Row>

                    {/* Statistics Cards */}
                    <Row className="mt-5">
                        <Col md={3} className="mb-3">
                            <Card className="text-center shadow-sm stat-card">
                                <Card.Body>
                                    <h2 className="text-success display-6 fw-bold">16+</h2>
                                    <p className="text-muted mb-0">Orchid Species</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3} className="mb-3">
                            <Card className="text-center shadow-sm stat-card">
                                <Card.Body>
                                    <h2 className="text-success display-6 fw-bold">12+</h2>
                                    <p className="text-muted mb-0">Countries of Origin</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3} className="mb-3">
                            <Card className="text-center shadow-sm stat-card">
                                <Card.Body>
                                    <h2 className="text-success display-6 fw-bold">90%</h2>
                                    <p className="text-muted mb-0">Natural Species</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3} className="mb-3">
                            <Card className="text-center shadow-sm stat-card">
                                <Card.Body>
                                    <h2 className="text-success display-6 fw-bold">4.5+</h2>
                                    <p className="text-muted mb-0">Average Rating</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default About;