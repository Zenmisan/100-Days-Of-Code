function WelcomeMessage() {
  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px 0" }}>
      <h2>Welcome to React Development</h2>
      <p>This is a reusable component.</p>
    </div>
  );
}

function App() {
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

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <a href="/day20" style={backButtonStyle}>← HOME</a>
      <h1>Day 26: Component Structure</h1>
      <p>Building the foundation using Vite.</p>
    
      <WelcomeMessage />
      <WelcomeMessage />
    </div>
  );
}

export default App;