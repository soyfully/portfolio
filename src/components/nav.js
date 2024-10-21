import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import styled from "styled-components"
import breakpoints from '../config/breakpoint'

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Icon onClick={toggleMenu}>
        <Line />
        <Line />
        <Line />
      </Icon>

      <LinkWrap className={!isOpen? `close`: ``}>
        <Link to="/">MAIN</Link>
        <Link to="about">ABOUT ME</Link>
        <Link to="about">WORKS</Link>
        <Link to="study">STUDY</Link>
      </LinkWrap>  
    </>
  )
}

const Icon = styled.button`
  border: 0;
  margin: 0;
  padding: 0;
  background: none;
  cursor: pointer;
  width: 30px;
  height: 15px;
  position: absolute;
  right: 50px;
  top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 2;
`
const Line = styled.span`
  display: block;
  width: 100%;
  height: 3px;
  background: #222;
`
const LinkWrap = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    backdrop-filter: blur(15px);
    z-index: 1;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;

    &.close {
      display: none;
    }

    a {
      position: relative;
      display: inline-block;
      width: 100%;
      color: #222;
      text-align: center;
      text-decoration: none;
      line-height: 1;
      margin-bottom: 5px;
      font-weight: 900;
      letter-spacing: -1px;
      
      &:last-child {
        margin-bottom: 0;
      }

      @media (max-width: ${breakpoints.medium})   {
        font-size: 1.3rem;
      }

      @media (min-width: ${breakpoints.medium}) {
        font-size: 2rem;
      }

      @media (min-width: ${breakpoints.large}) {
        font-size: 3rem;
      }

      @media (min-width: ${breakpoints.extraLarge}) {
        font-size: 4rem;
      }
    }
`;

export default Nav
