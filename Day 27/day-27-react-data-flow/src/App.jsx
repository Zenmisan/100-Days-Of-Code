function TeamCard({ name, role, email }) {
  return (
    <div style={{ 
      border: "1px solid #ccc", 
      borderRadius: "8px", 
      padding: "15px", 
      margin: "10px",
      backgroundColor: "#f9f9f9",
      width: "250px"
    }}>
      <h3 style={{ margin: "0 0 5px 0", color: "#333" }}>{name}</h3>
      <p style={{ margin: "0", color: "#666", fontWeight: "bold" }}>{role}</p>
      <p style={{ fontSize: "0.9rem", color: "#888" }}>{email}</p>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Engineering Team</h1>
      
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <TeamCard 
          name="Sarah" 
          role="Frontend Engineer" 
          email="sarah@techcorp.com" 
        />
        
        <TeamCard 
          name="David" 
          role="Backend Engineer" 
          email="david@techcorp.com" 
        />
        
        <TeamCard 
          name="Jessica" 
          role="Product Manager" 
          email="jessica@techcorp.com" 
        />
      </div>
    </div>
  );
}

export default App;