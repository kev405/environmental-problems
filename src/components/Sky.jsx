import { Environment } from "@react-three/drei";

const Sky = (props) => {
  return (
    <Environment
      ground={{
        height: 20,
        radius: 60,
        scale: 100,
      }}
      files="/cubemap/sky/lakeside_2k.hdr"
      background={true}
    />
  );
};

export default Sky;
