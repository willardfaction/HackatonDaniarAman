import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContextProvider";

const LoginPage = () => {
  <h1>Login Page</h1>;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  return (
    <>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />

      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <button onClick={() => login(username, password)}>Login</button>
    </>
  );
};

export default LoginPage;