import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import Stage from "./Stage";
import Keyboard from "./Keyboard";
import Monitor from "./Monitor";

export default function SceneRoot() {
  const [textToDisplay, setTextToDisplay] = useState("TRISTAN BAD !");

  const handleChildKeyPressed = (language: string) => {
    console.log("Key pressed in child component:", language);
    setTextToDisplay(language);
  };

  return (
    <div className="w-full h-screen">
      <Canvas shadows>
        <Stage />
        <Keyboard callbackToParent={handleChildKeyPressed} />
        <Monitor tv_text={textToDisplay}/>
      </Canvas>
    </div>
  )
}