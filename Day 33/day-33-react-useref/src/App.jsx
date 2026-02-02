import { useState, useEffect, useRef } from 'react';

// STYLES
const styles = {
  container: {
    fontFamily: "'Segoe UI', sans-serif",
    backgroundColor: "#2c3e50",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
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
    backgroundColor: "#34495e",
    padding: "40px",
    borderRadius: "15px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    width: "300px"
  },
  timeDisplay: {
    fontSize: "4rem",
    fontFamily: "monospace",
    margin: "20px 0",
    color: "#ecf0f1"
  },
  buttonGroup: {
    display: "flex",
    gap: "10px",
    justifyContent: "center"
  },
  btn: {
    padding: "10px 20px",
    fontSize: "1rem",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold"
  },
  start: { backgroundColor: "#2ecc71", color: "white" },
  stop: { backgroundColor: "#e74c3c", color: "white" },
  reset: { backgroundColor: "#95a5a6", color: "white" }
};

function App() {
  // 1. STATE (Visuals)
  // This causes re-renders so we see the numbers change
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // 2. REF

  const intervalRef = useRef(null);

  // 3. TITLE EFFECT
  useEffect(() => {
    document.title = "Day 33: useRef Hook";
  }, []);

  // HANDLERS
  const startTimer = () => {
    if (isRunning) return;
    
    setIsRunning(true);
    // Store the ID in the Ref container
    intervalRef.current = setInterval(() => {
      setTime(prev => prev + 1);
    }, 100); // Update every 100ms (1/10th second)
  };

  const stopTimer = () => {
    if (!isRunning) return;
    
    setIsRunning(false);
    // Access the ID from the Ref to clear it
    clearInterval(intervalRef.current);
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  // Format time (0.0s)
  const formatTime = (t) => {
    return (t / 10).toFixed(1);
  };

  return (
    <div style={styles.container}>
      <a href="/day20" style={styles.backButton}>← HOME</a>
      <div style={styles.card}>
        <h1>Stopwatch</h1>
        
        <div style={styles.timeDisplay}>
          {formatTime(time)}s
        </div>

        <div style={styles.buttonGroup}>
          {!isRunning ? (
            <button style={{...styles.btn, ...styles.start}} onClick={startTimer}>
              Start
            </button>
          ) : (
            <button style={{...styles.btn, ...styles.stop}} onClick={stopTimer}>
              Stop
            </button>
          )}
          
          <button style={{...styles.btn, ...styles.reset}} onClick={resetTimer}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;