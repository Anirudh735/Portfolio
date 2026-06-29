import "./App.css";

function App() {
  return (
    <div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          <img src="/1.jpg" alt="profile" className="profile-pic" />
          <h2 className="logo">Anirudh</h2>
        </div>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Contact">Contact</a></li>
          
        </ul>
      </nav>

      <div className="container">

        {/* Hero */}
        <header className="hero">
          <h1>Anirudh P</h1>
          <p>AI/ML Developer | Computer Vision Enthusiast | Python Developer</p>

          <a href="public/Anirudh_P_AI__1_.pdf" className="resume-btn">
            Download Resume
          </a>
        </header>

        {/* About */}
        <section id="about">
          <h2>About Me</h2>
          <p>
          <h3>Hi, I’m Anirudh. I build things that work—whether that’s a responsive web application or a smart sensor network. Currently pursuing my BCA with a specialization in Artificial Intelligence and Machine Learning, I focus on bridging the gap between raw data and actionable intelligence.</h3>

<h3>I’ve spent my academic journey mastering Python, Kotlin, and SQLite to create high-impact applications. My specialization has allowed me to dive deep into Computer Vision and Predictive Modeling, which I’ve applied to real-world challenges like my YOLOv8-powered Traffic Violation Detection System. I am particularly interested in how ML models can be optimized to run on edge devices and IoT hardware, creating "smart" environments that are both efficient and secure.</h3>

<h3>My portfolio reflects this mix of technical curiosity and specialized knowledge, ranging from precision agriculture to AI-driven security. When I’m not debugging neural networks or wiring microcontrollers, you’ll likely find me analyzing market trends or refining my fitness routine. I believe in continuous growth, disciplined execution, and building tech that actually matters.</h3>
</p>
        </section>

        {/* Skills Section */}
<section id="skills">
  <h2>Skills</h2>

  <div className="skills-container">

    <div className="skill-category">
      <h3>Languages</h3>
      <ul>
        <li>Python</li>
        <li>Java</li>
        <li>JavaScript</li>
        <li>HTML/CSS/Php</li>
        <li>Kotlin</li>
        

      </ul>
    </div>

    <div className="skill-category">
      <h3>Tools</h3>
      <ul>
        <li>Git</li>
        <li>GitHub</li>
        <li>VS Code</li>
        <li>Google Colab</li>
        <li>Anaconda</li>
        <li>Android Studios</li>
      </ul>
    </div>

         <div className="skill-category">
            <h3>Libraries/Frameworks</h3>
             <ul>
              <li>React</li>
              <li>Flask</li>
              <li>YOLOv8</li>

             </ul>
           </div>

           <div className="skill-category">
            <h3>Database</h3>
             <ul>
              <li>MySQL</li>
              <li>Mongo DB</li>
             </ul>
           </div>

          </div>
        </section>

        <section id="certifications">
           <h2>Certifications</h2>

           <div className="cert-grid">

             <div className="cert-card">
               <h3>Deep Learning</h3>
               <p>Issued by Simlilearn</p>
               <a href="deep learning.pdf" className="cert-btn">View Certificate</a>
             </div>

             <div className="cert-card">
               <h3>Python Programming Masterclass</h3>
               <p>Udemy</p>
               <a href="python.pdf" className="cert-btn">View Certificate</a>
             </div>

             <div className="cert-card">
               <h3>Mastering Retrival-Augmented Generation(RAG)</h3>
               <p>Udemy</p>
               <a href="Retrieval.pdf" className="cert-btn">View Certificate</a>
             </div>

             <div className="cert-card">
               <h3>Ethical Hacking Bootcamp</h3>
               <p>Udemy</p>
               <a href="Ethical.pdf" className="cert-btn">View Certificate</a>
             </div>

          </div>
        </section>

        {/* Projects */}
        <section id="Projects">
          <h2>Projects</h2>

          <div className="project-grid">

            <div className="project-card">
              <h3>Traffic Violation Detection - Website</h3>
              <p>
                Real-time traffic violation detection using YOLOv8 and OCR
                integrated with a Flask dashboard.
              </p>
              <a href="https://github.com/Anirudh735/Traffic-Violation-Detection-ML" target="_blank" rel="noopener noreferrer" className="github-link">
      View on GitHub
    </a>
            </div>

            <div className="project-card">
              <h3>Expense-Tracker-Android_App</h3>
              <p>
                This app allows users to track their daily income and expenses, visualize financial health through interactive charts, and manage a personalized user profile.
              </p>
              <a href="https://github.com/Anirudh735/Expense-Tracker-Android" target="_blank" rel="noopener noreferrer" className="github-link">
      View on GitHub
    </a>
            </div>

            <div className="project-card">
              <h3>Soil-Moisture Detector - IOT</h3>
              <p>
                An IoT-based Soil Health system utilizing ESP32 and cloud integration to optimize water usage through real-time sensor data.
              </p>
            </div>

          </div>
        </section>

        {/* Contact */}
        <section id="Contact">
          <h2>Contact</h2>
        
          <p>Email : <a>anirudhkichu1905@gmail.com</a></p>
          
          <p>GitHub :  <a href="https://github.com/Anirudh735" target="_blank">
              Anirudh735
            </a>
          </p>
          <p>LinkedIn :  <a href="https://www.linkedin.com/in/anirudh-p-1884652b8/" target="_blank">
               anirudh-p
            </a>
          </p>  
          
          
        </section>

      </div>

      {/* Footer */}
      <footer>
        <p>© 2026 Anirudh P</p>
      </footer>

    </div>
  );
}

export default App;
