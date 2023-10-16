import Particles from "react-tsparticles";
import { useCallback } from "react";
import { particlesConfig } from "./config/particles-config.js";
import { loadSlim } from "tsparticles-slim";

//1. rafce
const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadSlim(engine);
    // await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesConfig}
      className="h-screen absolute z-0"
    />
  );
};
export default ParticlesBackground;
