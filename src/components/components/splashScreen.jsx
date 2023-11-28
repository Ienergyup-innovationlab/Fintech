import spimage from "./images/fundcraft.png";

function splashScreen() {
  return (
    <div className=" bg-white flex items-center justify-center min-h-screen">
      <div className=" flex items-center justify-center">
        <img src={spimage} alt="logo" />
      </div>
    </div>
  );
}

export default splashScreen;
