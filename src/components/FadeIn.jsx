import React from "react";
import { useSpring, animated } from "react-spring";

export const FadeIn = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <animated.div style={props}>
      <h1>Welcome to React Animations</h1>
    </animated.div>
  );
};
