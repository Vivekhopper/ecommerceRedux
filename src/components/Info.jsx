import React from 'react';
import { FaShippingFast, FaHeadset, FaDollarSign, FaLock, FaGift } from 'react-icons/fa';

export default function Info() {
  const information = [
    {
      icon: <FaShippingFast className="text-4xl" />,
      title: 'Free Shipping',
      description: 'Get your orders delivered with no extra cost',
      bgColor: 'bg-blue-100',
    },
    {
      icon: <FaHeadset className="text-4xl" />,
      title: 'Support 24/7',
      description: 'We are here to help you at any time',
      bgColor: 'bg-cyan-100',
    },
    {
      icon: <FaDollarSign className="text-4xl" />,
      title: '100% Money Back',
      description: 'Full refund on return within 30 days',
      bgColor: 'bg-yellow-100',
    },
    {
      icon: <FaLock className="text-4xl" />,
      title: 'Payment Secure',
      description: 'Your payments are safe and secure',
      bgColor: 'bg-purple-100',
    },
    {
      icon: <FaGift className="text-4xl" />,
      title: 'Special Offers',
      description: 'Enjoy amazing deals and discounts',
      bgColor: 'bg-red-100',
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {information.map((info, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-center p-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform transition-shadow duration-300 ease-in-out ${info.bgColor}`}
          >
            <div className={`text-4xl text-${info.bgColor.split('-')[1] === '100' ? 'gray-800' : 'gray-600'}`}>
              {info.icon}
            </div>
            <h3 className="text-lg font-semibold mt-2">{info.title}</h3>
            <p className="text-gray-600 mt-1">{info.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
