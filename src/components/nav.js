import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components";

function Nav() {
  return (
    <Navi>
      <Link to="main">Main</Link>
      <Link to="about">About</Link>
      <Link to="about">Works</Link>
      <Link to="study">Study</Link>
    </Navi>
  )
}

const Navi = styled.div`
    a {
        display: block;
    }
`;

export default Nav
