import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <>
      {/* Navigation */}
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            Wesley's Portfolio
          </a>

          <div className="d-flex gap-3">
            <a className="nav-link text-white" href="#about">
              About 
            </a>

            <a className="nav-link text-white" href="#projects">
              Projects
            </a>

            <a className="nav-link text-white" href="#skills">
              Skills
            </a>

            <a className="nav-link text-white" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Home */}
      <section className="hero">
        <div className="container text-center">
          <p className="text-primary fw-bold">
            MY PORTFOLIO
          </p>

          <h1 className="display-3 fw-bold">
            Wesley Sutton
          </h1>

          <p className="lead">
            Web Development Student
          </p>

          <p className="hero-description">
            Welcome to my portfolio website.
          </p>

          <a
            href="#projects"
            className="btn btn-primary btn-lg mt-3"
          >
            View My Projects
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="container py-5">
        <div className="section-heading text-center">
          <p className="text-primary fw-bold">
            ABOUT ME
          </p>

          <h2>About Me</h2>
        </div>

        <p className="about-text">
          I'm currently learning web development and programming.
          This website is a place to show what I'm working on and
          what I'm learning.
        </p>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="projects-section py-5"
      >
        <div className="container">

          <div className="section-heading text-center mb-5">
            <p className="text-primary fw-bold">
              MY WORK
            </p>

            <h2>Projects</h2>
          </div>

          <div className="row g-4">

            {/* Project 1 */}
            <div className="col-12 col-md-4">
              <div
  className="card project-card h-100"
  onClick={() => setSelectedProject("Project 1")}
>
                <div className="card-body p-4">
                  <div className="project-icon">
                    📁
                  </div>

                  <h3>Project 1</h3>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="col-12 col-md-4">
              <div
  className="card project-card h-100"
  onClick={() => setSelectedProject("Project 2")}
>
                <div className="card-body p-4">
                  <div className="project-icon">
                    📁
                  </div>

                  <h3>Project 2</h3>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="col-12 col-md-4">
              <div
  className="card project-card h-100"
  onClick={() => setSelectedProject("Project 3")}
>
                <div className="card-body p-4">
                  <div className="project-icon">
                    📁
                  </div>

                  <h3>Project 3</h3>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {selectedProject && (
  <div className="text-center mt-4">
    <p className="project-message">
      You selected {selectedProject}.
    </p>
  </div>
)}

      {/* Skills */}
      <section
        id="skills"
        className="container py-5 text-center"
      >
        <div className="section-heading">
          <p className="text-primary fw-bold">
            MY SKILLS
          </p>

          <h2>Skills</h2>
        </div>

        <div className="skills-container">
          <span>Java</span>
          <span>SQL</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Bootstrap</span>
          <span>Git</span>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="contact-section py-5"
      >
        <div className="container text-center">
          <p className="text-info fw-bold">
            CONTACT
          </p>

          <h2>Get In Touch</h2>

          <p className="contact-text">
            You can contact me by email if you have any questions
            about my work.
          </p>

          <a
            href="mailto:your-email@example.com"
            className="btn btn-outline-light"
          >
            Email Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 text-center">
        <p className="mb-0">
          © 2026 Wesley Sutton
        </p>
      </footer>
    </>
  );
}

export default App;