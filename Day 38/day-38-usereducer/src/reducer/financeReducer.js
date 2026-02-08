export const initialState = {
  balance: 0,
  transactions: [], // Array of objects { id, desc, amount, type }
};

export function financeReducer(state, action) {
  switch (action.type) {
    case 'ADD_TRANSACTION': {
      const amount = parseFloat(action.payload.amount);
      return {
        ...state,
        // Update Balance
        balance: action.payload.type === 'income' 
          ? state.balance + amount 
          : state.balance - amount,
        // Add to History
        transactions: [
          {
            id: Date.now(),
            desc: action.payload.desc,
            amount: amount,
            type: action.payload.type
          },
          ...state.transactions // Keep old transactions
        ]
      };
    }
      
    case 'DELETE_TRANSACTION': {
      // 1. Find the transaction to remove so we can adjust the balance
      const txToRemove = state.transactions.find(t => t.id === action.payload);
      const newBalance = txToRemove.type === 'income'
        ? state.balance - txToRemove.amount
        : state.balance + txToRemove.amount;

      return {
        ...state,
        balance: newBalance,
        transactions: state.transactions.filter(t => t.id !== action.payload)
      };
    }

    default:
      return state;
  }
}