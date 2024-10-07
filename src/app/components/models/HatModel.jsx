"use client"

import React, { useRef } from 'react'
import { useFrame } from "@react-three/fiber";
import { useGLTF } from '@react-three/drei'

export default function HatModel(props) {
  const { nodes, materials } = useGLTF('/models/hat-transformed.glb');
  const modelRef = useRef();

  useFrame(() => {
    modelRef.current.rotation.y += 0.006
  })
  return (
    <group {...props} dispose={null}
    ref={modelRef}
    scale={[1.8,1.8,1.8]}
    position={[0,0,0]}
   
    >
       <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.initialShadingGroup}
        position={[0, -3.86715, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}


useGLTF.preload('/models/hat-transformed.glb')