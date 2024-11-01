import { Environment } from '@react-three/drei';

const Sky = (props) => {
    return (
        <Environment ground={{
            height: 20,
            radius: 60,
            scale: 100,
        }}
        files={[
            "px.png",
            "nx.png",
            "py.png",
            "ny.png",
            "pz.png",
            "nz.png",
        ]}
        path="/cubemap/sky/"
        background={true}/>
    );
};

export default Sky;