import React from 'react';
import styled from 'styled-components';
import Cube from '../backgrounds/Cube';
import MainButton from '../buttons/MainButton';
import LowerTimer from '../timer/LowerTimer';

export default function HeroSection() {
  return (
    <Wrapper>
      <Cube />
      <ContentWrapper>
        <TextWrapper>
          <Text>
            <Caption>Futures ecosystem</Caption>
            <Title>Automated basis trade aggregator</Title>
          </Text>
          <ButtonWrapper>
            <MainButton
              src="/images/icons/paper.svg"
              title="Lightpaper"
              iconSize="24px"
              color=" #413951"
            />
            <MainButton
              src="/images/icons/arrow.svg"
              title="Join to waitlist"
              bg={false}
              iconSize="32px"
              color="#F17171"
            />
          </ButtonWrapper>
        </TextWrapper>
        <LowerTimer />
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #322d3d;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 1440px;
  height: 100vh;
  margin: 0 auto;
  padding: 200px 130px 0px 130px;
`;

const TextWrapper = styled.div`
  display: grid;
  gap: 70px;
`;

const Title = styled.h1`
  color: #ffffff;
  max-width: 670px;
  font-weight: bold;
  font-size: 64px;
  line-height: 70px;
`;

const Caption = styled.p`
  position: relative;
  font-size: 14px;
  line-height: 130%;
  text-transform: uppercase;

  color: #ff6d6d;

  margin-bottom: 16px;

  ::before {
    position: absolute;
    content: '';
    top: 7px;
    left: -100px;
    width: 80px;
    border: 1px solid #ff6d6d;
  }
`;

const Text = styled.div``;

const ButtonWrapper = styled.div`
  justify-self: start;
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 45px;
`;
