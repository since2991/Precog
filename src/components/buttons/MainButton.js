import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

export default function MainButton({ src, title, bg = true, color = 'white', iconSize = '32px' }) {
  return (
    <Link to="/page-2">
      <Wrapper bg={bg}>
        <IconWrapper>
          <Icon src={src} alt={title} iconSize={iconSize} />
        </IconWrapper>
        <TextWrapper>
          <Title color={color}>{title || 'Lightpaper'}</Title>
        </TextWrapper>
      </Wrapper>
    </Link>
  );
}

const Wrapper = styled.div`
  width: 180px;
  height: 48px;
  /* background: #5bd2da; */
  background: ${props => (props.bg ? '#5bd2da' : '')};

  display: grid;
  grid-template-columns: 24px auto;
  justify-content: center;
  align-items: center;
  gap: ${props => (props.bg ? '10px' : '20px')};
`;

const IconWrapper = styled.div``;

const TextWrapper = styled.div``;

const Icon = styled.img`
  height: ${props => props.iconSize};
  width: ${props => props.iconSize};
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;

  color: ${props => props.color};
`;
