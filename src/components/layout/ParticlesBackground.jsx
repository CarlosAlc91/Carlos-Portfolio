import Particles from "react-tsparticles";
import { useCallback, useEffect, useState } from "react";
import { particlesConfig } from "./config/particles-config.js";
import { loadFull } from "tsparticles";

//1. rafce
const ParticlesBackground = (props) => {
  const [theme, setTheme] = useState("light");
  const [particlesContainer, setparticlesContainer] = useState();
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
    // await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    setparticlesContainer(container);
  }, []);

  useEffect(() => {
    if (particlesContainer && particlesContainer.currentTheme !== theme) {
      particlesContainer.loadTheme(theme);
    }
  }, [theme, particlesContainer]);

  return (
    <div id="particle-bg">
      <div>
       {/*  <h1>prueba</h1>
        <button
          className="border-2 bg-[rgb(15,14,22)]"
          onClick={() => setTheme("light")}
        >
          light
        </button>
        <button
          className="border-2 bg-[#32CD32]"
          onClick={() => setTheme("dark")}
        >
          dark
        </button> */}

        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particlesConfig}
          className="h-screen w-full absolute mx-auto"
        />
      </div>
    </div>
  );
};
export default ParticlesBackground;
