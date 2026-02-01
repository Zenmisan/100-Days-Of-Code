function WelcomeMessage() {
  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px 0" }}>
      <h2>Welcome to React Development</h2>
      <p>This is a reusable component.</p>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Day 26: Component Structure</h1>
      <p>Building the foundation using Vite.</p>
    
      <WelcomeMessage />
      <WelcomeMessage />
    </div>
  );
}

export default App;