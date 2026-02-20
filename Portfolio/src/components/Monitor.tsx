import { CanvasTexture, DoubleSide, Mesh } from 'three'
import { useGLTF } from '@react-three/drei'
import { useEffect, useRef } from 'react'

export default function Monitor(props: { tv_text: string }) {
    const monitorModel = useGLTF('models/curved_monitor.glb')

    const monitorModelRef = useRef<Mesh>(null)
    const meshRef = useRef(null);
    
    {/*Applying curvature to the canvas/screen */}
    useEffect(() => {
        if (meshRef.current) {
            const geometry = meshRef.current.geometry;
            const positions = geometry.attributes.position.array;
            
            // Curve the plane like an angled monitor
            for (let i = 0; i < positions.length; i += 3) {
                const x = positions[i];
                const y = positions[i + 1];
                const z = positions[i + 2];
                
                // Apply horizontal curvature (X axis) - curves outward like a monitor
                const normalizedX = x / 2.8; // normalize to roughly -1 to 1
                const curve = (normalizedX * normalizedX) * 0.1; // Curve strength
                
                positions[i] = x;
                positions[i + 1] = y;
                positions[i + 2] = z + curve;
            }
            
            geometry.attributes.position.needsUpdate = true;
            geometry.computeVertexNormals();
        }
    }, []);

    return (
        <>
            <primitive
                ref={monitorModelRef}
                object={monitorModel.scene} 
                position={[0, -2, -7]}    // [x, y, z]
                rotation={[0, -Math.PI / 2, 0]}  // [x, y, z]
                scale={[65, 65, 65]}
            />

            <mesh ref={meshRef} position={[0, 1.15, -6.2]} rotation={[-Math.PI / 26.08, 0,0 ]}> {/* Slightly in front of screen */}
                <planeGeometry args={[9.7, 4.73, 32, 16]} /> {/* Adjust size to match TV screen */}
                <meshStandardMaterial 
                    map={createTextTexture(props.tv_text)} 
                    emissive="#FFFFFF"
                    emissiveIntensity={0.5}
                    transparent
                    side={DoubleSide}
                />
            </mesh>
    </>
    )
}

//helper function to generate a canvas texture with text
function createTextTexture(text: string) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  ctx.fillStyle = '#00FF00'; // Classic CRT green
  ctx.font = 'bold 48px monospace';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);
  
  const texture = new CanvasTexture(canvas);
  return texture;
}