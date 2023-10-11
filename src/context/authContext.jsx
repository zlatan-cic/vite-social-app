import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [curentUser, setCurentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    //to do
    setCurentUser({
      id: 1,
      name: "Josh Mormen",
      profilePicture:
        "https://images.unsplash.com/photo-1590868700983-496afd504479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1062&q=80",
      
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(curentUser));
  }, [curentUser]);

  return (
    <AuthContext.Provider value={{ curentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
