import React, { useState } from "react";
import img1 from "../../../assets/frame10.svg";
import img2 from "../../../assets/frame11.svg";

export const Card = () => {
  const [activeCard, setActiveCard] = useState(false);

  const handleFlip = () => {
    setActiveCard(!activeCard);
  };
  return (
    <>
      <div className="border">
        <div
          onClick={handleFlip}
          className={`relative w-60 h-96 border card ${
            activeCard ? "cardFlip" : ""
          }`}
        >
          {/* front */}
          <div className="front">
            <img src={img2} alt="image" className="w-60 h-96" />
          </div>

          {/* back */}
          <div className="absolute top-0 back">
            <img src={img1} alt="image" className="w-60 h-96" />
          </div>
        </div>
      </div>
    </>
  );
};
