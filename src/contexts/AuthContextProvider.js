import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const authContext = React.createContext();
export const useAuth = () => useContext(authContext);

const API = " http://localhost:8000/users";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [letter, setLetter] = useState([]);

  const navigate = useNavigate();

  const register = async (username, password, age, email) => {
    let userObj = {
      username: username,
      password: password,
      age: age,
      email: email,
      isAdmin: false,
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
    // localStorage.setItem("user", JSON.stringify(findUser));
    // let firstLetterOfUsername = findUser.username[0];
    // letter.push(firstLetterOfUsername);
    setLetter(letter);
    setUser(findUser);
  }

  function logout() {
    localStorage.removeItem("user");
    setLetter("");
    navigate("/");
  }

  async function deleteUser(id) {
    if (id === null) {
      alert("error");
    } else {
      await axios.delete(`${API}/${id}`);
      logout();
      navigate("/");
    }
  }

  // const checkAuth = async () => {
  //   console.log("auth worked");
  //   let user = JSON.parse(localStorage.getItem("user"));

  //   localStorage.setItem(
  //     "user",
  //     JSON.stringify({
  //       refresh: user.refresh,
  //     })
  //   );

  //   let username = localStorage.getItem("user");
  //   setUser(username);
  // };

  return (
    <authContext.Provider
      value={{
        letter: letter,
        register,
        login,
        logout,
        deleteUser,
        user,
        // checkAuth,
      }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
