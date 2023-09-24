import { ColorTransition } from "./components/ColorTransition";
import { FadeIn } from "./components/FadeIn";
import { SlideIn } from "./components/SlideIn";
import { SequenceOfAnimations } from "./components/SequenceOfAnimations";
import { FlipCard } from "./components/FlipCard";

function App() {
  return (
    <div>
      <FadeIn />
      <SlideIn />
      <ColorTransition />
      <SequenceOfAnimations />
      <FlipCard />
    </div>
  );
}

export default App;
