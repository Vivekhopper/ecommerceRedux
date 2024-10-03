import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./components/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import FilterData from "./pages/FilterData";
import Contact from "./pages/ContactPage";
import About from "./pages/About";
import ProductDetailPage from "./pages/ProductDetailPage";
import CategoryPage from "./pages/CategoryPage";
function App() {
  const [order, setOrder] = useState(null); // State to store the order details
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/filter-data" element={<FilterData />} />
        <Route path="/checkout" element={<Checkout setOrder={setOrder} />} /> 
        <Route path="/category/:categoryName" element={<CategoryPage />} /> {/* Route for category page */}
        <Route path="/orderconfirmation" element={<OrderConfirmation order={order} />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
