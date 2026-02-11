import { useGLTF } from "@react-three/drei"

export default function Keyboard() {
    const keyboardFrame = useGLTF('models/KeyboardFrame.glb')

    return (
        <primitive 
          object={keyboardFrame.scene} 
          position={[-0.25, -0.5, -3]}    // [x, y, z]
          rotation={[Math.PI / 6, 0, 0]}  // [x, y, z]
        />
    )
}