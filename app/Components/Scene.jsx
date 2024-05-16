"use client";
import { Canvas, useLoader } from "@react-three/fiber"
import { TextureLoader } from "three"; 
import { OrbitControls, Environment } from '@react-three/drei';

function Object() {
  
    const bottom = useLoader(TextureLoader, "/assets/bottom.png");  
    const top = useLoader(TextureLoader, "/assets/top.png");
    const sides = useLoader(TextureLoader, "/assets/sides.png");

    return(
        <mesh>
            <OrbitControls />
            <boxGeometry />
            <meshStandardMaterial map={sides} attach={"material-0"}/>
            <meshStandardMaterial map={sides} attach={"material-1"}/>
            <meshStandardMaterial map={top} attach={"material-2"}/>
            <meshStandardMaterial map={bottom} attach={"material-3"}/>
            <meshStandardMaterial map={sides} attach={"material-4"}/>
            <meshStandardMaterial map={sides} attach={"material-5"}/>
        </mesh>
    )
}

const Scene = () => {


  return (
    <Canvas>
        <Environment preset="forest" background />
        <Object />
    </Canvas>
  )
}

export default Scene

