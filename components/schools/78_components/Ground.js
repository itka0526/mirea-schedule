import { usePlane } from "@react-three/cannon";

const Ground = () => {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
        position: [0, -0.5, 0],
    }));

    return (
        <mesh ref={ref}>
            <planeGeometry attach="geometry" args={[100, 100]} />
            <meshStandardMaterial color={"#e1e2e3"} />
        </mesh>
    );
};

export default Ground;
