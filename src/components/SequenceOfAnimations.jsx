import React from "react";
import { useSpring, animated, config } from "react-spring";

export const SequenceOfAnimations = () => {
  const animation1 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config.slow,
  });

  const animation2 = useSpring({
    from: { marginLeft: -100 },
    to: { marginLeft: 0 },
    config: config.default,
  });

  const animation3 = useSpring({
    from: { scale: 0.5 },
    to: { scale: 1 },
    config: config.fast,
  });

  return (
    <div>
      <animated.h1 style={animation1}>Animation 1</animated.h1>
      <animated.p style={animation2}>Animation 2</animated.p>
      <animated.button style={animation3}>Animation 3</animated.button>
    </div>
  );
};
