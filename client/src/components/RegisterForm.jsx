import { useState } from "react"
import { register } from "../services/registerAndLoginServices";

export default function RegisterForm() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  return (
    <form onSubmit={(e) => {register(username, email, password, e)}}>
        <h1>Register Here</h1>
        <input type="text" placeholder="username..." onChange={(e) => {setUsername(e.target.value)}} value={username} />
        <input type="email" placeholder="email..." onChange={(e) => {setEmail(e.target.value)}} value={email} />
        <input type="password" placeholder="password..." onChange={(e) => {setPassword(e.target.value)}} value={password} />
        <button className="btn btn-outline" type="submit">Register</button>
    </form>
  )
}
