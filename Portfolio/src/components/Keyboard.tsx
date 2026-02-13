import { useGLTF } from "@react-three/drei"
import { useRef} from "react"
import type {  Mesh } from "three/src/objects/Mesh.js"
import Keycap from "./Keycap"

export default function Keyboard() {
    //MODEL LOADING
    const keyboardFrame = useGLTF('models/KeyboardFrame.glb')
    
    //REFS
    const keyboardFrameRef = useRef<Mesh>(null)

    return (
        <>
            
            <primitive 
                ref={keyboardFrameRef}
                object={keyboardFrame.scene} 
                position={[-0.25, -0.5, -3]}    // [x, y, z]
                rotation={[Math.PI / 6, 0, 0]}  // [x, y, z]
            />

           <Keycap 
                baseKeyposition={[-2.4, 0.34, -3.3]} />
        </>
    )
}


