import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Chatbox from "../components/Chatbox";
import { motion } from "framer-motion";

const Home = () => {
    const [hasFaded, setHasFaded] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false); // Controls fade-in on load

    // Fade-in effect when the website loads
    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 175); // Small delay to smooth transition
    }, []);

    return (
        <div className="w-full min-h-screen h-full bg-gradient-to-b from-[#343A40] via-[#495057] to-[#8796A6]">
            <Navbar />

            {/* Animated Text (Fades in on load, fades out on Settings click) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoaded ? (hasFaded ? 0 : 1) : 0 }}
                transition={{ duration: hasFaded ? 0.2 : 1.2 }} // 0.8s fade-in, 0.2s fade-out
                className="text-center"
            >
                <h1 className="text-[44px] text-[#DEE2E6] font-light mt-40 tracking-wide">
                    Welcome to Jiggy.
                </h1>
                <h2 className="text-[41px] text-[#DEE2E6] font-light -mt-3 tracking-wide">
                    How can I help you today?
                </h2>
            </motion.div>

            {/* Chatbox with Settings Icon Controlling the Effect */}
            <div className="flex justify-center w-full mt-6">
                <Chatbox setHasFaded={setHasFaded} />
            </div>
        </div>
    );
};

export default Home;
