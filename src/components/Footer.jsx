import React from 'react'
import styled from "styled-components"

export default function Footer() {
    return (
        <Wrap className='footer'>
            © 2025 KIM SOI. All rights reserved.
        </Wrap>
    )
}

const Wrap = styled.div`
    display: block;
    height: auto;
    font-weight: 200;
    font-size: 0.7rem;
    margin: 15px 0 0 0;
`
