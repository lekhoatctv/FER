import Navigation from './Navigation';
import './Lab6Guide.css';

function Lab6Guide() {
    return (
        <div className="guide-container">
            <Navigation />
            <div className="guide-content">
                <h1>🎓 Lab 6 - Fetch API Guide</h1>

                <section className="guide-section">
                    <h2>📋 Overview</h2>
                    <p>
                        This lab demonstrates how to use FETCH/AXIOS to communicate with a RESTful API server
                        for Orchids management. It includes Redux Toolkit for state management, Formik & Yup
                        for form handling, and Google OAuth for authentication.
                    </p>
                </section>

                <section className="guide-section features">
                    <h2>✨ Features Implemented</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <h3>🔄 Redux Toolkit</h3>
                            <p>State management with async thunks for API calls</p>
                        </div>
                        <div className="feature-card">
                            <h3>📝 Formik & Yup</h3>
                            <p>Form validation and handling</p>
                        </div>
                        <div className="feature-card">
                            <h3>🔐 Google OAuth</h3>
                            <p>User authentication with Google</p>
                        </div>
                        <div className="feature-card">
                            <h3>🌐 MockAPI</h3>
                            <p>RESTful API for data persistence</p>
                        </div>
                        <div className="feature-card">
                            <h3>✏️ CRUD Operations</h3>
                            <p>Create, Read, Update, Delete orchids</p>
                        </div>
                        <div className="feature-card">
                            <h3>🎨 Responsive UI</h3>
                            <p>Beautiful and mobile-friendly design</p>
                        </div>
                    </div>
                </section>

                <section className="guide-section">
                    <h2>🚀 Quick Start</h2>
                    <div className="steps">
                        <div className="step">
                            <div className="step-number">1</div>
                            <div className="step-content">
                                <h3>Setup MockAPI</h3>
                                <p>Visit the <strong>Seeder</strong> page to initialize your database with sample data.</p>
                                <a href="/seeder" className="btn-primary">Go to Seeder →</a>
                            </div>
                        </div>

                        <div className="step">
                            <div className="step-number">2</div>
                            <div className="step-content">
                                <h3>Login with Google</h3>
                                <p>Authenticate using your Google account to access CRUD features.</p>
                                <a href="/login" className="btn-primary">Go to Login →</a>
                            </div>
                        </div>

                        <div className="step">
                            <div className="step-number">3</div>
                            <div className="step-content">
                                <h3>Manage Orchids</h3>
                                <p>Use the Dashboard to add, edit, or delete orchids.</p>
                                <a href="/dashboard" className="btn-primary">Go to Dashboard →</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="guide-section">
                    <h2>📚 Pages & Routes</h2>
                    <table className="routes-table">
                        <thead>
                            <tr>
                                <th>Route</th>
                                <th>Description</th>
                                <th>Auth Required</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>/</code></td>
                                <td>Home - Orchid Gallery</td>
                                <td>❌ No</td>
                            </tr>
                            <tr>
                                <td><code>/seeder</code></td>
                                <td>Data Seeder Tool</td>
                                <td>❌ No</td>
                            </tr>
                            <tr>
                                <td><code>/login</code></td>
                                <td>Google OAuth Login</td>
                                <td>❌ No</td>
                            </tr>
                            <tr>
                                <td><code>/dashboard</code></td>
                                <td>CRUD Management Dashboard</td>
                                <td>✅ Yes</td>
                            </tr>
                            <tr>
                                <td><code>/add</code></td>
                                <td>Add New Orchid</td>
                                <td>✅ Yes</td>
                            </tr>
                            <tr>
                                <td><code>/edit/:id</code></td>
                                <td>Edit Orchid</td>
                                <td>✅ Yes</td>
                            </tr>
                            <tr>
                                <td><code>/detail/:id</code></td>
                                <td>View Orchid Details</td>
                                <td>❌ No</td>
                            </tr>
                            <tr>
                                <td><code>/natural</code></td>
                                <td>Natural Orchids Page</td>
                                <td>❌ No</td>
                            </tr>
                            <tr>
                                <td><code>/about</code></td>
                                <td>About Page</td>
                                <td>❌ No</td>
                            </tr>
                            <tr>
                                <td><code>/contact</code></td>
                                <td>Contact Page</td>
                                <td>❌ No</td>
                            </tr>
                            <tr>
                                <td><code>/intro</code></td>
                                <td>Introduction (Lab 5)</td>
                                <td>❌ No</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section className="guide-section tech-stack">
                    <h2>🛠️ Tech Stack</h2>
                    <div className="tech-grid">
                        <div className="tech-item">
                            <strong>React 18</strong>
                            <span>Frontend Framework</span>
                        </div>
                        <div className="tech-item">
                            <strong>Redux Toolkit</strong>
                            <span>State Management</span>
                        </div>
                        <div className="tech-item">
                            <strong>React Router</strong>
                            <span>Navigation</span>
                        </div>
                        <div className="tech-item">
                            <strong>Axios</strong>
                            <span>HTTP Client</span>
                        </div>
                        <div className="tech-item">
                            <strong>Formik</strong>
                            <span>Form Management</span>
                        </div>
                        <div className="tech-item">
                            <strong>Yup</strong>
                            <span>Schema Validation</span>
                        </div>
                        <div className="tech-item">
                            <strong>Google OAuth</strong>
                            <span>Authentication</span>
                        </div>
                        <div className="tech-item">
                            <strong>MockAPI</strong>
                            <span>Backend API</span>
                        </div>
                        <div className="tech-item">
                            <strong>SCSS</strong>
                            <span>CSS Preprocessor</span>
                        </div>
                        <div className="tech-item">
                            <strong>Bootstrap</strong>
                            <span>UI Components</span>
                        </div>
                    </div>
                </section>

                <section className="guide-section">
                    <h2>💡 Key Concepts</h2>
                    <div className="concepts">
                        <div className="concept-card">
                            <h3>Redux Async Thunks</h3>
                            <p>
                                Used <code>createAsyncThunk</code> to handle asynchronous API calls with
                                automatic pending/fulfilled/rejected actions.
                            </p>
                        </div>
                        <div className="concept-card">
                            <h3>Form Validation</h3>
                            <p>
                                Implemented Yup schemas for field validation including required fields,
                                min/max values, and URL validation.
                            </p>
                        </div>
                        <div className="concept-card">
                            <h3>Protected Routes</h3>
                            <p>
                                Dashboard and CRUD pages check authentication status before allowing access.
                            </p>
                        </div>
                        <div className="concept-card">
                            <h3>RESTful API</h3>
                            <p>
                                Full CRUD operations using HTTP methods: GET, POST, PUT, DELETE.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="guide-section success">
                    <h2>✅ Lab 6 Checklist</h2>
                    <ul className="checklist">
                        <li>✅ MockAPI.io project created</li>
                        <li>✅ Redux Toolkit configured</li>
                        <li>✅ Formik & Yup validation implemented</li>
                        <li>✅ Google OAuth integration</li>
                        <li>✅ CRUD operations with FETCH/AXIOS</li>
                        <li>✅ Protected routes</li>
                        <li>✅ Data seeder tool</li>
                        <li>✅ Responsive UI design</li>
                        <li>✅ Error handling</li>
                        <li>✅ Loading states</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default Lab6Guide;
