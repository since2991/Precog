import React from "react"
import styled from "styled-components"
import MainButton from "../buttons/MainButton"
import Timer from "./Timer"

export default function LowerTimer() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <TimerWrapper>
            <Timer time="60" title="hours" dot=":" />
            <Timer time="06" title="hours" dot=":" />
            <Timer time="03" title="hours" dot=":" />
            <Timer time="01" title="hours" />
          </TimerWrapper>{" "}
          <Text>
            PCOG public offering on Lemonade followed by liquidity event on
            Quickswap Sep 1 st{" "}
          </Text>{" "}
        </TextWrapper>{" "}
        <ButtonWrapper>
          <MainButton
            src="/images/icons/build.svg"
            title="Etherscan"
            bg={false}
            color="#FF6D6D"
          />
          <MainButton
            src="/images/icons/mark.svg"
            title="Conditions of sale"
            bg={false}
          />{" "}
        </ButtonWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  /* border: 1px solid red; */
  bottom: 5%;
  width: 100%;
`

const ContentWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 130px;
  display: grid;
  grid-template-columns: 600px auto;
  justify-content: space-between;
`

const TextWrapper = styled.div`
  display: grid;
  grid-template-columns: 220px auto;
  gap: 40px;
`

const TimerWrapper = styled.div`
  width: 220px;
  display: grid;
  grid-template-columns: repeat(4, auto);
`

const Text = styled.p`
  align-self: center;
  width: 280px;
  font-size: 13px;
  line-height: 17px;

  color: #ffffff;

  opacity: 0.72;
`

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
`
