import React from "react"
import "..styles/ChatInput.css"

const ChatInput = () => {

    const handleMicClick = () => {
        console.log("Microphone button clicked!")
    }
    return (
        <div className="chat-input">
            <textarea 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How can I help assist your schedule?"
                rows="1"
            />
            <div className="icons">
                <button className="icon-button" onClick={handleMicClick}>

                </button>
            </div>
        </div>

    )
}