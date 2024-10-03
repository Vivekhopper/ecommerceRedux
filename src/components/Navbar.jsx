import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Login from "../pages/LoginPage"; // Import Login component
import Register from "../pages/RegisterPage"; // Import Register component
import { setSearchTerm } from "../Redux/productSlice";

function Navbar() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const openLoginModal = () => {
    setIsRegister(false);
    setModalOpen(true);
  };

  const openRegisterModal = () => {
    setIsRegister(true);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(search));
    navigate("/filter-data");
  };

  return (
    <>
    <nav className="bg-white w-full fixed z-10 ">
      <div className="container mx-auto px-4 py-3">
        {/* First Row: Logo, Search, Cart, Login/Register */}
        <div className="flex flex-wrap justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            Galaxy Store
          </Link>

          {/* Search Input - Desktop View */}
          <form
            action=""
            className="relative hidden lg:block w-1/2 mx-4"
            onSubmit={handleSearch}
          >
            <input
              type="text"
              placeholder="Search Product"
              className="w-full pr-10 pl-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              onChange={(e) => setSearch(e.target.value)}
            />
            <FaSearch className="absolute right-3 top-2 text-gray-400" />
          </form>

          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <FaShoppingCart className="text-2xl text-gray-800" />
              {products.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1.5">
                  {products.length}
                </span>
              )}
            </Link>
            <button
              className="text-gray-800 hover:text-indigo-600"
              onClick={openLoginModal}
            >
              Login
            </button>
            <span>|</span>
            <button
              className="text-gray-800 hover:text-indigo-600"
              onClick={openRegisterModal}
            >
              Register
            </button>
          </div>
        </div>

        {/* Second Row: Search Input - Mobile View */}
        <form
          action=""
          className="relative lg:hidden w-full mt-3"
          onSubmit={handleSearch}
        >
          <input
            type="text"
            placeholder="Search Product"
            className="w-full pr-10 pl-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch className="absolute right-3 top-2 text-gray-400" />
        </form>

        {/* Third Row: Navigation Links */}
        <div className="flex justify-center space-x-4 py-2 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mt-2 rounded-lg shadow-md">
          <Link
            to="/"
            className="text-white font-medium hover:bg-white hover:text-indigo-600 px-3 py-2 rounded transition-colors duration-300 ease-in-out"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="text-white font-medium hover:bg-white hover:text-indigo-600 px-3 py-2 rounded transition-colors duration-300 ease-in-out"
          >
            Shop
          </Link>
          <Link
            to="/contact"
            className="text-white font-medium hover:bg-white hover:text-indigo-600 px-3 py-2 rounded transition-colors duration-300 ease-in-out"
          >
            Contact
          </Link>
          <Link
            to="/about"
            className="text-white font-medium hover:bg-white hover:text-indigo-600 px-3 py-2 rounded transition-colors duration-300 ease-in-out"
          >
            About
          </Link>
        </div>
      </div>

      {/* Modal for Login/Register */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto z-50">
            {isRegister ? (
              <Register setModelOpen={closeModal} />
            ) : (
              <Login setModelOpen={closeModal} />
            )}
            <button
              onClick={closeModal}
              className="mt-4 text-gray-800 hover:text-indigo-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </nav>
    <div className="h-28">

    </div>
    </>
  );
}

export default Navbar;
