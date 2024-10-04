import React, { useState } from "react";

function Cv({cv}) {
    const [showCv, setShowCv] = useState(false)

    const handleBtnClick = () => {
        setShowCv(!showCv);
    }

    return (
        <div>
            <button className="btn" onClick={handleBtnClick}>
                CV
            </button>
            {showCv && (
                <div className="item-div">
                    {cv.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Cv;