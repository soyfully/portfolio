import React, { useEffect } from 'react';
import styled from "styled-components"
import Nav from "../../components/nav"
import breakpoints from '../../config/breakpoint'
import '../../asset/css/animate.css';

function Main() {
  useEffect(() => {
    const highLights = document.querySelectorAll('.highLight');

    for (let i = 0; i < highLights.length; i++) {
      setTimeout(() => {
        highLights[i].classList.add('animate');
      }, i * 150);
    }
  }, []);

  return (
    <Wrap>
      <Nav/>

      <Info>
        <Title>Hello, I'm <Highlight className='highLight'>SOI</Highlight>.</Title>
        <Desc>
          I'm a <Highlight className='highLight'>frontend</Highlight> <br /> <Highlight className='highLight'>developer</Highlight>.
          I primarily <br /> work with <Highlight className='highLight'>React</Highlight>, <Highlight className='highLight'>SEO</Highlight>, <br /> and <Highlight className='highLight'>Web Performance</Highlight>.
        </Desc>
      </Info>
      <Footer>
        © 2024 KIM SOI. All rights reserved.
      </Footer>
    </Wrap>
  )
}

const Wrap = styled.div`
  position: relative;
  padding: 50px;
  height: calc(100vh - 100px);
  background: rgb(252 218 106);
  color: #222;
  letter-spacing: -1px;
  line-height: 1.1;
  font-weight: 900;
`;

const Info = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${breakpoints.medium})   {
    font-size: 1.3rem;
  }

  @media (min-width: ${breakpoints.medium}) {
    font-size: 2.5rem;
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 3.5rem;
  }

  @media (min-width: ${breakpoints.extraLarge}) {
    font-size: 4.5rem;
  }
`;

const Title = styled.span`
  display: block;
`;

const Desc = styled.span`
  display: block;
`;

const Highlight = styled.span`
  position: relative;
  color: rgb(252 218 106);

  &::before {
    content: '';
    position: absolute;
    display: block;
    background: #222;
    width: 0%;
  }

  @media (max-width: ${breakpoints.medium}) {
    &::before {
      top: 4px;
      height: 24px;
    }
  }

  @media (min-width: ${breakpoints.medium}) {
    &::before {
      top: 10px;
      height: 40px;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    &::before {
      top: 14px;
      height: 58px;
    }
  }

  @media (min-width: ${breakpoints.extraLarge}) {
    &::before {
      top: 19px;
      height: 70px;
    }
  }
`;
const Footer = styled.span`
  display: block;
  height: auto;
  font-weight: 200;
  font-size: 1rem;
`

export default Main
