import { useReducer } from 'react';
import { financeReducer, initialState } from './reducer/financeReducer';
import TransactionForm from './components/TransactionForm';

function App() {
  const [state, dispatch] = useReducer(financeReducer, initialState);

  // CENTERED LAYOUT STYLES
  const appStyles = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f2f5",
    fontFamily: "'Segoe UI', sans-serif"
  };

  const cardStyles = {
    width: "400px",
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 10px 40px rgba(0,0,0,0.1)"
  };

  return (
    <div style={appStyles}>
      <div style={cardStyles}>
        <h1 style={{ textAlign: "center", marginTop: 0 }}>ZenFinance</h1>
        
        {/* BALANCE DISPLAY */}
        <div style={{ 
          background: "linear-gradient(135deg, #2c3e50, #000000)", 
          color: "white", 
          padding: "25px", 
          borderRadius: "15px", 
          textAlign: "center",
          marginBottom: "25px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
        }}>
          <small style={{ opacity: 0.8, textTransform: "uppercase", letterSpacing: "1px" }}>Total Balance</small>
          <h2 style={{ fontSize: "2.5rem", margin: "10px 0" }}>
            ${state.balance.toFixed(2)}
          </h2>
        </div>

        {/* INPUT FORM */}
        <TransactionForm dispatch={dispatch} />

        {/* HISTORY LIST */}
        <h3 style={{ borderBottom: "1px solid #eee", paddingBottom: "10px", marginTop: "30px" }}>History</h3>
        
        <ul style={{ listStyle: "none", padding: 0, maxHeight: "200px", overflowY: "auto" }}>
          {state.transactions.map(tx => (
            <li key={tx.id} style={{ 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center",
              padding: "12px",
              marginBottom: "8px",
              background: "#f9f9f9",
              borderRadius: "8px",
              borderLeft: `5px solid ${tx.type === 'income' ? '#2ecc71' : '#e74c3c'}`
            }}>
              <span style={{ fontWeight: "500" }}>{tx.desc}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontWeight: "bold", color: tx.type === 'income' ? '#2ecc71' : '#e74c3c' }}>
                  {tx.type === 'income' ? '+' : '-'}${tx.amount}
                </span>
                <button 
                  onClick={() => dispatch({ type: 'DELETE_TRANSACTION', payload: tx.id })}
                  style={{ 
                    background: "#ffebeb", 
                    border: "none", 
                    color: "#e74c3c", 
                    width: "24px", 
                    height: "24px", 
                    borderRadius: "50%", 
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12px"
                  }}
                >
                  ✕
                </button>
              </div>
            </li>
          ))}
          {state.transactions.length === 0 && (
            <p style={{ textAlign: "center", color: "#999", fontStyle: "italic" }}>No transactions yet.</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;