"use client";
import { remove } from "../redux/cartslice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface cartItem {
  id: number;
  title: string;
  price: number;
  image: string;
}

const Cartpage: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart);
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Simulating data load delay
    setTimeout(() => setIsLoaded(true), 500); 
  }, []);

  const handleRemove = (id: number) => {
    dispatch(remove(id));
  };

  const handleProceed = () => {
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
    router.push(`/checkout?total=${totalPrice}`);
  };

  return (
    <div className="main-h-screen bg-gray-100 py-8 px-4">
      <h3 className="text-3xl font-bold text-center mb-8"> Your Cart</h3>
      <div className="space-y-6">
        {!isLoaded ? (
          <p>Loading cart items...</p>
        ) : cartItems.length > 0 ? (
          <>
            {cartItems.map((item: cartItem) => (
              <div
                key={item.id}
                className="flex items-center bg-white shadow-md rounded-lg p-4"
              >
                {/* Image Section */}
                <div className="flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    height={150}
                    width={150}
                    className="rounded-md"
                  />
                </div>

                {/* Content Section */}
                <div className="ml-4 flex-grow">
                  <h5 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h5>
                  <h5 className="text-lg font-medium text-gray-600 mt-2">
                    ${item.price}
                  </h5>
                </div>

                {/* Button Section */}
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button 
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors w-full mt-4"
              onClick={handleProceed}
            >
              Proceed
            </button>
          </>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Cartpage;