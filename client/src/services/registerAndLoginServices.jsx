import { useContext } from "react";
import api from "./api";
import AuthContext from "../contexts/AuthContext";


export const register = async (username, email, password, event) => {
  event.preventDefault();
  try {
    const response = await api.post("/register", {
      username,
      email,
      password,
    });

    console.log(response.data);
  } catch (err) {
    console.error("Error on registration", err);
  }
};

export const useAuth = () => {
  const { setAuth } = useContext(AuthContext);
  const login = async (email, password, event) => {
    event.preventDefault();
  
    try {
      const response = await api.post("/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      setAuth(response.data.token);
    } catch (error) {
      console.error("Error on login", error);
    }
  };

  return { login };
}
