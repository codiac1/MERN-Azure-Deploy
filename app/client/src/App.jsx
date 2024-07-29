import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import ConfirmationPage from "./components/ConfirmationPage";

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <ProductProvider>
          <Router>
            <Navbar />
            <div className="content">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/products/:id" element={<ProductDetail />} />
                <Route exact path="/cart" element={<Cart />} />
                <Route
                  exact
                  path="/confirmation"
                  element={<ConfirmationPage />}
                />
              </Routes>
            </div>
            <Footer />
          </Router>
        </ProductProvider>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
