import * as THREE from 'three';
import React, { useState, useRef, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import './App.css';
const tempObject = new THREE.Object3D();

function Plant() {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.y += 0.003;
  });
  const gltf = useLoader(GLTFLoader, '/scene.gltf');
  return <primitive ref={ref} object={gltf.scene} position={[0, 0, 0]} />;
}

function Scene() {
  return (
    <>
      <ambientLight />
      <pointLight intensity={0.7} position={[0, 10, 4]} />
      <Suspense fallback={null}>
        <Plant />
      </Suspense>
    </>
  );
}

function App() {
  return (
    <>
 
      <Canvas
        OrbitControls
        style={{ height: '90vh' }}
        camera={{ position: [1, 1, 1.5] }}
      >
        <Scene />
      </Canvas>
     
    </>
  );
}

export default App;
