import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// STYLES
const styles = {
  backButton: {
    position: "fixed",
    top: "20px",
    left: "20px",
    padding: "10px 20px",
    backgroundColor: "#3498db",
    color: "white",
    textDecoration: "none",
    borderRadius: "5px",
    fontSize: "14px",
    fontWeight: "bold",
    transition: "background-color 0.3s",
    cursor: "pointer",
    border: "none",
    zIndex: 1000
  },
  nav: {
    backgroundColor: "#333",
    padding: "15px",
    display: "flex",
    gap: "20px",
    justifyContent: "center"
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1.1rem"
  },
  page: {
    padding: "40px",
    fontFamily: "'Segoe UI', sans-serif",
    textAlign: "center",
    maxWidth: "600px",
    margin: "0 auto"
  }
};

// --- 2. PAGE COMPONENTS ---
const Home = () => (
  <div style={styles.page}>
    <h1>🏠 Home Page</h1>
    <p>Welcome to the main dashboard.</p>
  </div>
);

const About = () => (
  <div style={styles.page}>
    <h1>ℹ️ About Us</h1>
    <p>We are learning React Router on Day 35.</p>
  </div>
);

const Contact = () => (
  <div style={styles.page}>
    <h1>📞 Contact</h1>
    <p>Email: zenmisan@example.com</p>
  </div>
);

// --- 3. MAIN APP STRUCTURE ---
function App() {
  
  useEffect(() => { document.title = "Day 35: React Router"; }, []);

  return (
    <BrowserRouter>
      <a href="/day20" style={styles.backButton}>← HOME</a>
      {/* NAVIGATION BAR */}
      <nav style={styles.nav}>
        
        <Link style={styles.link} to="/">Home</Link>
        <Link style={styles.link} to="/about">About</Link>
        <Link style={styles.link} to="/contact">Contact</Link>
      </nav>

      {/* THE VIEWPORT (Content swaps here) */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;