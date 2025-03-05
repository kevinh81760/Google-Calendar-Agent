import React, { useState } from "react";
import { Mic, Settings } from "lucide-react";
import { motion } from "framer-motion";

const ChatInput = ({ setHasFaded }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");

    // Function to handle Settings click
    const handleSettingsClick = () => {
        if (!isOpen) {
            setIsOpen(true);
            setHasFaded(true); // Fades the text in Home.js
        }

        // Clear the input box ONLY if the user typed something
        if (inputValue.trim() !== "") {
            setInputValue(""); // Clears the textarea
        }
    };

    return (
        <motion.div
            initial={{ y: 0 }}
            animate={{ y: isOpen ? 225 : 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="w-[800px] h-[150px] rounded-2xl mt-12 bg-[#D3D8DC] flex flex-col p-4"
        >
            {/* Scrollable Input Container */}
            <div className="flex-1 overflow-y-auto max-h-[100px] mt-[-5px]">
                <textarea
                    type="text"
                    placeholder="How can I help assist your schedule?"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="w-full h-auto min-h-[200px] max-h-[100px] border-none outline-none text-gray-700 placeholder-gray-500 bg-[#D3D8DC] rounded-lg p-2 resize-none"
                />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 justify-end relative top-2">
                <div className="p-2 rounded-full bg-gray-300 hover:bg-[#c8cbcb] cursor-pointer">
                    <Mic size={30} strokeWidth={1.5} className="text-gray-700" />
                </div>

                <div
                    className="p-2 rounded-full bg-gray-300 hover:bg-[#c8cbcb] cursor-pointer"
                    onClick={handleSettingsClick} // Attach function to Settings button
                >
                    <Settings size={30} strokeWidth={1.5} className="text-gray-700" />
                </div>
            </div>
        </motion.div>
    );
};

export default ChatInput;
