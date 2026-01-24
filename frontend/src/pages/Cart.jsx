import { useContext } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import { Trash2, ShoppingBag, MapPin, Phone, User } from "lucide-react";

const Cart = () => {
  const { cart, clearCart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const placeOrder = async () => {
    if (!cart.length) return alert("Cart is empty!");

    await axios.post(`${import.meta.env.VITE_API_URL}/api/orders`, {
      products: cart,
    });

    alert("🎉 Order placed successfully!");
    clearCart();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* CART ITEMS */}
        <div className="md:col-span-2 bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
            <ShoppingBag /> Your Cart
          </h2>

          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            cart.map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center border-b py-4"
              >
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">
                    ₹{item.price} × {item.quantity}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <p className="font-semibold">₹{item.price * item.quantity}</p>

                  <button
                    onClick={() => removeFromCart(item.productId)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* CHECKOUT FORM */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-4">Checkout</h3>

          <p className="text-sm text-gray-500 mb-4">
            Enter your details to place the order. Cash on delivery available.
          </p>

          <div className="space-y-3">
            <div className="flex items-center border rounded px-3">
              <User size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-2 outline-none"
              />
            </div>

            <div className="flex items-center border rounded px-3">
              <Phone size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-2 outline-none"
              />
            </div>

            <div className="flex items-start border rounded px-3">
              <MapPin size={18} className="text-gray-400 mt-2" />
              <textarea
                placeholder="Delivery Address"
                className="w-full p-2 outline-none"
                rows="3"
              />
            </div>
          </div>

          {/* TOTAL */}
          <div className="flex justify-between mt-6 text-lg font-bold">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <button
            onClick={placeOrder}
            className="mt-6 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Place Order
          </button>

          <p className="text-xs text-gray-500 mt-3 text-center">
            🔒 Secure checkout • Cash on Delivery
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
