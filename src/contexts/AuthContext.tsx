import { router } from "expo-router";
import { User, onAuthStateChanged, signOut } from "firebase/auth";
import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { auth } from "../config/firebaseConfig";

interface AuthContextData {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean; 
  signOut: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); 
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.replace('/');
    } catch (error) {
      console.error("Erro ao fazer logout: ", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, loading, signOut: handleSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
}