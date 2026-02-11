import { Canvas } from '@react-three/fiber'
import './App.css'

export default function App() {

  return (
    <>
      <Canvas>
        <mesh>
          <torusKnotGeometry args={[1, 0.4, 100, 16]} />
          <meshStandardMaterial color={'#ff0000'} />
        </mesh>
      </Canvas>
    </>
  )
}