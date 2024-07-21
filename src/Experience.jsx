import { useFrame, useThree } from '@react-three/fiber'
import { Stage,Lightformer, Environment,Sky, ContactShadows, RandomizedLight, AccumulativeShadows, useHelper, OrbitControls,BakeShadows, SoftShadows } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import { Perf } from 'r3f-perf'
import * as THREE from 'three'
import {useControls} from 'leva'

export default function Experience()
{


    const cube = useRef()
    const shadow = useRef()
    

    const {color, opacity, blur} = useControls('contact shadows',{
        color: "#1d8f75",
        opacity: {value:0.4, min:0, max:1},
        blur: {value:2.8, min:0, max:10},

    })

    const {sunPosition} = useControls('Sky',{
        sunPosition: {value:[1,2,3]}
    })

    const { envMapIntensity, envMapHeight, envMapRadius, envMapScale} = useControls('environment map', {
        envMapIntensity: { value: 3.5, min: 0, max: 12 },
        envMapHeight:{value:7, min:0, max:100},
        envMapRadius:{value:28, min:10, max:1000},
        envMapScale:{value:100, min:10, max:1000},
    })

    

    // const scene = useThree(state => state.scene)
    // useEffect(()=>{
    //     scene.environmentIntensity = envMapIntensity
    // }, [envMapIntensity])
    

    const directionalLight = useRef()
    useHelper(directionalLight, THREE.DirectionalLightHelper, 1)
    

    useFrame((state, delta) =>
    {
        cube.current.rotation.y += delta * 0.2
        // const time = state.clock.elapsedTime
        // cube.current.position.x = 2 + Math.sin(time)        
    })

    return <>

        {/* 
        <Environment 
        background
        preset="sunset"
        ground={{

            height:envMapHeight, 
            radius:envMapRadius,
            scale:envMapScale


        }}

        > */}
        {/* <color args={['#000000']} attach="background"/> */}
        {/* <mesh position-z={-5} scale={10}>
            <planeGeometry/>
            <meshBasicMaterial color={[10,0,0]}/>
        </mesh> */}
        {/* <Lightformer 
            position-z={-5} 
            scale={10} 
            color="red"
            intensity={10}
            form="ring"
        
        
        /> */}


        {/* </Environment> */}

        {/* <Sky sunPosition={sunPosition}/> */}

        {/* <ContactShadows
            ref = {shadow}
            position={[0, 0, 0]}
            scale={10}
            resolution={512}
            far={5}
            color = {color}
            opacity={ opacity}
            blur = {blur}
            frame={1}


        
        /> */}

        {/* <SoftShadows size={ 25 } samples={ 10 } focus={ 0 } /> */}

        {/* <BakeShadows /> */}

        <Perf position="top-left" />

        <OrbitControls makeDefault />
{/* 
        <directionalLight 
        ref={directionalLight} 
        position={sunPosition}
        intensity={ 4.5 } 
        castShadow 
        shadow-mapSize={[2048, 2048]}
        shadow-camera-top={5}
        shadow-camera-right={5}
        shadow-camera-bottom={-5}
        shadow-camera-left={-5}
        shadow-camera-near={1}
        shadow-camera-far={10}
        /> */}

        {/* <ambientLight intensity={ 1.5 } /> */}

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



        {/* <mesh castShadow position-y={1}position-x={ - 2 }>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
        </mesh>

        <mesh castShadow position-y={1} ref={ cube } position-x={ 2 } scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh> */}

        {/* <mesh  position-y={ 0 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh> */}

<   Stage
        shadows={ {
            type: 'contact',
            opacity: 0.2,
            blur: 3
        } }
        environment="sunset"
        preset="portrait"
        intensity={ envMapIntensity }
 >
        <mesh castShadow position-y={1}position-x={ - 2 }>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
        </mesh>

        <mesh castShadow position-y={1} ref={ cube } position-x={ 2 } scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>

    </Stage>
            
            
            
            
            
            

    </>
}