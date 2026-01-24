import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductSection = ({ products }) => {
  const { addToCart } = useContext(CartContext);

  const [selected, setSelected] = useState(null);
  const [qty, setQty] = useState(1);

  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">
        Our Best Products
      </h2>

      {/* PRODUCT GRID */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((p) => (
          <div
            key={p._id}
            onClick={() => {
              setSelected(p);
              setQty(1);
            }}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition cursor-pointer group"
          >
            <div className="overflow-hidden">
              <img
                src={p.image}
                alt={p.name}
                className="h-64 w-full object-cover group-hover:scale-110 transition"
              />
            </div>

            <div className="p-4">
              <h3 className="text-lg font-bold">{p.name}</h3>
              <p className="text-gray-600 mt-1">₹{p.price}</p>

              <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* PRODUCT MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl w-[400px] relative">
            <button
              className="absolute top-3 right-4 text-xl"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>

            <img
              src={selected.image}
              className="h-56 w-full object-cover rounded"
            />

            <h2 className="text-xl font-bold mt-4">{selected.name}</h2>
            <p className="text-gray-600 mt-2">{selected.description}</p>

            <div className="flex items-center gap-4 mt-4">
              <button
                className="px-3 py-1 border"
                onClick={() => qty > 1 && setQty(qty - 1)}
              >
                -
              </button>

              <span className="font-semibold">{qty}</span>

              <button
                className="px-3 py-1 border"
                onClick={() => setQty(qty + 1)}
              >
                +
              </button>
            </div>

            <button
              className="mt-5 w-full bg-black text-white py-2 rounded"
              onClick={() => {
                addToCart(selected, qty);
                alert("Added to cart");
                setSelected(null);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductSection;
