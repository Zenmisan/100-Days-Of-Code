import { useState } from 'react';

function App() {
  const [text, setText] = useState("");

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
    border: "none",
    zIndex: 1000
  };

  return (
    <div style={{ maxWidth: "500px", margin: "50px auto", fontFamily: "sans-serif" }}>
      <a href="/day20" style={backButtonStyle}>← HOME</a>
      <h1>Live Character Counter</h1>
      
      <textarea 
        placeholder="Start typing your bio here..."
        rows="5"
        style={{ width: "100%", padding: "10px", fontSize: "1.1rem" }}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
        <p><strong>Length:</strong> {text.length} characters</p>
        
        {/* Simple conditional logic inside JSX */}
        {text.length > 20 && (
          <p style={{ color: "green" }}>Great job writing!</p>
        )}
      </div>

      <div style={{ background: "#eee", padding: "10px", marginTop: "20px", borderRadius: "5px" }}>
        <p><strong>Preview:</strong></p>
        <p>{text || "Nothing typed yet..."}</p>
      </div>
    </div>
  );
}

export default App;