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
          {contact.map((item, index) => {
            if (item.trim() === '') return <br key={index} />;
            const [key, value] = item.split(': ');
            const isLink = value.startsWith('http');
            return (
              <div key={index}>
                <strong>{key}:</strong>{' '}
                {isLink ? (
                  <a href={value} target="_blank" rel="noopener noreferrer">
                    {value}
                  </a>
                ) : (
                  value
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Contact;