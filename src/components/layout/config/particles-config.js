

export const particlesConfig = [{
  autoPlay: true,
  background: {

    color: {
      value: "#9ca3af",
    },
    image: "",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover",
    opacity: 1
  },

  backgroundMask: {
    composite: "destination-out",
    cover: {
      color: {
        value: "#fff"
      },
      opacity: 1
    },
    enable: false
  },
  delay: 0,
  fullScreen: {
    enable: false,
    zIndex: 1
  },
  detectRetina: true,
  duration: 0,
  fpsLimit: 120,
  interactivity: {
    detectsOn: "window",
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onDiv: {
        Selectors: {},
        enable: false,
        mode: {},
        type: "circle"
      },
      onHover: {
        enable: true,
        mode: "grab",
        parallax: {
          enable: true,
          force: 60,
          smooth: 10
        }
      },
      resize: {
        delay: 0.5,
        enable: true
      },
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 200,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 3,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.7,
    },
    shape: {
      type: "square",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },

}]
