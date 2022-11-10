import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const authContext = React.createContext();
export const useAuth = () => useContext(authContext);

const API = " http://localhost:8000/users";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");

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

  async function login(user) {
    let { data } = await axios(API);

    let findUser = data.find(item => item.username == user.username);
    // console.log(data);
    if (!findUser) {
      return alert("Username doesn't exist!");
    }
    if (findUser.password !== user.password) {
      return alert("Incorrect password!");
    }
    return findUser;
  }

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
