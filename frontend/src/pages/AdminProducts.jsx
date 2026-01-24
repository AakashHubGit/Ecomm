import { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "./AdminLayout";
import { Plus, Pencil, Trash2 } from "lucide-react";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    stock: "",
  });

  const token = localStorage.getItem("adminToken");

  const fetchProducts = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/products`);
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const openModal = (product = null) => {
    if (product) {
      setEditing(product);
      setForm(product);
    } else {
      setEditing(null);
      setForm({
        name: "",
        description: "",
        price: "",
        image: "",
        stock: "",
      });
    }
    setModalOpen(true);
  };

  const handleSubmit = async () => {
    try {
      if (editing) {
        await axios.put(
          `${import.meta.env.VITE_API_URL}/api/products/${editing._id}`,
          form,
          { headers: { Authorization: `Bearer ${token}` } },
        );
      } else {
        await axios.post(`${import.meta.env.VITE_API_URL}/api/products`, form, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }
      setModalOpen(false);
      fetchProducts();
    } catch {
      alert("Error saving product");
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this product?")) return;

    await axios.delete(`${import.meta.env.VITE_API_URL}/api/products/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    fetchProducts();
  };

  return (
    <AdminLayout>
      <div>
        {/* HEADER */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Products</h1>
            <p className="text-gray-500">Manage store products</p>
          </div>

          <button
            onClick={() => openModal()}
            className="bg-black text-white px-5 py-2 rounded-lg flex items-center gap-2"
          >
            <Plus size={18} /> Add Product
          </button>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div
              key={p._id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={p.image}
                className="h-44 w-full object-cover rounded-t-xl"
              />

              <div className="p-4">
                <h3 className="font-semibold text-lg">{p.name}</h3>
                <p className="text-sm text-gray-500 line-clamp-2">
                  {p.description}
                </p>

                <div className="flex justify-between items-center mt-3">
                  <span className="font-bold">₹{p.price}</span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                    Stock: {p.stock}
                  </span>
                </div>

                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => openModal(p)}
                    className="flex-1 bg-blue-600 text-white py-1.5 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(p._id)}
                    className="flex-1 bg-red-600 text-white py-1.5 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {modalOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white w-[95%] max-w-lg p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">
                {editing ? "Edit Product" : "Add Product"}
              </h2>

              <input
                className="w-full border p-2 mb-2"
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />

              <input
                className="w-full border p-2 mb-2"
                placeholder="Description"
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
              />

              <input
                className="w-full border p-2 mb-2"
                placeholder="Price"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
              />

              <input
                className="w-full border p-2 mb-2"
                placeholder="Image URL"
                value={form.image}
                onChange={(e) => setForm({ ...form, image: e.target.value })}
              />

              <input
                className="w-full border p-2 mb-4"
                placeholder="Stock"
                value={form.stock}
                onChange={(e) => setForm({ ...form, stock: e.target.value })}
              />

              <button
                onClick={handleSubmit}
                className="w-full bg-black text-white py-2 rounded"
              >
                {editing ? "Update" : "Add"}
              </button>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminProducts;
