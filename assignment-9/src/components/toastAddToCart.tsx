"use client";
import { addToCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { FaShoppingCart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface CartItem {
  title: string;
  image: string;
  productDetails: string;
  price: number;
  allCategory: string;
  size?: string;
  color: string;
  quantity: number;
}

interface ToastAddToCartProps {
  cartItem: CartItem;
}

const ToastAddToCart: React.FC<ToastAddToCartProps> = ({ cartItem }) => {
  const dispatch = useAppDispatch();

  const notify = () =>
    toast.success("Item Successfully Placed in Your Cart!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const handleAddToCart = () => {
    dispatch(addToCart(cartItem));
    notify();
  };

  return (
    <div>
      <div className="w-fit" onClick={handleAddToCart}>
        <button className="group bg-gray-800 flex hover:bg-transparent text-white rounded-xl hover:text-black text-sm p-3">
          <FaShoppingCart className="mr-2 h-4 w-4 group-hover:text-red-500 duration-300" />
          Add to Cart
        </button>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default ToastAddToCart;