import { useGLTF } from '@react-three/drei'

export default function Desk() {

    const desk = useGLTF('models/desk.glb')

    return (
        <primitive object={desk.scene} scale={2} position={[1.6, -8.3, -4]} rotation={[0, Math.PI / 2, 0]} />
    )
}
