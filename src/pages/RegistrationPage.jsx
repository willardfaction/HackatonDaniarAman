import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContextProvider";

const RegistrationPage = () => {
  <h1>Registration Page</h1>;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const { register } = useAuth();

  return (
    <>
      <input
        type="text"
        placeholder="Enter your nickname"
        value={username}
        onChange={e => setUsername(e.target.value)}
        style={{ marginTop: "80px" }}
      />
      <input
        type="text"
        placeholder="Enter your password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your age"
        value={age}
        onChange={e => setAge(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button onClick={() => register(username, password, age, email)}>
        Register
      </button>
    </>
  );
};

export default RegistrationPage;
