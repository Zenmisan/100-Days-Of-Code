import { useState, useEffect } from 'react';

// STYLES
const styles = {
  container: {
    fontFamily: "'Segoe UI', sans-serif",
    backgroundColor: "#f0f2f5",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "50px",
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
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    marginBottom: "20px",
    width: "400px"
  },
  status: { fontWeight: "bold", color: "#666" }
};

// --- 1. THE CUSTOM HOOK ---

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Could not fetch data");
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // Re-run if URL changes

  return { data, loading, error };
}


// --- 2. THE COMPONENT ---

function App() {
  const [url, setUrl] = useState('https://api.kanye.rest');
  
  useEffect(() => { document.title = "Day 34: Custom Hooks"; }, []);

  const { data: quote, loading, error } = useFetch(url);

  const handleGetNewQuote = () => {
    setUrl('https://api.kanye.rest?' + new Date().getTime());
  };

  return (
    <div style={styles.container}>
      <a href="/day20" style={styles.backButton}>← HOME</a>
      <h1>Custom Hook Demo</h1>
      
      <div style={styles.card}>
        <h3>Random Quote API</h3>
        
        {loading && <p style={styles.status}>⏳ Fetching wisdom...</p>}
        {error && <p style={{...styles.status, color: 'red'}}>⚠️ {error}</p>}
        
        {quote && (
          <blockquote style={{ fontSize: "1.2rem", fontStyle: "italic" }}>
            "{quote.quote}"
          </blockquote>
        )}
      </div>

      <button 
        onClick={handleGetNewQuote} 
        style={{ padding: "10px 20px", cursor: "pointer" }}
      >
        Get New Quote
      </button>
    </div>
  );
}

export default App;