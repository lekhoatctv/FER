import { useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import Navigation from './Navigation';
import './Contact.css';

const Contact = () => {
    const navigate = useNavigate();

    return (
        <>
            <Navigation />
            <div className="contact-page">
                <ThemeToggle />

                <div className="contact-container">
                    <button className="back-button" onClick={() => navigate('/')}>
                        ← Back to Gallery
                    </button>

                    <div className="contact-content">
                        <div className="contact-header">
                            <h1 className="contact-title">🌺 Contact Us</h1>
                            <p className="contact-subtitle">
                                Get in touch with the Orchid Gallery team
                            </p>
                        </div>

                        <div className="contact-body">
                            <div className="contact-info">
                                <h2>Get In Touch</h2>
                                <p>
                                    Welcome to our Orchid Gallery! We're passionate about sharing the beauty
                                    and wonder of orchids with fellow enthusiasts. Whether you have questions
                                    about our collection, need care advice, or want to learn more about these
                                    magnificent flowers, we'd love to hear from you.
                                </p>

                                <div className="contact-details">
                                    <div className="contact-item">
                                        <div className="contact-icon">📍</div>
                                        <div className="contact-text">
                                            <h3>Visit Us</h3>
                                            <p>123 Botanical Garden Street<br />
                                                Orchid District, Plant City<br />
                                                PC 12345, Vietnam</p>
                                        </div>
                                    </div>

                                    <div className="contact-item">
                                        <div className="contact-icon">📞</div>
                                        <div className="contact-text">
                                            <h3>Call Us</h3>
                                            <p>+84 123 456 789<br />
                                                Mon - Fri: 8:00 AM - 6:00 PM<br />
                                                Sat - Sun: 9:00 AM - 5:00 PM</p>
                                        </div>
                                    </div>

                                    <div className="contact-item">
                                        <div className="contact-icon">✉️</div>
                                        <div className="contact-text">
                                            <h3>Email Us</h3>
                                            <p>info@orchidgallery.com<br />
                                                care@orchidgallery.com<br />
                                                orders@orchidgallery.com</p>
                                        </div>
                                    </div>

                                    <div className="contact-item">
                                        <div className="contact-icon">🌐</div>
                                        <div className="contact-text">
                                            <h3>Follow Us</h3>
                                            <p>@OrchidGallery on all platforms<br />
                                                Facebook | Instagram | Twitter<br />
                                                YouTube | Pinterest</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-form-section">
                                <h2>Send us a Message</h2>
                                <form className="contact-form">
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Your full name"
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="your.email@example.com"
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="subject">Subject</label>
                                        <select id="subject" name="subject" required>
                                            <option value="">Select a topic</option>
                                            <option value="general">General Inquiry</option>
                                            <option value="care">Orchid Care Question</option>
                                            <option value="purchase">Purchase Inquiry</option>
                                            <option value="feedback">Feedback</option>
                                            <option value="collaboration">Collaboration</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="6"
                                            placeholder="Tell us how we can help you..."
                                            required
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="submit-button">
                                        Send Message 🌸
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;