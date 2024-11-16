import { Environment } from "@react-three/drei";

// eslint-disable-next-line no-unused-vars
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
