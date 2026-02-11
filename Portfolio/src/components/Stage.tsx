import { PerspectiveCamera } from "@react-three/drei";

export default function Stage() {
    return (
        <>

            //LIGHTS
            <ambientLight 
                intensity={0.5} />

            <directionalLight 
                position={[5, 5, 5]} 
                intensity={1} />
        
            //CAMERA
            <PerspectiveCamera 
                makeDefault
                position={[0, 0, 5]} 
                fov={40} />
        </>
    )
}