import React, { useEffect } from "react";
import { categorydata, shopData } from "../assets/Catedorydata";
import Info from "../components/Info";
import Categories from "../components/Categories";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../Redux/productSlice";
import ProductCard from "../components/ProductCard";

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(setProducts(shopData));
  }, [dispatch]);

  return (
    <div>
      {/* Categories and Banner Section */}
      <div className="flex flex-col md:flex-row  p-4 bg-green-100">
        {/* Left Side: Content about E-commerce */}
        <div className="md:w-1/2 p-20 grid justify-center items-center h-full ">
          <h2 className="text-xl font-bold mb-2 text-center ">
            Welcome to Our E-commerce Site!
          </h2>
          <p className="text-gray-700 text-center ">
            Discover a wide range of products at unbeatable prices. Shop now and
            enjoy fast shipping, great customer service, and easy returns.
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2 flex justify-center items-center p-4">
          <img
            src="./landing1.jpg"
            alt="Landing"
            className="w-full h-auto max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Info Section */}
      <Info />
      {/* Categories Section */}
      <Categories />

      {/* Top Products Section */}
      <div className="container mx-auto p-8">
        <h2 className="text-center text-2xl font-bold mb-6">Top Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
