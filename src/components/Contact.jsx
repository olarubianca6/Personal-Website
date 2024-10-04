import React, { useState } from "react";

function Contact({contact}) {
    const [showContact, setShowContact] = useState(false)

    const handleBtnClick = () => {
        setShowContact(!showContact);
    }

    return (
        <div>
            <button className="btn" onClick={handleBtnClick}>
                Contact
            </button>
            {showContact && (
                <div className="item-div">
                    {contact.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Contact;