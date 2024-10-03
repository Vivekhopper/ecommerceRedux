import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Checkout({ setOrder }) {
  const navigate = useNavigate();
  const [billingOpen, setBillingOpen] = useState(false);
  const [shippingOpen, setShippingOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [shInfo, setShipInfo] = useState({
    address: "",
    city: "",
    zip: "",
  });

  // Cart items from Redux
  // Checkout Component
const totalprice = useSelector((state) => state.cart.totalPrice); // Ensure correct selector

  const { products ,totalQuantity } = useSelector((state) => state.cart);

  // Function to generate random order number
  const generateOrderNumber = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let orderNumber = "";
    for (let i = 0; i < 10; i++) {
      orderNumber += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return orderNumber;
  };

  const handleOrder = () => {
    const newOrder = {
      products,
      totalprice,
      totalQuantity,
      orderNo: generateOrderNumber(), // Generate order number here
      shippingInformation: shInfo,
    };

    setOrder(newOrder); // Pass the new order object to App's state
    navigate("/orderconfirmation"); // Navigate to order confirmation page
  };

  const toggleBilling = () => setBillingOpen(!billingOpen);
  const toggleShipping = () => setShippingOpen(!shippingOpen);
  const handlePaymentChange = (e) => setPaymentMethod(e.target.value);

  return (
    <div className="max-w-6xl mx-auto p-6 mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Side: Billing and Shipping Information */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-2xl font-bold mb-4 text-center">Checkout</h3>

        {/* Billing Information Section */}
        <form className="mb-6">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={toggleBilling}
          >
            <h3 className="text-xl font-semibold">Billing Information</h3>
            {billingOpen ? <FaChevronUp /> : <FaChevronDown />}
          </div>

          {billingOpen && (
            <div className="space-y-4 mt-4">
              <div>
                <label
                  htmlFor="billing-name"
                  className="block font-medium"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="billing-name"
                  className="border rounded-lg p-2 w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="billing-email"
                  className="block font-medium"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="billing-email"
                  className="border rounded-lg p-2 w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="billing-phone"
                  className="block font-medium"
                >
                  Phone:
                </label>
                <input
                  type="tel"
                  id="billing-phone"
                  className="border rounded-lg p-2 w-full"
                />
              </div>
            </div>
          )}
        </form>

        {/* Shipping Information Section */}
        <form className="mb-6">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={toggleShipping}
          >
            <h3 className="text-xl font-semibold">Shipping Information</h3>
            {shippingOpen ? <FaChevronUp /> : <FaChevronDown />}
          </div>

          {shippingOpen && (
            <div className="space-y-4 mt-4">
              <div>
                <label htmlFor="shipping-address" className="block font-medium">
                  Address:
                </label>
                <input
                  type="text"
                  id="shipping-address"
                  className="border rounded-lg p-2 w-full"
                  placeholder="Enter Address"
                  onChange={(e) =>
                    setShipInfo({ ...shInfo, address: e.target.value })
                  }
                />
              </div>
              <div>
                <label htmlFor="shipping-city" className="block font-medium">
                  City:
                </label>
                <input
                  type="text"
                  id="shipping-city"
                  className="border rounded-lg p-2 w-full"
                  placeholder="Enter City"
                  onChange={(e) =>
                    setShipInfo({ ...shInfo, city: e.target.value })
                  }
                />
              </div>
              <div>
                <label htmlFor="shipping-zipcode" className="block font-medium">
                  ZipCode:
                </label>
                <input
                  type="text"
                  id="shipping-zipcode"
                  className="border rounded-lg p-2 w-full"
                  placeholder="Enter ZipCode"
                  onChange={(e) =>
                    setShipInfo({ ...shInfo, zip: e.target.value })
                  }
                />
              </div>
            </div>
          )}
        </form>

        {/* Payment Method Section */}
        <form className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Payment Method</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="radio"
                name="payment"
                value="cash"
                id="cash"
                className="mr-2"
                onChange={handlePaymentChange}
              />
              <label htmlFor="cash" className="font-medium">
                Cash On Delivery
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="payment"
                value="card"
                id="card"
                className="mr-2"
                onChange={handlePaymentChange}
              />
              <label htmlFor="card" className="font-medium">
                Card
              </label>
            </div>

            {paymentMethod === "card" && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="card-type" className="block font-medium">
                    Card Type:
                  </label>
                  <select
                    id="card-type"
                    className="border rounded-lg p-2 w-full"
                  >
                    <option value="credit">Credit Card</option>
                    <option value="debit">Debit Card</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="card-number" className="block font-medium">
                    Card Number:
                  </label>
                  <input
                    type="text"
                    id="card-number"
                    className="border rounded-lg p-2 w-full"
                  />
                </div>
                <div>
                  <label htmlFor="expiry-date" className="block font-medium">
                    Expiry Date:
                  </label>
                  <input
                    type="text"
                    id="expiry-date"
                    className="border rounded-lg p-2 w-full"
                    placeholder="MM/YY"
                  />
                </div>
                <div>
                  <label htmlFor="cvv" className="block font-medium">
                    CVV:
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    className="border rounded-lg p-2 w-full"
                  />
                </div>
              </div>
            )}
          </div>
        </form>
      </div>

      {/* Right Side: Cart Items */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Your Cart</h3>
        <div className="space-y-4">
          {products.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row justify-between items-start md:items-center border-b pb-2"
            >
              <div className="flex items-center">
                <img src={item.img} alt="" className="w-10 mr-4" />
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-gray-600">Qty: {item.totalQuantity}</p>
                </div>
              </div>
              <p className="font-medium mt-2 md:mt-0">${item.price}</p>
              {/* Calculate total price for this item */}
              {/* Update the displayed price in the total amount calculation */}
            </div>
          ))}
        </div>

        {/* Total Price and Quantity */}
        <div className="mt-4">
          <div className="flex justify-between">
            <p className="font-medium">Total Quantity:</p>
            <p className="font-medium">{totalQuantity}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-medium">Total Price:</p>
            <p className="font-medium">${totalprice}</p>
          </div>
        </div>

        <button
          onClick={handleOrder}
          className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-6 w-full"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Checkout;
