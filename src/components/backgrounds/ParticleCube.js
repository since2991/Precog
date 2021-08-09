import React from 'react';
import ParticleImage, { forces, Vector } from 'react-particle-image';
import styled from 'styled-components';

export default function ParticleCube({ items }) {
  const { width, height, left, top, src, color } = items;

  const particleOptions = {
    filter({ x, y, image }) {
      // Get pixel
      const pixel = image.get(x, y);
      // Make a particle for this pixel if blue > 50 (range 0-255)
      return pixel.b > 50;
    },
    color() {
      return color;
    },

    radius: () => Math.random() * 1.5 + 0.5,
    mass: () => 50,
    friction: () => 0.4,
    initialPosition({ canvasDimensions }) {
      return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
    },
  };

  const motionForce = (x, y) => forces.disturbance(x, y, 10);
  return (
    <Wrapper>
      <Particle top={top} left={left}>
        <ParticleImage
          style={{
            backgroundColor: 'transparent',
          }}
          src={src}
          width={width}
          height={height}
          scale={1}
          entropy={35}
          maxParticles={3200}
          particleOptions={particleOptions}
          mouseMoveForce={motionForce}
          touchMoveForce={motionForce}
        />
      </Particle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

const Particle = styled.div`
  position: absolute;
  left: ${prop => prop.left}px;
  top: ${prop => prop.top}px;
`;
