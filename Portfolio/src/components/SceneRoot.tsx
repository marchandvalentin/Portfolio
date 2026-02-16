import { Canvas } from "@react-three/fiber";
import Stage from "./Stage";
import TV from "./TV";
import Keyboard from "./Keyboard";

export default function SceneRoot() {
  return (
    <div className="w-full h-screen">
      <Canvas shadows>
        <Stage />
        <TV />
        <Keyboard />
      </Canvas>
    </div>
  )
}