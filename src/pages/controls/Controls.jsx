import { OrbitControls, useKeyboardControls } from "@react-three/drei";
import { useEffect } from "react";

const Controls = () => {
  const [sub, get] = useKeyboardControls();

  useEffect(() => {
    return sub(
      (state) => state.escape,
      (pressed) => console.log("escape", pressed)
    );
  });

  return <OrbitControls enableZoom={false} enablePan={true} enableRotate={true} />;
};

export default Controls;
