import { useEffect } from 'react';
// 1. Import useParams hook
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

// STYLES
const styles = {
  nav: { backgroundColor: "#2c3e50", padding: "15px", display: "flex", gap: "20px", justifyContent: "center" },
  link: { color: "white", textDecoration: "none", fontWeight: "bold" },
  page: { textAlign: "center", marginTop: "50px", fontFamily: "sans-serif" },
  card: { 
    border: "2px solid #34495e", 
    borderRadius: "10px", 
    padding: "20px", 
    maxWidth: "300px", 
    margin: "20px auto",
    backgroundColor: "#ecf0f1"
  },
  backButton: {
    position: "fixed",
    top: "10px",
    left: "10px",
    backgroundColor: "#3498db",
    color: "white",
    padding: "8px 16px",
    borderRadius: "5px",
    textDecoration: "none",
    fontSize: "14px",
    zIndex: 1000,
  }
};

// --- 2. THE DYNAMIC COMPONENT ---
const UserProfile = () => {
  // Extract the ":id" from the URL
  const { id } = useParams();

  // In a real app, you would use this ID to fetch data:
  // fetch(`https://api.example.com/users/${id}`)

  return (
    <div style={styles.page}>
      <h1>User Profile</h1>
      <div style={styles.card}>
        <span style={{fontSize: "3rem"}}>👤</span>
        <h2>ID: {id}</h2>
        <p>Viewing data for user #{id}</p>
      </div>
      <Link to="/" style={{color: "blue"}}>← Back Home</Link>
    </div>
  );
};

const Home = () => (
  <div style={styles.page}>
    <h1>Employee Database</h1>
    <p>Select a user to view details:</p>
    
    <div style={{display: "flex", gap: "10px", justifyContent: "center"}}>
      {/* 3. DYNAMIC LINKS */}
      <Link to="/user/101" style={{...styles.card, textDecoration: 'none', color: 'black', width: '100px'}}>User 101</Link>
      <Link to="/user/205" style={{...styles.card, textDecoration: 'none', color: 'black', width: '100px'}}>User 205</Link>
      <Link to="/user/zenmisan" style={{...styles.card, textDecoration: 'none', color: 'black', width: '100px'}}>Zenmisan</Link>
    </div>
  </div>
);

// --- 4. ROUTES SETUP ---
function App() {
  useEffect(() => { document.title = "Day 36: Dynamic Routes"; }, []);

  return (
    <BrowserRouter>
      <a href="/day20" style={styles.backButton}>← HOME</a>
      <nav style={styles.nav}>
        <Link style={styles.link} to="/">Home</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* THE COLON IS KEY */}
        <Route path="/user/:id" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;