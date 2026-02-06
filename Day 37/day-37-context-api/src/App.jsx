import { useState, useContext, createContext, useEffect } from 'react';

// --- 1. CREATE THE CONTEXT---
const ThemeContext = createContext();

// STYLES 
const themes = {
  light: {
    background: "#ffffff",
    color: "#333333",
    border: "1px solid #ddd"
  },
  dark: {
    background: "#2c3e50",
    color: "#ecf0f1",
    border: "1px solid #34495e"
  }
};

// --- 2. THE PROVIDER COMPONENT ---
const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const currentTheme = isDark ? themes.dark : themes.light;

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

// --- 3. CONSUMER COMPONENT (Grandchild) ---
const UserCard = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ 
      padding: "20px", 
      backgroundColor: theme.background, 
      color: theme.color,
      border: theme.border,
      borderRadius: "8px",
      marginTop: "20px",
      transition: "all 0.3s"
    }}>
      <h2>User Settings</h2>
      <p>This component is nested deep in the tree.</p>
      <p>It accessed the theme directly without props!</p>
    </div>
  );
};

// --- 4. INTERMEDIATE COMPONENT (The Middleman) ---
const Layout = () => {
  return (
    <div>
      <h3>Dashboard Layout</h3>
      <UserCard />
    </div>
  );
};

// --- 5. THE TOGGLE BUTTON ---
const ThemeToggler = () => {
  const { toggleTheme, isDark } = useContext(ThemeContext);
  
  return (
    <button 
      onClick={toggleTheme}
      style={{
        padding: "10px 20px",
        cursor: "pointer",
        fontSize: "1rem",
        marginBottom: "20px"
      }}
    >
      Switch to {isDark ? "Light" : "Dark"} Mode
    </button>
  );
};

// BACK BUTTON STYLE
const backButton = {
  position: "fixed",
  top: "20px",
  left: "20px",
  padding: "10px 18px",
  fontSize: "1rem",
  cursor: "pointer",
  backgroundColor: "#3498db",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
};

// --- 6. MAIN APP ---
function App() {
  useEffect(() => { document.title = "Day 37: Context API"; }, []);

  return (
    <ThemeProvider>
      <button style={backButton} onClick={() => window.location.href = '/day20'}>← Back</button>
      <div style={{ fontFamily: "sans-serif", padding: "40px", textAlign: "center" }}>
        <h1>Global State Manager</h1>
        <ThemeToggler />
        <hr style={{margin: "30px 0"}}/>
        <Layout />
      </div>
    </ThemeProvider>
  );
}

export default App;