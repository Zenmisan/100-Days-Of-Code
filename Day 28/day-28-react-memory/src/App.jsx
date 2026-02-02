import { useState } from 'react';

function App() {
  // 1. Declare State variable 'count' initialized to 0
  const [count, setCount] = useState(0);

  const backButtonStyle = {
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
    border: "none"
  };

  // Helper styles
  const btnStyle = {
    padding: "10px 20px",
    fontSize: "1rem",
    margin: "5px",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px"
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "sans-serif" }}>
      <a href="/day20" style={backButtonStyle}>← HOME</a>
      <h1>Interactive Counter</h1>
      
      {/* 2. Display the State */}
      <h2 style={{ fontSize: "3rem", margin: "20px" }}>{count}</h2>

      {/* 3. Update the State on Click */}
      <div>
        <button style={btnStyle} onClick={() => setCount(count + 1)}>
          Increase (+)
        </button>
        
        <button style={{...btnStyle, backgroundColor: "#dc3545"}} onClick={() => setCount(count - 1)}>
          Decrease (-)
        </button>
        
        <button style={{...btnStyle, backgroundColor: "#6c757d"}} onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;