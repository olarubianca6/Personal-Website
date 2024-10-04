import React, { useState } from "react";

function About({about}) {
    const [showAbout, setShowAbout] = useState(false)

    const handleBtnClick = () => {
        setShowAbout(!showAbout);
    }

    return (
        <div>
            <button className="btn" onClick={handleBtnClick}>
                About
            </button>
            {showAbout && (
                <div className="item-div">
                    {about.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default About;