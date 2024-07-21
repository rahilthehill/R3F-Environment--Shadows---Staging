import { useFrame } from '@react-three/fiber'
import { ContactShadows, RandomizedLight, AccumulativeShadows, useHelper, OrbitControls,BakeShadows, SoftShadows } from '@react-three/drei'
import { useRef } from 'react'
import { Perf } from 'r3f-perf'
import * as THREE from 'three'

export default function Experience()
{
    const cube = useRef()
    

    const directionalLight = useRef()
    useHelper(directionalLight, THREE.DirectionalLightHelper, 1)
    

    useFrame((state, delta) =>
    {
        cube.current.rotation.y += delta * 0.2
        // const time = state.clock.elapsedTime
        // cube.current.position.x = 2 + Math.sin(time)        
    })

    return <>

        <ContactShadows

            position={[0,-0.99, 0]}
            scale={10}
            
        
        />

        {/* <SoftShadows size={ 25 } samples={ 10 } focus={ 0 } /> */}

        {/* <BakeShadows /> */}

        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight 
        ref={directionalLight} 
        position={ [ 1, 2, 3 ] } 
        intensity={ 4.5 } 
        castShadow 
        shadow-mapSize={[2048, 2048]}
        shadow-camera-top={5}
        shadow-camera-right={5}
        shadow-camera-bottom={-5}
        shadow-camera-left={-5}
        shadow-camera-near={1}
        shadow-camera-far={10}
        />
        <ambientLight intensity={ 1.5 } />

        {/* <AccumulativeShadows
        position={[0,-0.99,0]}
        scale={10}
        color="#316d39"
        opacity={0.8}
        frames= {Infinity}
        temporal
        blend = {100}
        >
            <RandomizedLight
                amount={ 8 }
                radius={ 1 }
                ambient={ 0.5 }
                intensity={ 3 }
                position={ [ 1, 2, 3 ] }
                bias={ 0.001 }
                
            />
        </AccumulativeShadows> */}



        <mesh castShadow position-x={ - 2 }>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
        </mesh>

        <mesh castShadow ref={ cube } position-x={ 2 } scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>

        <mesh  position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

    </>
}