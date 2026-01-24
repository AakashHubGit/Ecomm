import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import HeroSection from "../components/HeroSection";
import ProductSection from "../components/ProductSection";

const Home = ({ productRef }) => {
  const { addToCart } = useContext(CartContext);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="w-full">
      {/* ================= HERO SECTION ================= */}
      <HeroSection />
      {/* ================= FEATURES ================= */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us?</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            {
              title: "Premium Fabric",
              icon: "🧵",
              text: "High-quality microfiber for daily comfort.",
            },
            {
              title: "Fast Delivery",
              icon: "🚚",
              text: "Get products in 3–5 days.",
            },
            {
              title: "Cash on Delivery",
              icon: "💰",
              text: "Pay after receiving your order.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:scale-105 transition"
            >
              <h3 className="text-xl font-bold mb-2">
                {item.icon} {item.title}
              </h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <ProductSection products={products} />

      {/* ================= FOOTER ================= */}
      <footer className="bg-black text-white py-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">
          <div>
            <h3 className="text-xl font-bold">Dibya</h3>
            <p className="text-gray-400">Premium clothing built for comfort.</p>
          </div>

          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <p>Home</p>
            <p>Products</p>
            <p>Cart</p>
          </div>

          <div>
            <h4 className="font-semibold">Contact</h4>
            <p>Email: support@microfiber.com</p>
            <p>Phone: +91 98765 43210</p>
          </div>
        </div>

        <p className="text-center text-gray-500 mt-6">
          © 2026 Dibya. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
