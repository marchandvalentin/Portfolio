import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import Stage from "./Stage";
import Keyboard from "./Keyboard";
import Monitor from "./Monitor";
import Desk from "./Desk";
import Tower from "./Tower";
import Mouse from "./Mouse";
import { DEFAULT_PROJECT } from "../constants/projects";
import type { Project } from "../constants/projects";
import { Languages } from "../constants/language";

export default function SceneRoot() {
  const [currentProject, setCurrentProject] = useState<Project>(DEFAULT_PROJECT)

  const handleChildKeyPressed = (language: string) => {
    const proj = Languages[language as keyof typeof Languages].project
    setCurrentProject(proj)
  }

  return (
    <div className="w-full h-screen">
      <Canvas shadows gl={{ alpha: false }} onCreated={({ gl }) => gl.setClearColor('#000000')}>
        <Stage />
        <Keyboard callbackToParent={handleChildKeyPressed} />
        <Monitor project={currentProject}/>
        <Desk/>
        <Tower/>
        <Mouse/>
      </Canvas>
    </div>
  )
}