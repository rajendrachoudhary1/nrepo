import React from 'react';
import './App.css'; // Include your CSS file here for styling

function App() {
  return (
    <div className="App">
      <header>
        <nav className="navbar">
          <div className="logo">MyWebsite</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="home-section">
          <h1>Welcome to MyWebsite</h1>
          <p>Your one-stop solution for all your needs.</p>
        </section>

        <section id="about" className="about-section">
          <h2>About Us</h2>
          <p>Learn more about our journey and values.</p>
        </section>

        <section id="services" className="services-section">
          <h2>Our Services</h2>
          <p>Discover the range of services we offer.</p>
        </section>

        <section id="contact" className="contact-section">
          <h2>Contact Us</h2>
          <p>We would love to hear from you. Get in touch!</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 MyWebsite. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

 
