import React from "react";
import "../styles/home.jsx"
import Navbar from "../components/Navbar";
import ChatInput from "..components/ChatInput"


const Home = () => {
    return (
        <div>
            <Navbar />
            <h1>Welcome to Jiggy.</h1>
            <h2>How can I help you today?</h2>
            <ChatInput />
        </div>
    )
}

export default Home;