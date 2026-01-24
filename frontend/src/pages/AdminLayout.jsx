import { useNavigate } from "react-router-dom";

const AdminLayout = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* SIDEBAR */}
      <aside className="w-64 bg-black text-white p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>

        <button
          onClick={() => navigate("/admin")}
          className="text-left mb-3 hover:text-gray-300"
        >
          Dashboard
        </button>

        <button
          onClick={() => navigate("/admin/products")}
          className="text-left mb-3 hover:text-gray-300"
        >
          Products
        </button>

        <button
          onClick={() => navigate("/admin/orders")}
          className="text-left mb-3 hover:text-gray-300"
        >
          Orders
        </button>

        <button
          onClick={handleLogout}
          className="mt-auto text-left text-red-400 hover:text-red-500"
        >
          Logout
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
};

export default AdminLayout;
