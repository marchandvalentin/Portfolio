import { useGLTF } from "@react-three/drei"
import { useRef } from "react"
import type { Mesh } from "three/src/objects/Mesh.js"
import Keycap from "./Keycap"
import { Language } from "../constants/language"

export default function Keyboard() {
    //MODEL LOADING
    const keyboardFrame = useGLTF('models/KeyBoardFrame.glb')
    
    //REFS
    const keyboardFrameRef = useRef<Mesh>(null)

    let allKeysIndex = 0; // This index is used to keep track of the current key index across rows
    
    const spacingInBetweenKeys = 0.37
    
    //to position the keys
    const keys = {
        positions: Array.from({ length: 15 }, (_, i) => [0 - (i * spacingInBetweenKeys) + 2.75, 0.3, -0.325]) // Example positions for 10 keys
    }

    const languagesToMap = Object.values(Language) // Extract language objects as array

    return (
        <>
            {
                ///KEYBOARD///
            }
            <primitive 
                ref={keyboardFrameRef}
                object={keyboardFrame.scene} 
                position={[-0.25, -0.5, -3]}    // [x, y, z]
                rotation={[Math.PI / 6, 0, 0]}  // [x, y, z]
            />

            {
                ///KEYCAPS///
            
             /*instantiate keycaps based on positions*/}

            {/*Row 1*/}
            {keys.positions.map((position, _) => {
                const currentIndex = allKeysIndex++;
                return (
                    <Keycap
                        language={languagesToMap[currentIndex]?.name} 
                        textureURL={languagesToMap[currentIndex]?.url}
                        key={currentIndex}
                        baseKeyposition={[position[0], position[1], position[2] - 3]} 
                    />
                );
            })}

            {/*Row 2*/}
            {keys.positions.map((position, _) => {
                const currentIndex = allKeysIndex++;
                return (
                    <Keycap
                        language={languagesToMap[currentIndex]?.name} 
                        textureURL={languagesToMap[currentIndex]?.url}
                        key={currentIndex}
                        baseKeyposition={[position[0], position[1]-0.175, position[2] - 2.68]} 
                    />
                );
            })}

            {/*Row 3*/}
            {keys.positions.map((position, _) => {
                const currentIndex = allKeysIndex++;
                return (
                    <Keycap
                        language={languagesToMap[currentIndex]?.name} 
                        textureURL={languagesToMap[currentIndex]?.url}
                        key={currentIndex}
                        baseKeyposition={[position[0], position[1]-0.35, position[2] - 2.36]} 
                    />
                );
            })}

            {/*Row 4*/}
            {keys.positions.map((position, _) => {
                const currentIndex = allKeysIndex++;
                return (
                    <Keycap
                        language={languagesToMap[currentIndex]?.name} 
                        textureURL={languagesToMap[currentIndex]?.url}
                        key={currentIndex}
                        baseKeyposition={[position[0], position[1]-0.525, position[2] - 2.04]} 
                    />
                );
            })}
            
        </>
    )
}

function debugKey(index: number, language: any) {
    console.log(`Key at index ${index} has language: ${language?.name}, textureURL: ${language?.url}`);
}