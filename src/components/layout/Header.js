import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import menuData from '../../data/menuData';
import MenuButton from '../buttons/MenuButton';

export default function Header() {
  return (
    <Wrapper>
      <Link to="/">
        <img src="/images/logos/logo.svg" alt="Percog" />
      </Link>
      <MenuWrapper length={menuData.length}>
        {menuData.map(item => (
          <MenuButton item={item} key={item.key} length={menuData.length} />
        ))}
      </MenuWrapper>
      <Button type="button">Buy Token</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 30px;
  max-width: 1440px;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: space-between;

  padding: 0 130px;
  z-index: 100;
`;

const MenuWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.length}, auto);
  gap: 40px;
  align-items: center;
`;

const Button = styled.button`
  width: 130px;
  height: 48px;
  background: #f06969;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  border: none;

  color: #f5e7d9;
`;
