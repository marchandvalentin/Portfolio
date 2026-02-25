import { useGLTF } from '@react-three/drei'

export default function Tower() {
    
    const towerModel = useGLTF('models/computer_tower.glb')

    return (
        <primitive object={towerModel.scene} 
            position={[8.5, -2.2, -2]}  
            scale={2.2} 
        />
    )
}