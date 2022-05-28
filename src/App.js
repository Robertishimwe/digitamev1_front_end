import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import BounceRoute from "./app/bounce";
import PrivateRoute from "./app/privateRoute";
import DashboardLayout from "./layouts/dashboard";
// import LogoOnlyLayout from "./layouts/LogoOnlyLayout";
//
import Blog from "./pages/Blog";
import User from "./pages/User";
import NotFound from "./pages/Page404";
// import Register from "./pages/Register";
import Products from "./pages/Products";
import DashboardApp from "./pages/DashboardApp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<BounceRoute />}>
        <Route path="/login" element={<Login />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route path="app" element={<DashboardApp />} />
          <Route path="users" element={<User />} />
          <Route path="products" element={<Products />} />
          <Route path="blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
