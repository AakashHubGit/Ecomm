import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/admin/login`,
        form
      );

      localStorage.setItem("token", res.data.token);
      navigate("/admin");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Admin Login</h2>

      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button onClick={login}>Login</button>
    </div>
  );
};

export default AdminLogin;
