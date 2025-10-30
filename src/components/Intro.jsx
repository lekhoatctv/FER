import '../scss/Intro.scss';

function Intro() {
    return (
        <div className="intro-page">
            <div className="intro-container">
                <div className="intro-header">
                    <img
                        src="https://ui-avatars.com/api/?name=Your+Name&size=150&background=2ecc71&color=fff&bold=true"
                        alt="Profile"
                        className="profile-image"
                    />
                    <h1>Hello, I'm Your Name</h1>
                    <p className="subtitle">Full Stack Developer | React Enthusiast | Problem Solver</p>
                    <div className="social-links">
                        <a href="#github">GitHub</a>
                        <a href="#linkedin">LinkedIn</a>
                        <a href="#email">Email</a>
                    </div>
                </div>

                <div className="intro-content">
                    <div className="info-card">
                        <h3>About Me</h3>
                        <p>
                            I'm a passionate developer with a love for creating beautiful and functional web applications.
                            I enjoy learning new technologies and solving complex problems.
                        </p>
                    </div>

                    <div className="info-card">
                        <h3>Education</h3>
                        <ul>
                            <li>Bachelor's in Computer Science</li>
                            <li>FPT University</li>
                            <li>Expected Graduation: 2025</li>
                        </ul>
                    </div>

                    <div className="info-card">
                        <h3>Interests</h3>
                        <ul>
                            <li>Web Development</li>
                            <li>UI/UX Design</li>
                            <li>Open Source</li>
                            <li>Technology Innovation</li>
                        </ul>
                    </div>
                </div>

                <div className="skills-section">
                    <h2>Technical Skills</h2>
                    <div className="skills-grid">
                        <div className="skill-item">React</div>
                        <div className="skill-item">JavaScript</div>
                        <div className="skill-item">HTML/CSS</div>
                        <div className="skill-item">SCSS</div>
                        <div className="skill-item">Node.js</div>
                        <div className="skill-item">Git</div>
                        <div className="skill-item">Bootstrap</div>
                        <div className="skill-item">Vite</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;
