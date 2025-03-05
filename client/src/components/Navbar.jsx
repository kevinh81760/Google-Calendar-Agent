import React, { useState } from "react";
import { User } from "lucide-react";
import { signInWithGoogle, signOutUser } from "../firebase";

const Navbar = () => {
    const [user, setUser] = useState(null);

    const handleSignIn = async () => {
        const userData = await signInWithGoogle();
        setUser(userData);
    };

    const handleSignOut = async () => {
        await signOutUser();
        setUser(null);
    };

    return (
        <nav className="flex justify-end px-4 py-4 bg-transparent">
            {user ? (
                <button
                    onClick={handleSignOut}
                    className="flex items-center gap-4 px-4 py-2 bg-[#DEE2E6] text-gray-700 rounded-full shadow-md hover:bg-[#D3D8DC] transition"
                >
                    <User size={20} />
                    <span className="-ml-3">Sign Out</span>
                </button>
            ) : (
                <button
                    onClick={handleSignIn}
                    className="flex items-center gap-4 px-4 py-2 bg-[#DEE2E6] text-gray-700 rounded-full shadow-md hover:bg-[#D3D8DC] transition"
                >
                    <User size={20} />
                    <span className="-ml-3">Sign in</span>
                </button>
            )}
        </nav>
    );
};

export default Navbar;
