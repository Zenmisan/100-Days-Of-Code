import { useState, useEffect } from 'react';

const styles = {
  container: {
    fontFamily: "'Segoe UI', sans-serif",
    backgroundColor: "#f4f4f9",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    padding: "20px",
    position: "relative"
  },
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
  card: {
    backgroundColor: "white",
    width: "600px",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
  },
  userCard: {
    border: "1px solid #ddd", 
    padding: "15px", 
    borderRadius: "8px",
    marginBottom: "10px",
    backgroundColor: "#fff"
  },
  loader: {
    textAlign: "center",
    fontSize: "1.2rem",
    color: "#666",
    padding: "40px"
  }
};

function App() {
  // 1. STATE
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2. EFFECT (The Fetch Logic)
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error("Failed to fetch data");
        
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    
    fetchUsers();
  }, []);

  // 3. TITLE UPDATE (To match your HTML pattern)
  useEffect(() => {
    document.title = "Day 32: Side Effects";
  }, []);


  // 4. RENDER UI
  return (
    <div style={styles.container}>
      <a href="/day20" style={styles.backButton}>← HOME</a>
      <div style={styles.card}>
        <h1>User Directory</h1>
        
        {/* CONDITIONAL RENDERING */}
        {loading && <div style={styles.loader}>Loading Users...</div>}
        
        {error && <div style={{color: 'red', textAlign: 'center'}}>Error: {error}</div>}

        {!loading && !error && (
          <div id="content">
            {users.map(user => (
              <div key={user.id} style={styles.userCard}>
                <h3 style={{margin: '0 0 5px 0'}}>{user.name}</h3>
                <p style={{margin: 0, color: '#555'}}>📧 {user.email}</p>
                <p style={{margin: 0, color: '#555'}}>🌐 {user.website}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;