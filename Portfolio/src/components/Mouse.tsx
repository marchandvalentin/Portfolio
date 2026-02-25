import { useGLTF } from '@react-three/drei'

export default function Mouse() {

    const mouse = useGLTF('models/mouse.glb')
 
    return (
        <primitive
            object={mouse.scene} 
            position={[3.5, -2.1, -2.5]} 
            rotation={[0, Math.PI / 2.5, 0]}
            scale={0.5}
        />
    )
}