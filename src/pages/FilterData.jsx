import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { setProducts } from "../Redux/productSlice"; // Import the action to set products
import { shopData } from "../assets/Catedorydata"; // Adjust the path as needed

function FilterData() {
  const dispatch = useDispatch();
  const filteredProducts = useSelector((state) => state.products.filteredItem);

  useEffect(() => {
    // Set products when the FilterData component mounts
    if (filteredProducts.length === 0) {
      dispatch(setProducts(shopData)); // Dispatch to set mock data if no products are present
    }
  }, [dispatch, filteredProducts]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      {filteredProducts.length > 0 ? (
        <>
          <h2 className="text-center text-2xl font-bold mb-8">Shop</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center w-full py-12">
          <img
            src="./no_product_found.jpg"
            alt="No Products Found"
            className="w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4 object-contain"
          />
        </div>
      )}
    </div>
  );
}

export default FilterData;
