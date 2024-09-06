import { Box, Sphere, Torus } from "@react-three/drei";

const Shapes = () => {
    return (
      <>
        {/* Cubo a la izquierda */}
        <Box position={[-6, 2, -8]}>
          <meshStandardMaterial attach="material" color="orange" />
        </Box>
  
        {/* Esfera arriba a la derecha */}
        <Sphere position={[5, 5, -10]} args={[1.5, 32, 32]}>
          <meshStandardMaterial attach="material" color="lightblue" />
        </Sphere>
  
        {/* Torus debajo a la derecha */}
        <Torus position={[5, -3, -10]} args={[1.2, 0.4, 16, 100]}>
          <meshStandardMaterial attach="material" color="purple" />
        </Torus>
  
        {/* Cubo más pequeño a la izquierda abajo */}
        <Box position={[-4, -4, -8]} args={[1, 1, 1]}>
          <meshStandardMaterial attach="material" color="green" />
        </Box>
  
        {/* Luz */}
        <ambientLight intensity={0.3} />
        <directionalLight position={[0, 10, 5]} intensity={1} />
      </>
    );
  };

  export default Shapes;