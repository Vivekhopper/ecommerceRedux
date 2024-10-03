import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function ProductDetailPage() {
  const { id } = useParams(); // Destructure id from useParams
  const products = useSelector((state) => state.products.products);
  const [dePro, setDepro] = useState(null); // Initialize state with null

  useEffect(() => {
    const newProduct = products.find((pro) => pro.id === id);
    setDepro(newProduct);
  }, [id, products]);

  return (
    <div className="container mx-auto p-6 mt-6">
      {dePro ? (
        <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center md:items-start">
          {/* Image on the left for larger screens, center on smaller screens */}
          <div className="md:w-1/2 w-full mb-6 md:mb-0">
            <img
              src={dePro.img}
              alt={dePro.name}
              className="w-1/2 h-82 object-cover rounded-lg shadow-lg ml-14"
            />
          </div>
          
          {/* Product details on the right side */}
          <div className="md:w-1/2 w-full flex flex-col justify-center items-start md:ml-8">
            <h2 className="text-3xl font-bold text-white mb-4">{dePro.name}</h2>
            <p className="text-xl font-semibold text-yellow-200 mb-2">₹{dePro.price}</p>
            <p className="text-white mb-4">
              <span className="font-bold">Sizes Available:</span> {dePro.size}
            </p>
            <p className="text-white bg-gray-800 bg-opacity-75 p-4 rounded-lg">
              Embrace effortless elegance with this flowy summer dress, featuring a vibrant floral print that adds a touch of whimsy to your warm-weather wardrobe. Perfect for picnics or beach days, its lightweight fabric ensures comfort all day long.
            </p>
          </div>
        </div>
      ) : (
        <p className="text-gray-500">Product not found</p>
      )}
    </div>
  );
}

export default ProductDetailPage;
