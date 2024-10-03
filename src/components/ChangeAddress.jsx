import React, { useState } from "react";

function ChangeAddress({ address, setAddress, setModalOpen }) {
  const [newAdd, setNewAdd] = useState(address); // Initialize with current address

  const onSave = () => {
    setAddress(newAdd); // Update the address in parent
    setModalOpen(false); // Close the modal
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Change Address</h2>
      <input
        type="text"
        placeholder="Enter your address"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 mb-4"
        value={newAdd} // Controlled input value
        onChange={(e) => setNewAdd(e.target.value)} // Update state on input change
      />
      <div className="flex justify-between w-full">
        <button
          className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400"
          onClick={() => setModalOpen(false)} // Close modal on Cancel
        >
          Cancel
        </button>
        <button
          className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
          onClick={onSave} // Save new address and close modal
        >
          Save Address
        </button>
      </div>
    </div>
  );
}

export default ChangeAddress;
