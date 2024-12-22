import { Suspense } from 'react';
import './App.css'
import './index.css'
import { Canvas } from '@react-three/fiber';
import {CubeCamera, Environment, OrbitControls, PerspectiveCamera} from '@react-three/drei';
import { Ground } from './Ground';
import { Car } from './Car';
import { Rings } from './Rings';



function CarShow(){
  return <>
    <OrbitControls target = {[0,0.35,0]} maxPolarAngle = {1.45} />
    <PerspectiveCamera makeDefault fov={50} position={[3,2,5]}/>
    <color args={[0,0,0]} attach={'background'}
    //args passed to 3js constructor, attaches to canvas since component CarShow is placed in canvas
    />
    <spotLight
      color = {[1,0.25,0.7]}
      intensity = {250}
      angle = {0.6}
      penumbra = {0.5}
      position = {[5,5,0]}
      castShadow
      shadow-bias = {-0.0001}
    />
  
    <spotLight
      color = {[0.14,.5,1]}
      intensity = {200}
      angle = {0.6}
      penumbra = {0.5}
      position = {[-5,5,0]}
      castShadow
      shadow-bias = {-0.0001}
    />

    <CubeCamera resolution={256} frames={Infinity}>
      {(texture)=>(
        <>
        <Environment map={texture} />
        <Car/>
        </>
      )}
    </CubeCamera>


    <Ground/>
    <Rings/>
  </>
}

function App() {
  return <Suspense fallback={null}>
    <Canvas shadows>
      <CarShow/>
    </Canvas>
  </Suspense>
}

export default App;
