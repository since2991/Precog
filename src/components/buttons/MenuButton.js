import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

export default function MenuButton({ item, length }) {
  const { title, url = '/', key } = item;
  return (
    <Link to={url}>
      <MenuItem>
        <Title dot={key === length}>{title}</Title>
      </MenuItem>
    </Link>
  );
}

const MenuItem = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;

  color: #ffffff;
  position: relative;

  :hover {
    color: #f27272;
  }
`;

const Title = styled.p`
  ::after {
    pointer-events: none;
    position: absolute;
    content: '';
    top: 7px;
    right: -20px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background-color: ${props => (props.dot ? '' : '#ffffff')};
  }
`;
