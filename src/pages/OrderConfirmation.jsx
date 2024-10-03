import React from 'react';
import { useNavigate } from 'react-router-dom';

function OrderConfirmation({ order }) {
  const navigate = useNavigate();

  // Check if `order` exists and has valid data before rendering
  if (!order || !order.products || order.products.length === 0) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold text-red-500">No order found!</h2>
        <button
          onClick={() => navigate("/shop")}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Back to Shop
        </button>
      </div>
    );
  }

  const { products, totalprice, totalQuantity, orderNo, shippingInformation } = order;

  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-green-600 mb-6">Order Confirmed!</h2>
      <p className="text-lg mb-4">Thank you for your purchase. Your order number is <strong>{orderNo}</strong>.</p>

      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h3 className="text-xl font-semibold mb-3">Order Summary</h3>
        <div className="border-b pb-4 mb-4">
          <p className="font-medium">Total Price: ${totalprice}</p>
          <p>Total Quantity: {totalQuantity}</p>
        </div>

        <h3 className="text-xl font-semibold mb-3">Shipping Information</h3>
        <p>Address: {shippingInformation.address}</p>
        <p>City: {shippingInformation.city}</p>
        <p>Zip Code: {shippingInformation.zip}</p>
      </div>

      <h3 className="text-xl font-semibold mb-4">Products Ordered</h3>
      <div className="space-y-4">
        {products.map((item) => (
          <div key={item.id} className="flex justify-between items-center border-b pb-2">
            <div className="flex items-center space-x-4">
              <img src={item.img} alt={item.name} className="w-16 h-16 object-cover" />
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-gray-600">Qty: {item.totalQuantity}</p>
              </div>
            </div>
            <p className="font-medium">${item.price}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between">
        <button
          onClick={() => navigate("/")}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Continue Shopping
        </button>
        <button
          onClick={() => navigate("/track-order")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Track Order
        </button>
      </div>
    </div>
  );
}

export default OrderConfirmation;
