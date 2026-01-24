import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingBag, Users, Package, IndianRupee } from "lucide-react";
import AdminLayout from "./AdminLayout";

const Admin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) navigate("/admin/login");
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  // Dummy data
  const stats = [
    {
      title: "Total Orders",
      value: "1,245",
      icon: <ShoppingBag />,
    },
    {
      title: "Total Products",
      value: "120",
      icon: <Package />,
    },
    {
      title: "Customers",
      value: "860",
      icon: <Users />,
    },
    {
      title: "Revenue",
      value: "₹4,85,000",
      icon: <IndianRupee />,
    },
  ];

  const recentOrders = [
    { id: "#ORD1021", name: "Akash", total: "₹1,499", status: "Delivered" },
    { id: "#ORD1022", name: "Rahul", total: "₹2,199", status: "Pending" },
    { id: "#ORD1023", name: "Sneha", total: "₹999", status: "Cancelled" },
  ];

  return (
    <AdminLayout>
      <div className="flex min-h-screen bg-gray-100">
        {/* MAIN CONTENT */}
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>

          {/* STATS */}
          <div className="grid md:grid-cols-4 gap-6 mb-10">
            {stats.map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow flex items-center justify-between"
              >
                <div>
                  <p className="text-gray-500">{item.title}</p>
                  <h3 className="text-2xl font-bold">{item.value}</h3>
                </div>
                <div className="bg-black text-white p-3 rounded-full">
                  {item.icon}
                </div>
              </div>
            ))}
          </div>

          {/* RECENT ORDERS */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold mb-4">Recent Orders</h2>

            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="py-2">Order ID</th>
                  <th>Customer</th>
                  <th>Total</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {recentOrders.map((order, i) => (
                  <tr key={i} className="border-b text-sm">
                    <td className="py-2">{order.id}</td>
                    <td>{order.name}</td>
                    <td>{order.total}</td>
                    <td>
                      <span
                        className={`px-3 py-1 rounded-full text-xs ${
                          order.status === "Delivered"
                            ? "bg-green-100 text-green-700"
                            : order.status === "Pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </AdminLayout>
  );
};

export default Admin;
