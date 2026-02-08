import { useState } from 'react';

function TransactionForm({ dispatch }) {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!desc || !amount) return;

    dispatch({
      type: 'ADD_TRANSACTION',
      payload: { desc, amount, type }
    });

    setDesc("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ 
      display: "flex", 
      flexDirection: "column", 
      gap: "10px", 
      background: "white", 
      padding: "20px", 
      borderRadius: "12px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.05)"
    }}>
      <div style={{ display: "flex", gap: "10px" }}>
        <input 
          type="text" 
          placeholder="Description" 
          value={desc} 
          onChange={(e) => setDesc(e.target.value)}
          style={{ flex: 1, padding: "12px", borderRadius: "6px", border: "1px solid #ddd" }}
        />
        <input 
          type="number" 
          placeholder="0.00" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)}
          style={{ width: "80px", padding: "12px", borderRadius: "6px", border: "1px solid #ddd" }}
        />
      </div>
      
      <div style={{ display: "flex", gap: "10px" }}>
        <select 
          value={type} 
          onChange={(e) => setType(e.target.value)}
          style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ddd", background: "white" }}
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
        <button type="submit" style={{ 
          flex: 1, 
          background: "#333", 
          color: "white", 
          border: "none", 
          borderRadius: "6px", 
          cursor: "pointer",
          fontWeight: "bold"
        }}>
          Add Transaction
        </button>
      </div>
    </form>
  );
}

export default TransactionForm;