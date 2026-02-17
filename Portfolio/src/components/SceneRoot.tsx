import { Canvas } from "@react-three/fiber";
import Stage from "./Stage";
import Keyboard from "./Keyboard";
import OldTv from "./OldTv";

export default function SceneRoot() {
  return (
    <div className="w-full h-screen">
      <Canvas shadows>
        <Stage />
        <Keyboard />
        <OldTv />
      </Canvas>
    </div>
  )
}