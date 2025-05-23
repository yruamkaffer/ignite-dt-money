import { createContext, useEffect, useState } from "react"

interface Transactions {
  id: number;
  description: string;
  price: number;
  type: "income" | "outcome";
  category: string;
  createdAt: string;
}

interface TransactionContextType {
  transactions: Transactions[]
}

interface TransactionProviderProps {
  children: React.ReactNode;
}

export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionsProvider({children}: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<Transactions[]>([]);
    
      async function loadTransactions() {
        const response = await fetch("http://localhost:3000/transactions");
        const data = await response.json();
        
        setTransactions(data);
      }
    
      useEffect(() => {
        loadTransactions();
      }
      , []);
      
  return (
    <TransactionContext.Provider value={{ transactions }}>
      {children}
    </TransactionContext.Provider>
  )
}