import { TailSpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
    >
      <TailSpin
        height="80"
        width="80"
        color="#ff6b08" // Turuncu tema rengimiz
        ariaLabel="tail-spin-loading"
        radius="1"
        visible={true}
      />
    </div>
  );
};

export default Loader;
