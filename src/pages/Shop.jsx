import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { setProducts } from "../Redux/productSlice";
import { shopData } from "../assets/Catedorydata"; // Adjust the path as needed

function Shop() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    // Set products when the Shop component mounts
    if (products.length === 0) {
      dispatch(setProducts(shopData));
    }
  }, [dispatch, products]);

  // Example: Filtering top products based on some criteria
  const topProducts = shopData.filter(product => product.price > 100); // Customize filter condition as needed

  return (
    <div className="container mx-auto p-4 md:p-8">
      {/* Top Products Section */}
      <h2 className="text-center text-2xl font-bold mb-8">Shop</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
        {topProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>

      {/* All Products Section */}
      {/* Uncomment this section to display all products */}
      {/* <h2 className="text-center text-2xl font-bold mb-8">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div> */}
    </div>
  );
}

export default Shop;
