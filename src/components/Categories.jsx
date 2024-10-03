import React from 'react';
import { useNavigate } from 'react-router-dom';

function Categories() {
  const navigate = useNavigate();

  let category = [
    {
      title: 'Men',
      imageurl: '/menn.jpg',
      bgColor: 'bg-blue-500',
    },
    {
      title: 'Women',
      imageurl: '/womenn.jpg',
      bgColor: 'bg-pink-500',
    },
    {
      title: 'Kid',
      imageurl: '/kid.jpeg',
      bgColor: 'bg-green-500',
    },
    {
      title: 'Electronics',
      imageurl: '/Electronics.jpeg',
      bgColor: 'bg-pink-500',
    },
  ];

  const handleCategoryClick = (categoryTitle) => {
    navigate(`/category/${categoryTitle.toLowerCase()}`); // Navigate to the category page
  };

  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {category.map((cat, index) => (
          <div
            key={index}
            className={`relative group ${cat.bgColor} rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105`}
          >
            <img
              src={cat.imageurl}
              alt={cat.title}
              className="w-full h-56 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-2xl font-bold text-white mb-4">{cat.title}</h2>
              <button
                className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-300 transition-colors"
                onClick={() => handleCategoryClick(cat.title)}
              >
                View All
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
