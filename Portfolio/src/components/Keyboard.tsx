import { useGLTF } from "@react-three/drei"
import { useRef } from "react"
import type { Mesh } from "three/src/objects/Mesh.js"
import Keycap from "./Keycap"
import { Languages } from "../constants/language"

export default function Keyboard(props: { callbackToParent: (language: string) => void }) 
{
    //MODEL LOADING
    const keyboardFrame = useGLTF('models/KeyboardFrame.glb')
    
    //REFS
    const keyboardFrameRef = useRef<Mesh>(null)

    const languagesToMap = Object.values(Languages)

    // ── Keyboard transform (moves the frame and the keycaps) ────
                                                    //  [x ,  y , z]
    const KEYBOARD_POSITION: [number, number, number] = [-1.5, -2.5, -2]
    const KEYBOARD_ROTATION: [number, number, number] = [Math.PI / 50, - Math.PI / 50, 0]
    // ───────────────────────────────────────────────────────────────

    // ── Key grid (offsets relative to keyboard position) ───────────
    const ROWS = 4
    const COLS = 15

    const keySpacingX  = 0.37   // horizontal gap between keys (right/left)
    const keySpacingY  = 0.002  // vertical drop per row
    const keySpacingZ  = 0.38   // depth step per row

    // Top-left key position in keyboard local space
    const gridOriginX  =  3
    const gridOriginY  =  0.6
    const gridOriginZ  =  -0.69
    // ───────────────────────────────────────────────────────────────

    return (
        <group position={KEYBOARD_POSITION} rotation={KEYBOARD_ROTATION}>

            {/*KEYBOARD FRAME*/}
            <primitive 
                ref={keyboardFrameRef}
                object={keyboardFrame.scene}
            />

            {/*KEYCAPS*/}
            {Array.from({ length: ROWS * COLS }, (_, i) => {
                const row = Math.floor(i / COLS)
                const col = i % COLS

                const x = gridOriginX - col * keySpacingX
                const y = gridOriginY - row * keySpacingY
                const z = gridOriginZ + row * keySpacingZ

                return (
                    <Keycap
                        key={i}
                        language={languagesToMap[i]?.name}
                        textureURL={languagesToMap[i]?.url}
                        callbackToParent={props.callbackToParent}
                        baseKeyposition={[x, y, z]}
                    />
                )
            })}

        </group>
    )
}
