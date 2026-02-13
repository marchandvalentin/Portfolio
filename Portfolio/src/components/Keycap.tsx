import { Clone, useGLTF } from "@react-three/drei"
import { useRef, useState } from "react"
import { animated, useSpring } from "@react-spring/three"
import type { Group } from "three/examples/jsm/libs/tween.module.js"

export default function Keycap(props: {baseKeyposition: [number, number, number], language?: string}) {

    //attributes
    const label = props.language ? props.language : "default" // Default label if language is not provided

    //model loading
    const keycaps = useGLTF('models/KeyCap.glb')
    const keycapRef = useRef<Group>(null)
    

    //Calculating highKey position based on base position
    const keyHeightOnHover = 0.1
    const highKeyPosition: [number, number, number] = 
    [ props.baseKeyposition[0], 
      props.baseKeyposition[1] + keyHeightOnHover, 
      props.baseKeyposition[2] + keyHeightOnHover]

    //animation
    const [keyHovered, setKeyHovered] = useState(false)

    const { position } = useSpring<{ position: [number, number, number] }>({
        position: keyHovered ? highKeyPosition : props.baseKeyposition,
        config: { mass: 0.5, tension: 180, friction: 20 },
    })

    return (
        <>
         <animated.group
                ref={keycapRef}
                position={position}  
                rotation={[Math.PI / 6, 0, 0]}  // [x, y, z]

                onPointerOver={(e) => {
                    e.stopPropagation(), 
                    setKeyHovered(true)
                }}
                onPointerOut={() => setKeyHovered(false)}
                onClick={(e) => onKeyClick(e)}
            >
                <Clone object={keycaps.scene} />
            </animated.group>
        </>
    )
}

function onKeyClick(e: any) {
    console.log("Key clicked:", e.object.name)
}