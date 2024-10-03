import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../components/Modal";
import ChangeAddress from "../components/ChangeAddress";
import { removeCart, increaseQuantity, decreaseQuantity } from "../Redux/cartSlice";
import { useNavigate } from "react-router-dom";

function Cart() {
  const products = useSelector((state) => state.cart);
  const [address, setAddress] = useState("22, Gandhi Road, Kadapa");
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4">
      {products.products.length > 0 ? (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-4 mt-10">Shopping Cart</h3>

          {/* Table Header (visible only on larger screens) */}
          <div className="hidden md:grid grid-cols-5 gap-4 text-center items-center font-semibold border-b pb-2">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
            <p className="text-red-500">Remove</p>
          </div>

          {/* Product Rows */}
          <div>
            {products.products.map((product) => (
              <div
                key={product.id}
                className="grid md:grid-cols-5 grid-cols-1 items-center gap-4 py-4 border-b"
              >
                {/* Product Image & Name (takes full width on mobile) */}
                <div className="flex items-center col-span-1 md:col-span-1">
                  <img
                    src={product.img}
                    alt={product.name || "Product image"}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <h3 className="ml-4 text-lg font-semibold">{product.name}</h3>
                </div>

                {/* Price (stacked on mobile) */}
                <p className="text-center md:col-span-1">${product.price}</p>

                {/* Quantity Control */}
                <div className="flex items-center justify-center md:col-span-1">
                  <button
                    className="px-2 py-1 bg-gray-200 rounded"
                    onClick={() => dispatch(decreaseQuantity({ id: product.id }))}
                  >
                    -
                  </button>
                  <span className="mx-4">{product.totalQuantity}</span>
                  <button
                    className="px-2 py-1 bg-gray-200 rounded"
                    onClick={() => dispatch(increaseQuantity({ id: product.id }))}
                  >
                    +
                  </button>
                </div>

                {/* Subtotal */}
                <p className="text-center md:col-span-1">
                  ${(product.totalQuantity * product.price).toFixed(2)}
                </p>

                {/* Delete Button */}
                <div className="flex justify-center md:col-span-1">
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => dispatch(removeCart(product))}
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center mt-6">
            {/* Cart Total */}
            <div className="w-full max-w-md p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Cart Total</h3>

              {/* Total Items */}
              <div className="flex justify-between mb-2">
                <span>Total Items:</span>
                <span>{products.totalQuantity}</span>
              </div>

              {/* Shipping Info */}
              <div className="mb-4">
                <p className="font-medium">Shipping:</p>
                <p className="text-sm text-gray-600">Shipping to:</p>
                <span className="text-sm">{address}</span>
                <button
                  onClick={() => setModalOpen(true)}
                  className="block mt-2 text-blue-500 underline hover:text-blue-700"
                >
                  Change Address
                </button>
              </div>

              {/* Total Price */}
              <div className="flex justify-between mb-4">
                <span>Total Price:</span>
                <span className="font-semibold">
                  ${products.products
                    .reduce(
                      (acc, item) => acc + item.totalQuantity * item.price,
                      0
                    )
                    .toFixed(2)}
                </span>
              </div>

              {/* Proceed to Checkout */}
              <button
                onClick={() => navigate("/checkout")}
                className="w-full py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
              >
                Proceed To Checkout
              </button>
            </div>
          </div>

          {/* Modal Component */}
          <Modal isModalOpen={isModalOpen} setModalOpen={setModalOpen}>
            <ChangeAddress
              address={address}
              setAddress={setAddress}
              setModalOpen={setModalOpen}
            />
          </Modal>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <img src="./card empty.jpg" alt="No product added" className="w-64 h-64" />
          <p className="text-gray-500 mt-4">No products in your cart</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
