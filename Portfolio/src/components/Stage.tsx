import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

export default function Stage() {
    return (
        <>

            //LIGHTS
            <ambientLight 
                intensity={0.25} />

            <directionalLight 
                position={[0, 10, 10]} 
                intensity={2}
                castShadow
                shadow-mapSize={[1024, 1024]} />
        
            //CAMERA
            <PerspectiveCamera 
                makeDefault
                position={[0, 0, 3]} 
                fov={50} />

            //DEBUG HELPER

            <OrbitControls makeDefault/>
        </>
    )
}