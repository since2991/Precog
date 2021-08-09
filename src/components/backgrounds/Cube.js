import React from 'react';
import styled from 'styled-components';
import ParticleCube from './ParticleCube';

export default function Cube() {
  const item1 = {
    width: 550.26,
    height: 319.12,
    left: 730.44,
    top: 132.88,
    src: '/images/cube/top.svg',
    color: '#A6D2DA',
  };
  const item2 = {
    width: 568.23,
    height: 327.96,
    left: 721.45,
    top: 319,
    src: '/images/cube/bottom.svg',
    color: '#f17171',
  };
  const item3 = {
    width: 329,
    height: 470,
    left: 981,
    top: 152,
    src: '/images/cube/side.svg',
    color: '#3A2F4F',
  };
  return (
    <Wrapper>
      {/* <Part1 src="/images/cube/bottom.svg" />
      <Part2 src="/images/cube/top.svg" />
      <Part3 src="/images/cube/side.svg" /> */}
      <ParticleCube items={item1} />
      <ParticleCube items={item2} />
      <ParticleCube items={item3} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;

  /* :nth-child(1) {
    left: 841px;
    top: 197px;
  }
  :nth-child(2) {
    left: 841px;
    top: 197px;
  }
  :nth-child(3) {
    left: 1012px;
    top: 197px;
  } */
`;

// const Part1 = styled.img`
//   position: absolute;
//   left: 841px;
//   top: 197px;
// `;
// const Part2 = styled.img`
//   position: absolute;
//   left: 841px;
//   top: 197px;
// `;
// const Part3 = styled.img`
//   position: absolute;
//   left: 1012px;
//   top: 197px;
// `;
