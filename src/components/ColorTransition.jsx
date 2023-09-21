import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

export const ColorTransition = () => {
  const [isClicked, setIsClicked] = useState(false);
  const props = useSpring({
    backgroundColor: isClicked ? "red" : "blue",
  });

  return (
    <animated.button style={props} onClick={() => setIsClicked(!isClicked)}>
      {isClicked ? "Red" : "Blue"} Background
    </animated.button>
  );
};
