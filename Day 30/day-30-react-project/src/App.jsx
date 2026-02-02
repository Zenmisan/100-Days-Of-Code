import { useState } from 'react';

function App() {
  // State for background color
  const [bgColor, setBgColor] = useState("#ffffff");
  // State for text color
  const [textColor, setTextColor] = useState("#000000");

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

  const containerStyle = {
    height: "100vh",
    backgroundColor: bgColor,
    color: textColor,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "sans-serif",
    transition: "background-color 0.5s ease" // Smooth transition
  };

  const buttonStyle = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
  };

  return (
    <div style={containerStyle}>
      <a href="/day20" style={backButtonStyle}>← HOME</a>
      <h1>Theme Switcher</h1>
      <p>Current Background: {bgColor}</p>

      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        <button style={buttonStyle} onClick={() => { setBgColor("#ffffff"); setTextColor("#000000"); }}>
          Light Mode
        </button>
        
        <button style={buttonStyle} onClick={() => { setBgColor("#2c3e50"); setTextColor("#ecf0f1"); }}>
          Dark Mode
        </button>
        
        <button style={buttonStyle} onClick={() => { setBgColor("#27ae60"); setTextColor("#ffffff"); }}>
          Green Mode
        </button>
        
        <button style={buttonStyle} onClick={() => { setBgColor("#8e44ad"); setTextColor("#ffffff"); }}>
          Purple Mode
        </button>
      </div>
    </div>
  );
}

export default App;