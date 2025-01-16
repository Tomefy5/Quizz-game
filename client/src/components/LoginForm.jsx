import { useContext, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import { useAuth } from "../services/registerAndLoginServices";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const { loginAuth } = useContext(AuthContext);

  return (
    <form onSubmit={(e) => {login(email, password, e)}}>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="email..."
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        required
      />
      <input
        type="password"
        placeholder="password..."
        value={password}
        onChange={(e) => {
            setPassword(e.target.value);
        }}
        required
      />
      <button onClick={() => loginAuth()} type="submit" className="btn btn-outline">Login</button>
    </form>
  );
}
