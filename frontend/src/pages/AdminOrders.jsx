import { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "./AdminLayout";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/orders`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
          },
        },
      );
      setOrders(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/api/orders/${id}`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
          },
        },
      );
      fetchOrders();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AdminLayout>
      <div>
        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Orders</h1>
          <p className="text-gray-500">
            Manage customer orders and delivery status
          </p>
        </div>

        {/* EMPTY STATE */}
        {orders.length === 0 && (
          <div className="bg-white p-10 rounded-xl shadow text-center">
            <p className="text-gray-500">No orders yet.</p>
          </div>
        )}

        {/* ORDERS */}
        <div className="space-y-6">
          {orders.map((o) => (
            <div
              key={o._id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-6"
            >
              {/* ORDER HEADER */}
              <div className="flex flex-wrap justify-between items-center mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{o.customerName}</h3>
                  <p className="text-sm text-gray-500">
                    {o.phone} • {o.address}
                  </p>
                </div>

                <span
                  className={`px-4 py-1 rounded-full text-sm font-semibold ${
                    o.status === "Pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : o.status === "Shipped"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-green-100 text-green-700"
                  }`}
                >
                  {o.status}
                </span>
              </div>

              {/* PRODUCTS TABLE */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="p-3 text-left">Product</th>
                      <th className="p-3 text-left">Price</th>
                      <th className="p-3 text-left">Qty</th>
                      <th className="p-3 text-left">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {o.products.map((p, i) => (
                      <tr key={i} className="border-b">
                        <td className="p-3">{p.name}</td>
                        <td className="p-3">₹{p.price}</td>
                        <td className="p-3">{p.quantity}</td>
                        <td className="p-3 font-semibold">
                          ₹{p.price * p.quantity}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* ACTIONS */}
              <div className="flex gap-3 mt-4">
                {o.status === "Pending" && (
                  <button
                    onClick={() => updateStatus(o._id, "Shipped")}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Mark Shipped
                  </button>
                )}

                {o.status !== "Delivered" && (
                  <button
                    onClick={() => updateStatus(o._id, "Delivered")}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                  >
                    Mark Delivered
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminOrders;
