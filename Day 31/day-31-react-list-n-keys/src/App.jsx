import { useState } from 'react';

function App() {

  const [skills] = useState([
    { id: 1, name: "HTML & CSS", level: "Advanced" },
    { id: 2, name: "JavaScript", level: "Intermediate" },
    { id: 3, name: "React.js", level: "Beginner" },
    { id: 4, name: "Git & GitHub", level: "Intermediate" }
  ]);

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
    <div style={{ maxWidth: "400px", margin: "50px auto", fontFamily: "sans-serif" }}>
      <a href="/day20" style={backButtonStyle}>← HOME</a>
      <h1>My Tech Stack</h1>
      
      <ul style={{ listStyle: "none", padding: 0 }}>
        {/* 2. Mapping through the array */}
        {skills.map((skill) => (
          <li 
            key={skill.id} // CRITICAL: Always provide a unique key
            style={{ 
              background: "#f3f4f6", 
              margin: "10px 0", 
              padding: "15px", 
              borderRadius: "8px",
              display: "flex",
              justifyContent: "space-between",
              borderLeft: "5px solid #007bff"
            }}
          >
            <span style={{ fontWeight: "bold" }}>{skill.name}</span>
            <span style={{ color: "#666", fontSize: "0.9rem" }}>{skill.level}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;