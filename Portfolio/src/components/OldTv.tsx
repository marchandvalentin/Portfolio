import { Mesh } from 'three'
import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'

export default function OldTv() {
    const tvModel = useGLTF('models/oldTv.glb')

    const tvModelRef = useRef<Mesh>(null)

    return (
        <primitive 
                ref={tvModelRef}
                object={tvModel.scene} 
                position={[0, -1, -5.5]}    // [x, y, z]
                rotation={[0, -Math.PI / 2, 0]}  // [x, y, z]
                scale={[1.5, 1.5, 1.5]}
            />
    )
}