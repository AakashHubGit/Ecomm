import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between">
      <h1 className="text-xl font-bold">Divya</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:text-blue-400">
          Home
        </Link>
        <Link to="/" className="hover:text-blue-400">
          Products
        </Link>
        <Link to="/cart" className="hover:text-blue-400">
          Cart
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
