import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

export default function Stage() {
    return (
        <>

            //CAMERA
            <PerspectiveCamera 
                makeDefault
                position={[-0.5, 2.5, 4.5]} 
                rotation={[-Math.PI/10, -Math.PI / 17, 0, 'YXZ']}
                fov={50} />

            //DEBUG HELPER
            {/*<OrbitControls makeDefault/>*/}
        </>
    )
}