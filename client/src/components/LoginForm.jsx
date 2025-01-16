import { useState } from "react";
import { login } from "../services/registerAndLoginServices";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      <button type="submit" className="btn btn-outline">Login</button>
    </form>
  );
}
