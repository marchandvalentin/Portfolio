// This component was originally used but 
// the animation was bugging with the need to scale the lamp so i didn't use it.

import { useGLTF, useAnimations } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import { DoubleSide, Group } from 'three'

export default function LavaLamp() {
    
    const lavaLampModel = useGLTF('models/lava_lamp_alembic.glb')
    const groupRef = useRef<Group>(null)
    const { actions, names } = useAnimations(lavaLampModel.animations, groupRef)

    // Materials — run once on mount only
    useEffect(() => {
        lavaLampModel.scene.traverse((child: any) => {
            if (child.isMesh) {
                const materials = Array.isArray(child.material) ? child.material : [child.material]
                materials.forEach((mat: any) => {
                    mat.side = DoubleSide
                    mat.depthWrite = true
                    if (child.name.toLowerCase().includes('glass') || child.name.toLowerCase().includes('cylinder')) {
                        mat.transparent = true
                        mat.opacity = 0.25
                    } else {
                        mat.transparent = false
                        mat.opacity = 1
                    }
                    mat.needsUpdate = true
                })
            }
        })
    }, [])

    // Animation — play once when actions are ready
    useEffect(() => {
        if (names.length > 0 && actions[names[0]]) {
            actions[names[0]]!.reset().play()
        }
    }, [actions, names])

    return (
        <group
            ref={groupRef}
            position={[-2.2, -0.65, -2.6]}
            rotation={[Math.PI / 75, 0, 0]}
            scale={0.02}
        >
            <primitive object={lavaLampModel.scene} />
        </group>
    )
}