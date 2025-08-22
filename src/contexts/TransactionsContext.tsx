import React, { createContext, ReactNode, useContext, useState } from 'react';

interface Transaction {
  id: string;
  description: string;
  amount: number;
  date: Date;
}

interface TransactionsContextData {
  transactions: Transaction[];
  addTransaction: (transaction: Transaction) => void;
}

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export const TransactionsProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const addTransaction = (transaction: Transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <TransactionsContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
};

export function useTransactions(): TransactionsContextData {
  const context = useContext(TransactionsContext);

  if (!context) {
    throw new Error('useTransactions deve ser usado dentro de um TransactionsProvider');
  }

  return context;
}