// import React from "react";
// import Particles from "react-tsparticles";

// function Particle() {
//   return (
//     <Particles
//       id="tsparticles"
//       params={{
//         particles: {
//           number: {
//             value: 160,
//             density: {
//               enable: true,
//               value_area: 1500,
//             },
//           },
//           line_linked: {
//             enable: false,
//             opacity: 0.03,
//           },
//           move: {
//             direction: "right",
//             speed: 0.05,
//           },
//           size: {
//             value: 1,
//           },
//           opacity: {
//             anim: {
//               enable: true,
//               speed: 1,
//               opacity_min: 0.05,
//             },
//           },
//         },
//         interactivity: {
//           events: {
//             onclick: {
//               enable: true,
//               mode: "push",
//             },
//           },
//           modes: {
//             push: {
//               particles_nb: 1,
//             },
//           },
//         },
//         retina_detect: true,
//       }}
//     />
//   );
// }

// export default Particle;


import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 80, // Adjust the number of diamonds
            density: {
              enable: true,
              value_area: 800,
            },
          },
          shape: {
            type: "polygon", // Use polygon for diamond shape
            polygon: {
              sides: 4, // 4 sides to create a diamond shape
            },
          },
          size: {
            value: 6, // Adjust the size of the diamonds
            random: true, // Randomize the size slightly
          },
          move: {
            enable: true,
            speed: 1, // Adjust the speed of movement
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
          },
          opacity: {
            value: 0.8, // Adjust the transparency of the diamonds
            random: true,
          },
          color: {
            value: "#5B7D9A", // Set the color of the diamonds (light navy blue)
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse", // Repulse effect on hover
            },
            onclick: {
              enable: true,
              mode: "push", // Add more diamonds on click
            },
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
          },
        },
        retina_detect: true,
        background: {
          color: {
            value: "#001F3F", // Set background color to dark navy blue
          },
        },
      }}
    />
  );
}

export default Particle;