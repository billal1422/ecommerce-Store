"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const Checkout = () => {
  const searchParams = useSearchParams();
  const total = searchParams.get("total");
  const router = useRouter();

  const handlePayNow = () => {
    router.push(`/shipping?total=${total}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Checkout Page</h2>
        {total ? (
          <p className="text-lg font-medium">Total Amount: ${total}</p>
        ) : (
          <p className="text-red-500">No items in the cart!</p>
        )}
        <button 
          className="bg-green-500 text-white px-6 py-2 mt-4 rounded hover:bg-green-600"
          onClick={handlePayNow}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Checkout;
