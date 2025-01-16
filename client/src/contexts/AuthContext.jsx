import { createContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(localStorage.getItem("token"));

  const loginAuth = (token) => {
    setAuth(token);
    localStorage.setItem("token", token);
  };

  const logoutAuth = () => {
    setAuth(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ auth, loginAuth, logoutAuth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
