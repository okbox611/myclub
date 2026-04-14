import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

// Hook to use auth anywhere
export const useAuth = () => {
  return useContext(AuthContext);
};

// Provider wraps your whole app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user from localStorage (so login persists)
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Fake login (replace later with real backend)
  const login = (username, password) => {
    if (username === "admin" && password === "password") {
      const userData = { username: "admin" };
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      return true;
    }
    return false;
  };

  // Logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};