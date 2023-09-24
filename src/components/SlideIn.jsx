import React from "react";
import { useSpring, animated } from "react-spring";

export const SlideIn = () => {
  const props = useSpring({
    from: { marginLeft: -500 },
    to: { marginLeft: 0 },
  });

  return (
    <animated.div style={props}>
      <h1>Slide-In Animation</h1>
    </animated.div>
  );
};
