"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext({
  isAuthenticated: false,
  name: "",
  login: (id) => {},
  logout: () => {},
  headerName: (name) => {},
});

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [name, setName] = useState("");

  // console.log("Outside Auth Context");

  const handleLogout = async () => {
    const response = await fetch("/api/logout", {
      method: "POST",
      body: "",
    });
    const data = await response.json();
    if (response.ok) console.log(data);
  };

  useEffect(() => {
    const storedId = localStorage.getItem("isLogged");
    if (parseInt(storedId) === 1) {
      setIsAuthenticated(true);
    }
    const nameMain = localStorage.getItem("name");
    if (nameMain) {
      setName(nameMain);
    }

    // console.log("In useffect authcontext");
  }, [isAuthenticated, name]);

  const login = (isAuth) => {
    setIsAuthenticated(true);
    localStorage.setItem("isLogged", isAuth);
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isLogged");
    localStorage.removeItem("name");
    handleLogout();
  };

  const headerName = (value) => {
    setName(value);
    localStorage.setItem("name", value);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, name, headerName }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContextProvider;
