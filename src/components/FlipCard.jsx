import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "./flipcard.css";

export const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Define the spring animations for front and back of the card
  const frontCardProps = useSpring({
    transform: `perspective(1000px) rotateY(${isFlipped ? 180 : 0}deg)`,
  });

  const backCardProps = useSpring({
    transform: `perspective(1000px) rotateY(${isFlipped ? 0 : -180}deg)`,
  });

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flip-card-container" onClick={handleCardClick}>
      <animated.div className={`flip-card flip-card-front ${isFlipped ? "hidden" : ""}`} style={frontCardProps}>
        <div className="flip-card-content">
          <h2>Front Side</h2>
        </div>
      </animated.div>
      <animated.div className={`flip-card flip-card-back ${isFlipped ? "" : "hidden"}`} style={backCardProps}>
        <div className="flip-card-content">
          <h2>Back Side</h2>
        </div>
      </animated.div>
    </div>
  );
};
