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
      .get(`${import.meta.env.VITE_API_URL}/api/products`)
      .then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="w-full">
      {/* ================= HERO SECTION ================= */}
      <HeroSection />
      {/* ================= FEATURES ================= */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Divya?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            {
              title: "Industrial Grade Products",
              icon: "🏭",
              text: "High-quality lint-free wipes, gloves & safety consumables for industries.",
            },
            {
              title: "Bulk & Wholesale Supply",
              icon: "📦",
              text: "Competitive pricing for bulk orders and long-term business needs.",
            },
            {
              title: "Trusted Local Supplier",
              icon: "🤝",
              text: "Serving Baddi industrial hub with reliable and timely delivery.",
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
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">About Divya</h2>
            <p className="text-gray-600 mb-4">
              Divya is a trusted wholesale supplier based in
              <strong> Baddi, Himachal Pradesh</strong>, serving industrial
              units, pharma companies, manufacturing plants, and service
              providers.
            </p>
            <p className="text-gray-600">
              We specialize in industrial housekeeping materials, safety
              products, lint-free wipes, gloves, and cleanroom consumables —
              ensuring quality, consistency, and timely delivery.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3">Industries We Serve</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✔ Pharmaceutical Units</li>
              <li>✔ Manufacturing Plants</li>
              <li>✔ Cleanrooms & Labs</li>
              <li>✔ Industrial Housekeeping</li>
              <li>✔ Packaging & Safety Operations</li>
            </ul>
          </div>
        </div>
      </section>
      {/* ================= FOOTER ================= */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-2">Divya</h3>
            <p className="text-gray-400">
              Wholesale supplier of industrial, safety & housekeeping products
              in Baddi.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-2">Contact Us</h4>
            <p className="text-gray-400">
              📍 Shop No. 3, Near Cipla Colony,
              <br />
              Chakka Road, Baddi (HP) – 173205
            </p>
            <p className="text-gray-400 mt-2">📞 +91 98051 72999</p>
            <p className="text-gray-400">✉ support@jptradersbaddi.com</p>
          </div>

          {/* Business */}
          <div>
            <h4 className="font-semibold mb-2">Business Hours</h4>
            <p className="text-gray-400">Mon – Sat: 9:00 AM – 7:00 PM</p>
            <p className="text-gray-400">Wholesale & Bulk Orders Available</p>
          </div>
        </div>

        <p className="text-center text-gray-500 mt-8">
          © {new Date().getFullYear()} Divya, Baddi. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
