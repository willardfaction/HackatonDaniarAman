import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const authContext = React.createContext();
export const useAuth = () => useContext(authContext);

const API = " http://localhost:8000/users";

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const register = async (username, password, age, email) => {
    let userObj = {
      username: username,
      password: password,
      age: age,
      email: email,
    };
    try {
      const res = await axios.post(`${API}`, userObj);
      console.log(res);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (username, password, age, email) => {
    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    formData.append("age", age);
    formData.append("email", email);
  };

  return (
    <authContext.Provider
      value={{
        register,
        login,
      }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
