import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import "../../styles/Navbar.css";
import { useNavigate } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useAuth } from "../../contexts/AuthContextProvider";

import MenuIcon from "@mui/icons-material/Menu";
import { useProducts } from "../../contexts/ProductContextProvider";
const Navbar = () => {
  const [searchStyle, setSearchStyle] = useState("searchBox");
  const [closeBtnStyle, setCloseBtnStyle] = useState("closeBtn");
  const [searchBtnStyle, setSearchBtnStyle] = useState("searchBtn");
  const [menuBtnStyle, setMenuBtnStyle] = useState("menuToggle");
  const { setSearchValue, searchValue } = useProducts();

  const { user } = useAuth();

  function logout() {
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload(false);
  }

  const [headerOpen, setHeaderOpen] = useState(false);
  const headerStyle = () => {
    if (headerOpen) {
      return "open";
    }
  };

  const navigate = useNavigate();

  return (
    <>
      <header className={headerStyle()}>
        <a href="" className="logo">
          Logo
        </a>
        <img
          src="https://steampay.com/img/logo.svg"
          alt=""
          width="195px"
          className="imgLogo"
          onClick={() => {
            navigate("/");
          }}
        />
        <div className="group">
          <ul className="navigation">
            <li
              onClick={() => {
                navigate("/products");
              }}>
              <a>Catalog</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Contact</a>
            </li>

            {user ? (
              <li
                className="login"
                onClick={() => {
                  logout();
                }}>
                <a>Logout</a>
              </li>
            ) : (
              <>
                <li
                  className="register"
                  onClick={() => {
                    navigate("/register");
                  }}>
                  <a>Register</a>
                </li>
                <li
                  className="login"
                  onClick={() => {
                    navigate("/login");
                  }}>
                  <a>Sign in</a>
                </li>
              </>
            )}
          </ul>
          <div className="search">
            <span className="icon">
              <SearchIcon
                onClick={() => {
                  setSearchStyle("searchBox active");
                  setCloseBtnStyle("closeBtn active");
                  setSearchBtnStyle("searchBtn active");
                  setMenuBtnStyle("menuToggle hide");
                }}
                className={searchBtnStyle}
              />
              <CloseIcon
                onClick={() => {
                  setSearchStyle("searchBox");
                  setCloseBtnStyle("closeBtn");
                  setSearchBtnStyle("searchBtn");
                  setMenuBtnStyle("menuToggle");
                  setSearchValue("");
                }}
                className={closeBtnStyle}
              />
            </span>
          </div>
          <div className={menuBtnStyle}>
            <MenuIcon
              onClick={() => {
                setHeaderOpen(!headerOpen);
              }}
            />
          </div>
          <div className="cart">
            <ShoppingCartOutlinedIcon onClick={() => navigate("/cartpage")} />
          </div>
        </div>
        <div className={searchStyle}>
          <input
            type="text"
            placeholder="Search here..."
            onChange={e => {
              setSearchValue(e.target.value);
            }}
            value={searchValue}
          />
        </div>
      </header>
    </>
  );
};

export default Navbar;
