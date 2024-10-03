import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const products = useSelector((state) => state.products.products);

  // Filter products based on the selected category
  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-center text-2xl font-bold mb-6">
        Products in {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center">No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
