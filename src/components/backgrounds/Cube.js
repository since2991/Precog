// import React from 'react';
// import styled from 'styled-components';
// import ParticleCube from './ParticleCube';

// export default function Cube() {
//   const item1 = {
//     width: 550.26,
//     height: 319.12,
//     left: 730.44,
//     top: 132.88,
//     src: '/images/cube/top.svg',
//     color: '#A6D2DA',
//   };
//   const item2 = {
//     width: 568.23,
//     height: 327.96,
//     left: 721.45,
//     top: 319,
//     src: '/images/cube/bottom.svg',
//     color: '#f17171',
//   };
//   const item3 = {
//     width: 329,
//     height: 470,
//     left: 981,
//     top: 152,
//     src: '/images/cube/side.svg',
//     color: '#3A2F4F',
//   };
//   return (
//     <Wrapper>
//       {/* <Part1 src="/images/cube/bottom.svg" />
//       <Part2 src="/images/cube/top.svg" />
//       <Part3 src="/images/cube/side.svg" /> */}
//       <ContentWrapper>

//       <ParticleCube items={item1} />
//       <ParticleCube items={item2} />
//       <ParticleCube items={item3} />
//       </ContentWrapper>
//     </Wrapper>
//   );
// }

// const Wrapper = styled.div`
//   /* position: absolute; */
//   position: absolute;
//   /* :nth-child(1) {
//     position: absolute;
//     left: 841px;
//     top: 197px;
//   }
//   :nth-child(2) {
//     position: absolute;
//     left: 841px;
//     top: 197px;
//   }
//   :nth-child(3) {
//     position: a;
//     left: 1012px;
//     top: 197px;
//   } */
// `;

// const ContentWrapper = styled.div`
// position: absolute;
// width: 438.81px;
// height: 380px;
// left: 840px;
// top: 197px;
// `;

// // const Part1 = styled.img`
// //   position: absolute;
// //   left: 841px;
// //   top: 197px;
// // `;
// // const Part2 = styled.img`
// //   position: absolute;
// //   left: 841px;
// //   top: 197px;
// // `;
// // const Part3 = styled.img`
// //   position: absolute;
// //   left: 1012px;
// //   top: 197px;
// // `;

// Lastest Cube
import React from "react"
import ParticleImage, {
  ParticleOptions,
  Vector,
  forces,
  ParticleForce,
} from "react-particle-image"
import styled from "styled-components"

// Round number up to nearest step for better canvas performance
const round = (n, step = 20) => Math.ceil(n / step) * step

// Try making me lower to see how performance degrades
const STEP = 30

const particleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y)
    // Make a particle for this pixel if magnitude < 200 (range 0-255)
    const magnitude = (pixel.r + pixel.g + pixel.b) / 3
    return magnitude < 200
  },
  color: ({ x, y, image }) => {
    const pixel = image.get(x, y)
    // Canvases are much more performant when painting as few colors as possible.
    // Use color of pixel as color for particle however round to nearest 30
    // to decrease the number of unique colors painted on the canvas.
    // You'll notice if we remove this rounding, the framerate will slow down a lot.
    return `rgba(
      ${round(pixel.r, STEP)}, 
      ${round(pixel.g, STEP)}, 
      ${round(pixel.b, STEP)}, 
      ${round(pixel.a, STEP) / 255}
    )`
  },
  radius: ({ x, y, image }) => {
    const pixel = image.get(x, y)
    const magnitude = (pixel.r + pixel.g + pixel.b) / 3
    // Lighter colors will have smaller radius
    return 2 - (magnitude / 255) * 1.5
  },
  mass: () => 40,
  friction: () => 0.15,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2)
  },
}

const motionForce = (x, y) => {
  return forces.disturbance(x, y, 20)
}
const motionForceT = (x, y) => {
  return forces.disturbance(x, y, 10)
}

export default function Cube() {
  return (
    <Wrapper>
      <ContentWrapper>
        <ParticleImage
          src={"/images/cube/cube.svg"}
          width={438.81}
          height={380}
          scale={0.8}
          entropy={15}
          maxParticles={8000}
          particleOptions={particleOptions}
          mouseMoveForce={motionForce}
          touchMoveForce={motionForceT}
          backgroundColor="transparent"
        />
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  z-index: 1000;
`

const ContentWrapper = styled.div`
  position: absolute;
`
