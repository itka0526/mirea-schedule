import { Physics, useBox, usePlane } from "@react-three/cannon";
import { Sky } from "@react-three/drei";
import { act, Canvas, useThree } from "@react-three/fiber";
import FPV from "../../components/schools/78_components/FPV";
import Ground from "../../components/schools/78_components/Ground";
import Player from "../../components/schools/78_components/Player";

//import * as THREE from "three";
import Builder from "../../components/schools/78_components/Builder";

export default function MainBuilding() {
    return (
        <div className="min-h-[100vh] grid grid-cols-1">
            <Canvas>
                <Sky sunPosition={[100, 100, 20]} />
                <ambientLight intensity={0.5} />
                <FPV />

                <Physics>
                    <Building />
                    <Player />
                    <Ground />
                </Physics>
            </Canvas>
            <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                •
            </div>
        </div>
    );
}

const Building = () => {
    return Builder()
        .addX({ x: { from: -5, to: 5 }, y: { from: 0, to: 3 }, z: -5 })
        .addX({ x: { from: -5, to: 5 }, y: { from: 0, to: 3 }, z: 5 })
        .addZ({ x: -5, y: { from: 0, to: 3 }, z: { from: -5, to: 5 } })
        .addZ({ x: 5, y: { from: 0, to: 3 }, z: { from: -5, to: 5 } })
        .addY({ x: { from: 0, to: 0 }, y: 3, z: { from: 0, to: 0 } })
        .walls.map(({ position, direction }, idx) => (
            <MyWall
                key={"building_item_" + idx}
                position={position}
                direction={direction}
            />
        ));
};

const MyWall = ({ position, direction = "towards" }) => {
    const [ref] = useBox(() => ({
        type: "Static",
        rotation: directions[direction],
        position,
    }));

    return (
        <mesh ref={ref}>
            <boxGeometry attach="geometry" />
            <meshStandardMaterial
                color={"red"}
                transparent={true}
                opacity={0.6}
                attach="material"
            />
        </mesh>
    );
};

const MyWindow = ({ position }) => {
    const [ref] = useBox(() => ({
        type: "Static",
        position,
    }));

    return (
        <mesh ref={ref}>
            <ringGeometry
                args={[0.75, 0.7, 4, undefined, Math.PI / 4]}
                attach="geometry"
            />
            <meshStandardMaterial
                side={2}
                color={"red"}
                transparent={true}
                // opacity={texture === "glass" ? 0.6 : 1}
                attach="material"
            />
        </mesh>
    );
};

const directions = {
    left: [0, Math.PI, 0],
    // right: [0, -Math.PI / 2, 0],
    towards: [0, Math.PI / 2, 0],
    // back: [0, 0, 0],
};

const MyFloor = ({ position }) => {
    const [ref] = usePlane(() => ({
        type: "Static",
        rotation: [-Math.PI / 2, 0, 0],
        position,
    }));

    return (
        <mesh ref={ref}>
            <planeGeometry attach="geometry" r />
            <meshStandardMaterial
                side={2}
                color={"red"}
                transparent={true}
                // opacity={texture === "glass" ? 0.6 : 1}
                attach="material"
            />
        </mesh>
    );
};
