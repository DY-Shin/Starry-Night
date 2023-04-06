/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-return-assign */
/* eslint-disable import/no-extraneous-dependencies */
import * as THREE from 'three';
import { createRoot } from 'react-dom/client';
import React, { useRef, useState } from 'react';
import { Canvas, useFrame, ThreeElements, useThree } from '@react-three/fiber';
import { Stars, Sparkles, SpotLight, CameraShake, Points } from '@react-three/drei';

export default function Back() {
  return (
    <div>
      <Canvas
        style={{
          backgroundColor: 'black',
          width: '100vw',
          height: '100vh',
          color: 'white',
          position: 'fixed',
          zIndex: '-1',
        }}
      >
        {/* <Foo /> */}
        <Stars radius={300} depth={60} count={20000} factor={7} saturation={1000} fade={true} speed={1} />
        {/* <Sparkles size={10} opacity={5} speed={5} noise={1} color="gold" /> */}
        {/* {/* <SpotLight position={[2, -1, 2]} color="gold" castShadow /> */}
        {/* <SpotLight position={[-2, -1, 2]} intensity={5} scale={1} up={203} />
        <SpotLight position={[-2, -1, 2]} intensity={5} scale={1} up={203} /> */}
        {/* <SpotLight position={[2.5, 1, 0.5]} anglePower={0.5} distance={5} /> */}
        {/* <SpotLight position={[-4, 1.5, -0.5]} anglePower={1} distance={5} /> */}
        {/* <SpotLight position={[1, -2, 0]} /> */}
        {/* <SpotLight position={[2, -2, 0]} /> */}
        {/* <SpotLight position={[2, -1.2, 2]} intensity={5} scale={1} up={203} /> */}
        {/* <SpotLight distance={200} intensity={5} color="#fadcb9" position={[5, 7, -2]} volumetric={false} /> */}
        {/* <CameraShake /> */}
        {/* 
        position={[0, 0, 10]} 
        args={[100, 20, "#4D089A", "#4D089A"]}
        position={[0, 0, -10]}
        rotation={[-Math.PI / 2, 0, 0]}
        rotation-x={Math.PI * 0.25} rotation-y={Math.PI * 0.25}
        */}
        <Points />
        {/* <Box2 position={[1, 0, 0]} /> */}
      </Canvas>
    </div>
  );
}
