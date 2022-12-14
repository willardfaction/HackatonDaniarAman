import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import RegistrationPage from "./pages/RegistrationPage";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage.jsx";
import EditProductPage from "./pages/EditProductPage.jsx";
import CartPage from "./pages/CartPage.jsx";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/register",
      element: <RegistrationPage />,
      id: 1,
    },
    {
      link: "/login",
      element: <LoginPage />,
      id: 2,
    },
    {
      link: "/",
      element: <HomePage />,
      id: 3,
    },
    {
      link: "*",
      element: <NotFoundPage />,
      id: 4,
    },
    {
      link: "/admin",
      element: <AdminPage />,
      id: 5,
    },
    {
      link: "/products",
      element: <ProductsPage />,
      id: 6,
    },
    {
      link: "/details/:id",
      element: <ProductDetailsPage />,
      id: 7,
    },
    {
      link: "/edit/:id",
      element: <EditProductPage />,
      id: 8,
    },
    {
      link: "/cartPage",
      element: <CartPage />,
      id: 9,
    },
  ];

  return (
    <Routes>
      {PUBLIC_ROUTES.map(item => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
