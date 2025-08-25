import React from 'react'
import styled from "styled-components";
import { Outlet } from 'react-router-dom'

function Study() {
  return (
    <Wrap className='container'>
      study
      <Outlet />
    </Wrap>
  )
}

const Wrap = styled.div`
  background: #8fda95;
`

export default Study
