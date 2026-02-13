import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

export default function Stage() {
    return (
        <>

            //LIGHTS
            <ambientLight 
                intensity={1} />

            <directionalLight 
                position={[0, 5, 5]} 
                intensity={2} />
        
            //CAMERA
            <PerspectiveCamera 
                makeDefault
                position={[0, 0, 5]} 
                fov={40} />

            //DEBUG HELPER

            <OrbitControls makeDefault/>
        </>
    )
}