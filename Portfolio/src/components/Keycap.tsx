import { Clone, useGLTF, useTexture } from "@react-three/drei"
import { useEffect, useRef, useState } from "react"
import { animated, useSpring } from "@react-spring/three"
import { MeshStandardMaterial, SRGBColorSpace } from "three"
import type { Group } from "three/examples/jsm/libs/tween.module.js"

export default function Keycap(props: {
    baseKeyposition: [number, number, number], 
    language?: string,
    textureURL?: string,
    callbackToParent: (language: string) => void
    }) {

    //attributes
    const def_language = props.language ? props.language : "default" // Default label if language is not provided

    //model loading
    const keycaps = useGLTF('models/KeyCap.glb')
    const keycapRef = useRef<Group>(null)
    

    //texture loading, if there is no link then it loads a white base texture 
    //console.log(`Loading texture for language: ${def_language}, URL: ${props.textureURL}, texture ?: ${props.textureURL ? "Yes" : "No"}`)
    const textureUrl = props.textureURL ? props.textureURL : "Textures/base_texture.png"
    const texture = useTexture(textureUrl)

    // Appliying texture to the keycap model
    useEffect(() => {
        if (keycapRef.current && texture) {
            texture.colorSpace = SRGBColorSpace
            texture.needsUpdate = true
            keycapRef.current.traverse((child: any) => {
                if (child.isMesh) {
                    const material = new MeshStandardMaterial({
                        map: texture,
                        emissive: 0xffffff,
                        emissiveIntensity: 0,
                    })
                    material.color.setHex(0xffffff)
                    material.toneMapped = false
                    child.material = material
                    child.castShadow = true
                    child.receiveShadow = true
                }
            })
        }
    }, [texture])

    //Calculating highKey position based on base position
    const keyHeightOnHover = 0.1
    const highKeyPosition: [number, number, number] = 
    [ props.baseKeyposition[0], 
      props.baseKeyposition[1] + keyHeightOnHover, 
      props.baseKeyposition[2] + keyHeightOnHover]

    //Animation
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
                    e.stopPropagation() 
                    setKeyHovered(true)
                }}
                onPointerOut={() => setKeyHovered(false)}
                onClick={(e) => {
                    e.stopPropagation()
                    props.callbackToParent(def_language) // Call the parent callback with the language
                }}
            >
                <Clone object={keycaps.scene} />
            </animated.group>
        </>
    )
}