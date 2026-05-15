import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useLocation } from "wouter";
import { adminEnabled } from "../config";

export default function Login() {
  const { login } = useAuth();
  const [, setLocation] = useLocation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  if (!adminEnabled) {
    return (
      <div>
        <h1>Login unavailable</h1>
        <p>This admin area is disabled for this deployment.</p>
      </div>
    );
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const success = login(username, password);

    if (success) {
      setLocation("/admin");
    } else {
      alert("Invalid login");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
