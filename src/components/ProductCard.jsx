import React from "react";
import { FaStar } from "react-icons/fa";
import { addToCart } from "../Redux/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    dispatch(addToCart(product));
    alert("Product added successfully");
  };

  return (
    <Link to={`/product/${product.id}`}>
      <div className="flex flex-col items-center text-center bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <img
          src={product.img}
          alt={product.name}
          className="w-40 h-40 object-contain mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-700">{product.name}</h3>
        <p className="text-lg font-bold text-gray-800 mt-2">${product.price}</p>
        <div className="flex mt-2">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={`text-yellow-400`} />
          ))}
        </div>
        <button
          onClick={(e) => handleAddToCart(e, product)}
          className="mt-4 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-medium py-2 px-6 rounded-full shadow-md hover:from-blue-600 hover:to-indigo-600 transform hover:scale-110 transition-all duration-300 ease-in-out"
        >
          <span className="mr-2 text-xs sm:text-sm md:text-base lg:text-lg">
            +
          </span>
          <span className="text-xs sm:text-sm md:text-base lg:text-lg">
            Add to Cart
          </span>
        </button>
      </div>
    </Link>
  );
}

export default ProductCard;
