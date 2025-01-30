import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Stato dell'utente
  const [loading, setLoading] = useState(true); // Per gestire il caricamento

  const login = async (email, password) => {
    try {
      const { data } = await axios.post("/api/auth/login", { email, password });
      localStorage.setItem("accessToken", data.accessToken);
      setUser(data.user); // Aggiorna l'utente
    } catch (error) {
      console.error("Errore di login", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    setUser(null);
  };

  const checkAuth = async () => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      try {
        const { data } = await axios.get("/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(data); // Imposta l'utente
      } catch {
        logout();
      }
    }
    setLoading(false); // Termina il caricamento
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
