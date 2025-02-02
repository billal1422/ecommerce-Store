"use client";
import { useSearchParams } from "next/navigation";

const Shipping = () => {
  const searchParams = useSearchParams();
  const total = searchParams.get("total");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Select Shipping Method</h2>
        <p className="text-lg font-medium">Total Amount: ${total}</p>
        
        <div className="mt-4 space-y-2">
          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
            Standard Shipping
          </button>
          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
            Express Shipping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
