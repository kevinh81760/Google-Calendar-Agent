import React from "react";
import { User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex justify-end px-4 py-4 bg-transparent">
      <a
        href="https://accounts.google.com/signup"
        className="flex items-center gap-4 px-4 py-2 bg-[#DEE2E6] text-gray-700 rounded-full shadow-md hover:bg-[#D3D8DC] transition"
      >
        <User size={20} />
        <span className="-ml-3">Sign in</span>
      </a>
    </nav>
  );
};

export default Navbar;
