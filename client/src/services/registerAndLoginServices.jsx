import api from "./api";

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

export const login = async (email, password, event) => {
  event.preventDefault();

  try {
    const response = await api.post("/login", {
      email,
      password,
    });
    console.log(response.data);
  } catch (error) {
    console.error("Error on login", error);
  }
};
