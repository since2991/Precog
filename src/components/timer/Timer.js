import React from 'react';
import styled from 'styled-components';

export default function Timer({ time, title, dot = '' }) {
  return (
    <Wrapper>
      <Time>
        {time} <span>{dot}</span>
      </Time>
      <Title>{title}</Title>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Time = styled.p`
  font-size: 24px;
  line-height: 32px;

  color: #ffffff;

  span {
    margin: 0 8px;
  }
`;

const Title = styled.p`
  font-size: 10px;
  line-height: 12px;

  color: rgba(255, 255, 255, 0.5);
`;
