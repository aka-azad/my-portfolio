import { FaBars } from "react-icons/fa";

function TestNavbar() {
  return (
    <div className="navbar bg-gray-800 p-4">
      <div className="lg:hidden bg-blue-500 text-white p-2">
        <FaBars />
      </div>
      <div className="hidden lg:block bg-red-500 text-white p-2">
        Large Screen
      </div>
    </div>
  );
}

export default TestNavbar;
