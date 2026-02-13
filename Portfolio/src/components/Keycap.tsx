import { useGLTF } from "@react-three/drei"
import { useRef, useState } from "react"
import { animated, useSpring } from "@react-spring/three"
import type { Group } from "three/examples/jsm/libs/tween.module.js"

export default function Keycap(props: {baseKeyposition: [number, number, number]}) {

    //model loading
    const keycaps = useGLTF('models/KeyCap.glb')
    const keycapRef = useRef<Group>(null)

    //animation
    const [keyHovered, setKeyHovered] = useState(false)

    //Calculating highKey position based on base position
    const keyHeightOnHover = 0.08
    const highKeyPosition: [number, number, number] = [ props.baseKeyposition[0], 
                                                        props.baseKeyposition[1] + keyHeightOnHover, 
                                                        props.baseKeyposition[2]]

    const { position } = useSpring<{ position: [number, number, number] }>({
        position: keyHovered ? highKeyPosition : props.baseKeyposition,
        config: { mass: 1, tension: 180, friction: 20 },
    })

    return (
        <>
         <animated.group
                ref={keycapRef}
                position={position}  
                rotation={[Math.PI / 6, 0, 0]}  // [x, y, z]

                onPointerOver={() => setKeyHovered(true)}
                onPointerOut={() => setKeyHovered(false)}
                onClick={(e) => onKeyClick(e)}
            >
                <primitive object={keycaps.scene} />
            </animated.group>
        </>
    )
}

function onKeyClick(e: any) {
    console.log("Key clicked:", e.object.name)
}